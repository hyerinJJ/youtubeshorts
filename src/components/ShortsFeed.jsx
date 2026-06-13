import React, { useState, useRef, useEffect, useCallback } from "react";
import { videos } from "../data/videos";
import ShortsPlayer from "./ShortsPlayer";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoStates, setVideoStates] = useState(() =>
    videos.map((v) => initVideoState(v))
  );
  const [globalMuted, setGlobalMuted] = useState(true);
  const containerRef = useRef(null);

  const handleStateChange = useCallback((index, changes) => {
    setVideoStates((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...changes };
      return next;
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
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
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
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
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
          />
        </div>
      ))}
    </div>
  );
}
