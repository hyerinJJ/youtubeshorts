import { useState, useRef, useEffect, useCallback } from "react";

export function useVideoPlayer(videoRef) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const progressIntervalRef = useRef(null);
  const showIconTimeoutRef = useRef(null);

  const play = useCallback(async () => {
    if (!videoRef.current) return;
    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      // autoplay blocked
    }
  }, [videoRef]);

  const pause = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  }, [videoRef]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setShowPlayIcon(true);
    clearTimeout(showIconTimeoutRef.current);
    showIconTimeoutRef.current = setTimeout(() => setShowPlayIcon(false), 800);
  }, [isPlaying, play, pause]);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  }, [videoRef]);

  const seek = useCallback(
    (percent) => {
      if (!videoRef.current || !duration) return;
      videoRef.current.currentTime = (percent / 100) * duration;
      setProgress(percent);
    },
    [videoRef, duration]
  );

  const setSpeed = useCallback(
    (rate) => {
      if (!videoRef.current) return;
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    },
    [videoRef]
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const onLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [videoRef]);

  useEffect(() => {
    return () => {
      clearTimeout(showIconTimeoutRef.current);
      clearInterval(progressIntervalRef.current);
    };
  }, []);

  return {
    isPlaying,
    isMuted,
    progress,
    duration,
    showPlayIcon,
    playbackRate,
    play,
    pause,
    togglePlay,
    toggleMute,
    seek,
    setSpeed,
  };
}
