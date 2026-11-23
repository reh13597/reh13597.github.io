// Vercel Function: GET /api/now-playing
// Keeps the Spotify client secret and refresh token server-side; the browser only sees song data.

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

// Access tokens last ~1 hour; reuse one across requests while this instance stays warm
let cachedToken = null;

const json = (body, status = 200) =>
    Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

const getAccessToken = async () => {
    if (cachedToken && Date.now() < cachedToken.expiresAt) return cachedToken.value;

    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;
    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
        throw new Error('Missing SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET or SPOTIFY_REFRESH_TOKEN');
    }

    const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
    });
    const data = await response.json();
    if (!response.ok || !data.access_token) {
        throw new Error(`Spotify token refresh failed: ${data.error_description || data.error || response.status}`);
    }
    cachedToken = { value: data.access_token, expiresAt: Date.now() + (data.expires_in - 60) * 1000 };
    return data.access_token;
};

export async function GET() {
    try {
        const accessToken = await getAccessToken();
        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (response.status === 204) return json({ song: null });
        if (response.status === 401) cachedToken = null;
        if (!response.ok) throw new Error(`Spotify now-playing request failed: ${response.status}`);

        const song = await response.json();
        // item is null for ads and some podcast/private-session states
        if (!song?.item) return json({ song: null });

        return json({
            song: {
                title: song.item.name,
                artist: song.item.artists?.map((a) => a.name).join(', ') ?? '',
                albumArt: song.item.album?.images?.[0]?.url,
                songUrl: song.item.external_urls?.spotify,
                isPlaying: song.is_playing,
                progress: song.progress_ms,
                duration: song.item.duration_ms,
            },
        });
    } catch (error) {
        // Log the real reason for Vercel's logs, but don't leak details to visitors
        console.error('[now-playing]', error);
        return json({ error: 'Spotify unavailable' }, 502);
    }
}
