import React, { useEffect, useState, useRef } from 'react';
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
      progress: song.progress_ms,
      duration: song.item.duration_ms,
    };
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return null;
  }
};

const formatMs = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const NowPlayingSpotify = () => {
  const [song, setSong] = useState(null);
  // liveProgress ticks every second between API polls
  const [liveProgress, setLiveProgress] = useState(0);
  const tickRef = useRef(null);
  const lastFetchTime = useRef(null);
  const lastProgress = useRef(0);
  const durationRef = useRef(0);
  const isPlaying = useRef(false);

  const startTicker = () => {
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = setInterval(() => {
      if (!isPlaying.current) return;
      const elapsed = Date.now() - lastFetchTime.current;
      const next = Math.min(lastProgress.current + elapsed, durationRef.current);
      setLiveProgress(next);
    }, 500);
  };

  useEffect(() => {
    const fetchSong = async () => {
      const data = await getNowPlaying();
      setSong(data);
      if (data) {
        lastProgress.current = data.progress;
        lastFetchTime.current = Date.now();
        durationRef.current = data.duration;
        isPlaying.current = data.isPlaying;
        setLiveProgress(data.progress);
        startTicker();
      } else {
        isPlaying.current = false;
      }
    };

    fetchSong();
    const interval = setInterval(fetchSong, 10000);
    return () => {
      clearInterval(interval);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, []);

  const progressPercent = song
    ? Math.min((liveProgress / song.duration) * 100, 100)
    : 0;

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
            <a
              href={song.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 px-4 py-3 bg-base-200/10 backdrop-blur-xs border border-neutral rounded-2xl hover:border-primary/80 transition-all duration-300 shadow-2xl shadow-primary/10 hover:shadow-primary/20 w-full"
            >
              {/* Top row: album art + song info */}
              <span className="text-[9px] md:text-[10px] text-white/60">I'm currently listening to:</span>
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={song.albumArt}
                    alt="Album Art"
                    className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-base-300 rounded-full w-5 h-5 flex items-center justify-center border border-white/10 shadow-lg">
                    <FontAwesomeIcon icon={faSpotify} className="text-[#1DB954] text-xs" />
                  </div>
                </div>

                <div className="flex flex-col min-w-0 pr-1 flex-1">
                  <p className="text-[10px] md:text-[11px] font-bold text-white/80 truncate group-hover:text-primary transition-colors max-w-[100px] lg:max-w-[90px] xl:max-w-[150px]">
                    {song.title}
                  </p>
                  <p className="text-[9px] md:text-[10px] text-white/60 truncate -mt-0.5 max-w-[100px] lg:max-w-[90px] xl:max-w-[150px]">
                    {song.artist}
                  </p>
                </div>
              </div>

              {/* Progress bar row */}
              <div className="flex flex-col gap-1 w-full">
                {/* Track */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1DB954] rounded-full transition-all duration-500 ease-linear"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                {/* Time labels */}
                <div className="flex justify-between text-[9px] md:text-[10px] text-white/40 font-mono">
                  <span>{formatMs(liveProgress)}</span>
                  <span>{formatMs(song.duration)}</span>
                </div>
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
            <div className="flex items-center gap-2 px-4 py-2 bg-base-200/10 backdrop-blur-xs border border-neutral rounded-2xl shadow-2xl shadow-primary/20">
              <FontAwesomeIcon icon={faSpotify} className="text-[#1DB954] text-md md:text-lg" />
              <p className="text-[9px] md:text-[10px] text-white/60 max-w-[80px] md:max-w-[100px]">Not listening to a song right now.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NowPlayingSpotify;