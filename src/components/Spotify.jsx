import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  const basic = btoa(`${client_id}:${client_secret}`);
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
  return response.json();
};

const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    if (response.status === 204 || response.status > 400) return null;
    const song = await response.json();
    if (!song || !song.item) return null;
    return {
      title: song.item.name,
      artist: song.item.artists.map(a => a.name).join(', '),
      albumArt: song.item.album.images[0].url,
      songUrl: song.item.external_urls.spotify,
      isPlaying: song.is_playing,
    };
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return null;
  }
};

const NowPlayingSpotify = () => {
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      const data = await getNowPlaying();
      setSong(data);
    };
    fetchSong();
    const interval = setInterval(fetchSong, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center max-w-[90vw]">
      <AnimatePresence mode="wait">
        {song ? (
          <motion.div
            key="playing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex flex-col items-center gap-1.5 w-full"
          >
            <span className="text-xs text-white">Spotify Status:</span>
            <a
              href={song.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-2 bg-base-200/50 backdrop-blur-md border border-neutral rounded-2xl hover:border-primary/50 transition-all duration-300 shadow-2xl shadow-primary/20 hover:shadow-primary/30 w-full"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={song.albumArt}
                  alt="Album Art"
                  className="w-10 h-10 rounded-xl animate-spin-slow group-hover:animate-pause shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 bg-base-300 rounded-full w-5 h-5 flex items-center justify-center border border-white/10 shadow-lg">
                  <FontAwesomeIcon icon={faSpotify} className="text-[#1DB954] text-xs" />
                </div>
              </div>

              <div className="flex flex-col min-w-0 pr-1 flex-1">
                <p className="text-[14px] font-bold text-white truncate group-hover:text-primary transition-colors max-w-[150px] md:max-w-[250px]">
                  {song.title}
                </p>
                <p className="text-[11px] text-white/60 truncate -mt-0.5">
                  {song.artist}
                </p>
              </div>
            </a>
          </motion.div>
        ) : (
          <motion.div
            key="not-playing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center gap-1.5"
          >
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Spotify Status::</span>
            <div className="flex items-center gap-2 px-4 py-2 bg-base-200/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-primary/10">
              <FontAwesomeIcon icon={faSpotify} className="text-[#1DB954] text-lg" />
              <p className="text-[11px] font-bold text-white/60">Not listening to a song right now.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NowPlayingSpotify;
