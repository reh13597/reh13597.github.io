import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

// Served by the Vercel Function in api/now-playing.js, which keeps the Spotify secrets server-side
const NOW_PLAYING_ENDPOINT = '/api/now-playing';

const POLL_INTERVAL_MS = 10000;

// Resolves to song data, or null when nothing is playing. Throws on auth/network errors.
const getNowPlaying = async () => {
  const response = await fetch(NOW_PLAYING_ENDPOINT);
  if (!response.ok) throw new Error(`Now-playing request failed: ${response.status}`);
  const { song } = await response.json();
  return song;
};

const formatMs = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const NowPlayingSpotify = () => {
  // 'loading' until the first request settles, so "not listening" never flashes before the real answer
  const [status, setStatus] = useState('loading'); // 'loading' | 'playing' | 'idle' | 'error'
  const [song, setSong] = useState(null);
  // liveProgress ticks every second between API polls
  const [liveProgress, setLiveProgress] = useState(0);
  const lastFetchTime = useRef(null);
  const lastProgress = useRef(0);
  const durationRef = useRef(0);
  const isPlaying = useRef(false);

  useEffect(() => {
    let cancelled = false;
    let latestRequest = 0;
    let hasLoaded = false;

    const ticker = setInterval(() => {
      if (!isPlaying.current) return;
      const elapsed = Date.now() - lastFetchTime.current;
      setLiveProgress(Math.min(lastProgress.current + elapsed, durationRef.current));
    }, 500);

    const fetchSong = async () => {
      // Don't poll in background tabs once we have an answer
      if (hasLoaded && document.hidden) return;
      const requestId = ++latestRequest;
      try {
        const data = await getNowPlaying();
        // Ignore responses that resolve after unmount or after a newer request
        if (cancelled || requestId !== latestRequest) return;
        hasLoaded = true;
        setSong(data);
        setStatus(data ? 'playing' : 'idle');
        isPlaying.current = Boolean(data?.isPlaying);
        if (data) {
          lastProgress.current = data.progress;
          lastFetchTime.current = Date.now();
          durationRef.current = data.duration;
          setLiveProgress(data.progress);
        }
      } catch (error) {
        if (cancelled || requestId !== latestRequest) return;
        console.error('Error fetching Spotify data:', error);
        // Keep showing the last known state on a transient poll failure
        if (!hasLoaded) {
          hasLoaded = true;
          setStatus('error');
        }
      }
    };

    fetchSong();
    const interval = setInterval(fetchSong, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
      clearInterval(ticker);
    };
  }, []);

  const progressPercent = song
    ? Math.min((liveProgress / song.duration) * 100, 100)
    : 0;

  return (
    <div className="flex flex-col items-center max-w-[90vw]">
      <AnimatePresence mode="wait">
        {status === 'loading' ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="status"
            aria-label="Loading Spotify status"
            className="flex flex-col items-center gap-1.5"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-base-100/50 backdrop-blur-xs border border-neutral rounded-2xl shadow-2xl shadow-primary/20">
              <FontAwesomeIcon icon={faSpotify} className="text-[#1DB954] text-md md:text-lg animate-pulse" />
              <div className="flex flex-col gap-1.5 w-[80px] md:w-[100px]">
                <div className="skeleton h-2 w-full" />
                <div className="skeleton h-2 w-2/3" />
              </div>
            </div>
          </motion.div>
        ) : status === 'playing' && song ? (
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
              className="group flex flex-col gap-2 px-4 py-3 bg-base-100/50 backdrop-blur-xs border border-neutral rounded-2xl hover:border-primary/50 transition-all duration-300 shadow-2xl shadow-primary/10 hover:shadow-primary/20 w-full"
            >
              {/* Top row: album art + song info */}
              <span className="text-[9px] md:text-[10px] text-white/60">I'm currently listening to:</span>
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  {song.albumArt ? (
                    <img
                      src={song.albumArt}
                      alt={`Album art for ${song.title}`}
                      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg"
                    />
                  ) : (
                    <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg bg-neutral" />
                  )}
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
            <div className="flex items-center gap-2 px-4 py-2 bg-base-100/50 backdrop-blur-xs border border-neutral hover:border-primary/50 rounded-2xl shadow-2xl shadow-primary/20">
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