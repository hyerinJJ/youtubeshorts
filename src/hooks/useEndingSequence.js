import { useState, useRef, useCallback, useEffect } from "react";
import { videos } from "../data/videos";

const SHAKE_CHANNELS = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "Grok",
  "Llama",
  "Copilot",
  "Mistral",
  "DeepSeek",
  "Phi",
  "Perplexity",
];

export function useEndingSequence({ onOpenComments, onCloseComments, onResetFeed }) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState(0);
  // phase 0: idle
  // phase 1: number shake
  // phase 2: comment sheet open with AI comments
  // phase 3: comment sheet auto-scroll
  // phase 4: comment sheet close
  // phase 5: reveal text (EndingReveal)
  // phase 6: final lines
  // phase 7: hold then reset

  const [shakingNumbers, setShakingNumbers] = useState(null); // { likeCount, commentCount }
  const [shakingChannel, setShakingChannel] = useState(null);
  const [useAiComments, setUseAiComments] = useState(false);
  const [revealLineIndex, setRevealLineIndex] = useState(-1);
  const [showReveal, setShowReveal] = useState(false);
  const [fadeToBlack, setFadeToBlack] = useState(false);
  const [revealPhase, setRevealPhase] = useState("main"); // "main" | "final"

  const shakeIntervalRef = useRef(null);
  const resetTimerRef = useRef(null);
  const rafRef = useRef(null);
  const timeoutsRef = useRef([]);

  const safeTimeout = useCallback((fn, ms) => {
    const id = setTimeout(fn, ms);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  const clearAll = useCallback(() => {
    clearInterval(shakeIntervalRef.current);
    clearTimeout(resetTimerRef.current);
    cancelAnimationFrame(rafRef.current);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const resetAll = useCallback(() => {
    clearAll();
    setIsActive(false);
    setPhase(0);
    setShakingNumbers(null);
    setShakingChannel(null);
    setUseAiComments(false);
    setRevealLineIndex(-1);
    setShowReveal(false);
    setFadeToBlack(false);
    setRevealPhase("main");
    onResetFeed();
  }, [clearAll, onResetFeed]);

  // autoScroll for comment list
  const startAutoScroll = useCallback((listEl, onDone) => {
    let speed = 0.4;
    let pos = 0;

    function step() {
      if (!listEl) { onDone(); return; }
      const maxScroll = listEl.scrollHeight - listEl.clientHeight;
      speed = Math.min(speed * 1.018, 6);
      pos = Math.min(pos + speed, maxScroll);
      listEl.scrollTop = pos;

      if (pos >= maxScroll) {
        onDone();
      } else {
        rafRef.current = requestAnimationFrame(step);
      }
    }
    rafRef.current = requestAnimationFrame(step);
  }, []);

  const trigger = useCallback((currentLikeCount, currentCommentCount, commentListRef) => {
    if (isActive) return;
    setIsActive(true);
    setPhase(1);

    // Phase 1: number shake for 4000ms
    const originalLike = currentLikeCount;
    const originalComment = currentCommentCount;

    shakeIntervalRef.current = setInterval(() => {
      setShakingNumbers({
        likeCount: Math.floor(originalLike * (0.1 + Math.random() * 2.9)),
        commentCount: Math.floor(originalComment * (0.1 + Math.random() * 2.9)),
      });
      setShakingChannel(SHAKE_CHANNELS[Math.floor(Math.random() * SHAKE_CHANNELS.length)]);
    }, 80);

    safeTimeout(() => {
      // Phase 2: stop shake, restore, open comments with AI data
      clearInterval(shakeIntervalRef.current);
      setShakingNumbers(null);
      setShakingChannel(null);
      setUseAiComments(true);
      setPhase(2);
      onOpenComments();

      // Phase 3: after sheet opens (300ms anim), start auto scroll
      safeTimeout(() => {
        setPhase(3);
        if (commentListRef?.current) {
          startAutoScroll(commentListRef.current, () => {
            // Phase 4: wait 1s then close
            safeTimeout(() => {
              setPhase(4);
              onCloseComments();

              // Phase 5: 300ms after close anim, fade to black + show reveal
              safeTimeout(() => {
                setFadeToBlack(true);
                safeTimeout(() => {
                  setShowReveal(true);
                  setRevealPhase("main");
                  setPhase(5);

                  // Show main lines one by one (8 lines × 1000ms)
                  const mainLines = 8;
                  for (let i = 0; i < mainLines; i++) {
                    safeTimeout(() => {
                      setRevealLineIndex(i);
                    }, i * 1000);
                  }

                  // Phase 6: after main lines done, switch to final lines
                  safeTimeout(() => {
                    setRevealPhase("final");
                    setRevealLineIndex(-1);
                    setPhase(6);

                    const finalLines = 4;
                    for (let i = 0; i < finalLines; i++) {
                      safeTimeout(() => {
                        setRevealLineIndex(i);
                      }, i * 1000);
                    }

                    // Phase 7: after last line fades in, wait 10s then reset
                    safeTimeout(() => {
                      setPhase(7);
                      resetTimerRef.current = setTimeout(() => {
                        resetAll();
                      }, 10000);
                    }, (finalLines - 1) * 1000 + 500);
                  }, mainLines * 1000 + 500);
                }, 500);
              }, 400);
            }, 1000);
          });
        }
      }, 350);
    }, 4000);
  }, [isActive, onOpenComments, onCloseComments, startAutoScroll, safeTimeout, resetAll]);

  useEffect(() => {
    return () => clearAll();
  }, [clearAll]);

  return {
    isActive,
    phase,
    shakingNumbers,
    shakingChannel,
    useAiComments,
    showReveal,
    fadeToBlack,
    revealPhase,
    revealLineIndex,
    trigger,
    resetAll,
  };
}
