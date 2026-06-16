import React, { useState, useRef, useEffect, useCallback } from "react";
import { videos } from "../data/videos";
import ShortsPlayer from "./ShortsPlayer";
import { useEndingSequence } from "../hooks/useEndingSequence";
import EndingReveal from "./EndingReveal";
import IntroOverlay from "./IntroOverlay";

function initVideoState(video) {
  return {
    isLiked: false,
    isDisliked: false,
    isSubscribed: false,
    likeCount: video.likes,
    sessionComments: [],
  };
}

export default function ShortsFeed() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoStates, setVideoStates] = useState(() =>
    videos.map((v) => initVideoState(v))
  );
  const [globalMuted, setGlobalMuted] = useState(true);
  const containerRef = useRef(null);

  // Per-video refs passed into ShortsPlayer so the ending hook can reach the comment list
  const commentListRefs = useRef(videos.map(() => React.createRef()));

  // Per-video comment open/close control refs (functions set by each ShortsPlayer)
  const commentControlRefs = useRef(videos.map(() => ({ open: null, close: null })));

  const handleStateChange = useCallback((index, changes) => {
    setVideoStates((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...changes };
      return next;
    });
  }, []);

  const resetFeed = useCallback(() => {
    setVideoStates(videos.map((v) => initVideoState(v)));
    setActiveIndex(0);
    setShowIntro(true);
    const container = containerRef.current;
    if (container) {
      const slides = container.querySelectorAll("[data-index]");
      slides[0]?.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  const ending = useEndingSequence({
    onOpenComments: () => {
      const ctrl = commentControlRefs.current[videos.length - 1];
      ctrl?.open?.();
    },
    onCloseComments: () => {
      const ctrl = commentControlRefs.current[videos.length - 1];
      ctrl?.close?.();
    },
    onResetFeed: resetFeed,
  });

  // Wheel event: detect extra scroll past last video
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleWheel = (e) => {
      if (ending.isActive) { e.preventDefault(); return; }
      // Use actual scrollTop instead of activeIndex state to avoid async lag
      const atEnd = container.scrollTop >= container.scrollHeight - container.clientHeight - 2;
      if (atEnd && e.deltaY > 0) {
        e.preventDefault();
        ending.trigger(
          videoStates[videos.length - 1].likeCount,
          videos[videos.length - 1].comments + videoStates[videos.length - 1].sessionComments.length,
          commentListRefs.current[videos.length - 1]
        );
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [ending, videoStates]);

  // Touch swipe: detect extra swipe-up past last video
  const touchStartYRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onTouchStart = (e) => { touchStartYRef.current = e.touches[0].clientY; };
    const onTouchEnd = (e) => {
      if (ending.isActive) return;
      if (touchStartYRef.current === null) return;
      const delta = touchStartYRef.current - e.changedTouches[0].clientY;
      const atEnd = container.scrollTop >= container.scrollHeight - container.clientHeight - 2;
      if (atEnd && delta > 50) {
        ending.trigger(
          videoStates[videos.length - 1].likeCount,
          videos[videos.length - 1].comments + videoStates[videos.length - 1].sessionComments.length,
          commentListRefs.current[videos.length - 1]
        );
      }
      touchStartYRef.current = null;
    };
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [ending, videoStates]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (ending.isActive) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = parseInt(entry.target.dataset.index, 10);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    const slides = container.querySelectorAll("[data-index]");
    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [ending.isActive]);

  useEffect(() => {
    const handleKey = (e) => {
      if (ending.isActive) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const container = containerRef.current;
        if (!container) return;
        const slides = container.querySelectorAll("[data-index]");
        const targetIdx =
          e.key === "ArrowDown"
            ? Math.min(activeIndex + 1, videos.length - 1)
            : Math.max(activeIndex - 1, 0);
        slides[targetIdx]?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, ending.isActive]);

  // Mute video audio during ending
  useEffect(() => {
    if (ending.phase >= 5) setGlobalMuted(true);
  }, [ending.phase]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          pointerEvents: ending.isActive ? "none" : "auto",
        }}
      >
        {videos.map((video, index) => (
          <div
            key={video.id}
            data-index={index}
            className="relative w-full snap-start snap-always"
            style={{ height: "100dvh" }}
          >
            <ShortsPlayer
              video={video}
              isActive={activeIndex === index}
              videoState={videoStates[index]}
              onStateChange={(changes) => handleStateChange(index, changes)}
              isMuted={globalMuted}
              onToggleMute={() => setGlobalMuted((prev) => !prev)}
              endingActive={ending.isActive}
              shakingNumbers={index === videos.length - 1 ? ending.shakingNumbers : null}
              shakingChannel={index === videos.length - 1 ? ending.shakingChannel : null}
              shakingTitle={index === videos.length - 1 ? ending.shakingTitle : null}
              shakingMusic={index === videos.length - 1 ? ending.shakingMusic : null}
              useAiComments={index === videos.length - 1 ? ending.useAiComments : false}
              commentListRef={commentListRefs.current[index]}
              onRegisterCommentControl={(ctrl) => {
                commentControlRefs.current[index] = ctrl;
              }}
            />
          </div>
        ))}
      </div>

      {/* 글리치 오버레이 (Phase 1) */}
      {ending.glitchColor && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 39, backgroundColor: ending.glitchColor }}
        />
      )}

      <IntroOverlay show={showIntro} onDismiss={() => setShowIntro(false)} />

      {/* Ending overlay — sits above everything */}
      <EndingReveal
        show={ending.showReveal}
        fadeToBlack={ending.fadeToBlack}
        revealPhase={ending.revealPhase}
        revealLineIndex={ending.revealLineIndex}
      />
    </div>
  );
}
