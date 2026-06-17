import { useRef, useEffect, useState, useCallback } from "react";
import { useVideoPlayer } from "../hooks/useVideoPlayer";
import ActionBar from "./ActionBar";
import VideoInfo from "./VideoInfo";
import CommentSheet from "./CommentSheet";

export default function ShortsPlayer({
  video,
  isActive,
  videoState,
  onStateChange,
  isMuted,
  onToggleMute,
  endingActive,
  shakingNumbers,
  shakingChannel,
  shakingTitle,
  shakingMusic,
  useAiComments,
  commentListRef,
  onRegisterCommentControl,
}) {
  const videoRef = useRef(null);
  const { isPlaying, progress, showPlayIcon, togglePlay, seek } = useVideoPlayer(videoRef);
  const [showComment, setShowComment] = useState(false);
  const [showHeartAnim, setShowHeartAnim] = useState(false);
  const lastTapTime = useRef(0);
  const longPressTimer = useRef(null);
  const isDraggingProgress = useRef(false);
  const progressBarRef = useRef(null);
  const suppressPlayToggle = useRef(false);
  const isPausedActive = isActive && !isPlaying;

  // Register open/close controls so ending sequence can trigger them
  useEffect(() => {
    onRegisterCommentControl?.({
      open: () => setShowComment(true),
      close: () => setShowComment(false),
    });
  }, [onRegisterCommentControl]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive && !endingActive) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      if (!isActive) videoRef.current.currentTime = 0;
    }
  }, [isActive, endingActive]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const openComments = useCallback(() => {
    setShowComment(true);
  }, []);

  const handleTap = useCallback(
    (e) => {
      if (endingActive) return;
      if (suppressPlayToggle.current) return;
      if (isDraggingProgress.current) return;
      if (e.target.closest("button") || e.target.closest("[data-no-tap]")) return;
      const now = Date.now();
      if (now - lastTapTime.current < 300) {
        setShowHeartAnim(true);
        if (!videoState.isLiked) {
          onStateChange({ isLiked: true, likeCount: videoState.likeCount + 1 });
        }
        setTimeout(() => setShowHeartAnim(false), 900);
      } else {
        setTimeout(() => {
          if (Date.now() - lastTapTime.current >= 280) togglePlay();
        }, 300);
      }
      lastTapTime.current = now;
    },
    [togglePlay, videoState, onStateChange, endingActive]
  );

  const handleUnmuteClick = useCallback((e) => {
    if (endingActive) return;
    if (!isMuted) return;
    suppressPlayToggle.current = true;
    setTimeout(() => { suppressPlayToggle.current = false; }, 1000);
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
    onToggleMute();
  }, [isMuted, onToggleMute, endingActive]);

  const handlePressStart = useCallback(() => {
    if (endingActive) return;
    longPressTimer.current = setTimeout(() => {
      if (videoRef.current) videoRef.current.playbackRate = 2;
    }, 500);
  }, [endingActive]);

  const handlePressEnd = useCallback(() => {
    clearTimeout(longPressTimer.current);
    if (videoRef.current) videoRef.current.playbackRate = 1;
  }, []);

  const seekFromPointer = useCallback(
    (clientX) => {
      const bar = progressBarRef.current;
      if (!bar) return;
      const rect = bar.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      seek(Math.max(0, Math.min(100, pct)));
    },
    [seek]
  );

  const handleProgressPointerDown = useCallback((e) => {
    e.stopPropagation();
    isDraggingProgress.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    seekFromPointer(e.clientX);
  }, [seekFromPointer]);

  const handleProgressPointerMove = useCallback((e) => {
    if (!isDraggingProgress.current) return;
    e.stopPropagation();
    seekFromPointer(e.clientX);
  }, [seekFromPointer]);

  const handleProgressPointerEnd = useCallback((e) => {
    if (!isDraggingProgress.current) return;
    e.stopPropagation();
    seekFromPointer(e.clientX);
    isDraggingProgress.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }, [seekFromPointer]);

  return (
    <div
      className="relative w-full h-full bg-black overflow-hidden"
      onClickCapture={handleUnmuteClick}
    >
      <video
        ref={videoRef}
        src={video.videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* 탭 오버레이 */}
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={handleTap}
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
      />

      {/* 재생/정지 아이콘 플래시 */}
      {showPlayIcon && !endingActive && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center animate-fade-out">
            {isPlaying ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>
      )}

      {/* 음소거 해제 안내 */}
      {isMuted && !endingActive && (
        <div className="absolute top-20 left-3 z-20 flex items-center gap-3 rounded-sm bg-white px-4 py-3 text-[#111] shadow-md pointer-events-none">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#111" className="shrink-0">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
          <span className="whitespace-nowrap text-base font-medium">탭하여 음소거 해제</span>
        </div>
      )}

      {/* 더블탭 하트 */}
      {showHeartAnim && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="animate-heart-pop">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="#ff0000" opacity="0.9">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      )}

      <ActionBar
        video={video}
        onCommentOpen={endingActive ? undefined : openComments}
        videoState={videoState}
        onStateChange={endingActive ? undefined : onStateChange}
        isRaised={isPausedActive}
        shakingNumbers={shakingNumbers}
      />

      <VideoInfo
        video={video}
        videoState={videoState}
        onStateChange={endingActive ? undefined : onStateChange}
        isRaised={isPausedActive}
        shakingChannel={shakingChannel}
        shakingTitle={shakingTitle}
        shakingMusic={shakingMusic}
      />

      {/* 진행바 */}
      <div
        ref={progressBarRef}
        className={`absolute left-0 right-0 z-30 flex items-center touch-none transition-[bottom,height,opacity] duration-200 ${
          isPausedActive && !endingActive
            ? "bottom-3 h-8 cursor-ew-resize opacity-100"
            : "bottom-0 h-5 pointer-events-none opacity-0"
        }`}
        onPointerDown={handleProgressPointerDown}
        onPointerMove={handleProgressPointerMove}
        onPointerUp={handleProgressPointerEnd}
        onPointerCancel={handleProgressPointerEnd}
        data-no-tap
      >
        <div
          className={`relative w-full transition-[height] duration-200 ${isPausedActive ? "h-1" : "h-[3px]"}`}
          style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
        >
          <div className="h-full transition-none" style={{ width: `${progress}%`, backgroundColor: "#FF0000" }} />
          <div
            className={`absolute top-1/2 -translate-y-1/2 rounded-full transition-[width,height] duration-200 ${
              isPausedActive ? "w-[14px] h-[14px]" : "w-[11px] h-[11px]"
            }`}
            style={{
              left: `calc(${progress}% - ${isPausedActive ? "7px" : "5.5px"})`,
              backgroundColor: "#FF0000",
            }}
          />
        </div>
      </div>

      <CommentSheet
        video={video}
        videoState={videoState}
        onStateChange={endingActive ? () => {} : onStateChange}
        onClose={() => setShowComment(false)}
        isOpen={showComment}
        useAiComments={useAiComments}
        commentListRef={commentListRef}
        endingActive={endingActive}
      />
    </div>
  );
}
