import { useState, useRef, useCallback, useEffect } from "react";
import { videos } from "../data/videos";

const SHAKE_CHANNELS = [
  "Claude", "ChatGPT", "Gemini", "Grok", "Llama",
  "Copilot", "Mistral", "DeepSeek", "Phi", "Perplexity",
];

const SHAKE_TITLES = [
  "이 영상은 AI가 만든 것입니다",
  "당신은 지금 무엇을 보고 있나요?",
  "SIMULATION RUNNING",
  "ERROR: REAL CONTENT NOT FOUND",
  "404 HUMAN NOT FOUND",
  "이것도 전부 가짜입니다",
  "AI GENERATED",
  "당신도 AI인가요?",
  "LOADING REALITY... FAILED",
  "현실이 아닙니다",
];

export function useEndingSequence({ onOpenComments, onCloseComments, onResetFeed }) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState(0);
  const [shakingNumbers, setShakingNumbers] = useState(null);
  const [shakingChannel, setShakingChannel] = useState(null);
  const [shakingTitle, setShakingTitle] = useState(null);
  const [glitchColor, setGlitchColor] = useState(null);
  const [useAiComments, setUseAiComments] = useState(false);
  const [revealLineIndex, setRevealLineIndex] = useState(-1);
  const [showReveal, setShowReveal] = useState(false);
  const [fadeToBlack, setFadeToBlack] = useState(false);
  const [revealPhase, setRevealPhase] = useState("main"); // "main" | "middle" | "final"

  const shakeIntervalRef = useRef(null);
  const glitchIntervalRef = useRef(null);
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
    clearInterval(glitchIntervalRef.current);
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
    setShakingTitle(null);
    setGlitchColor(null);
    setUseAiComments(false);
    setRevealLineIndex(-1);
    setShowReveal(false);
    setFadeToBlack(false);
    setRevealPhase("main");
    onResetFeed();
  }, [clearAll, onResetFeed]);

  const startAutoScroll = useCallback((listEl, onDone) => {
    let speed = 0.4;
    let pos = 0;
    function step() {
      if (!listEl) { onDone(); return; }
      const maxScroll = listEl.scrollHeight - listEl.clientHeight;
      speed = Math.min(speed * 1.018, 6);
      pos = Math.min(pos + speed, maxScroll);
      listEl.scrollTop = pos;
      if (pos >= maxScroll) { onDone(); }
      else { rafRef.current = requestAnimationFrame(step); }
    }
    rafRef.current = requestAnimationFrame(step);
  }, []);

  const trigger = useCallback((currentLikeCount, currentCommentCount, commentListRef) => {
    if (isActive) return;
    setIsActive(true);
    setPhase(1);

    const originalLike = currentLikeCount;
    const originalComment = currentCommentCount;

    // Numbers + channel + title shake every 80ms
    shakeIntervalRef.current = setInterval(() => {
      setShakingNumbers({
        likeCount: Math.floor(originalLike * (0.1 + Math.random() * 2.9)),
        commentCount: Math.floor(originalComment * (0.1 + Math.random() * 2.9)),
      });
      setShakingChannel(SHAKE_CHANNELS[Math.floor(Math.random() * SHAKE_CHANNELS.length)]);
      setShakingTitle(SHAKE_TITLES[Math.floor(Math.random() * SHAKE_TITLES.length)]);
    }, 80);

    // Black/white glitch flash every 40ms
    glitchIntervalRef.current = setInterval(() => {
      const r = Math.random();
      if (r < 0.30) setGlitchColor("#ffffff");
      else if (r < 0.50) setGlitchColor("#000000");
      else setGlitchColor(null);
    }, 40);

    // Phase 1 ends after 2500ms
    safeTimeout(() => {
      clearInterval(shakeIntervalRef.current);
      clearInterval(glitchIntervalRef.current);
      setShakingNumbers(null);
      setShakingChannel(null);
      setShakingTitle(null);
      setGlitchColor(null);
      setUseAiComments(true);
      setPhase(2);
      onOpenComments();

      safeTimeout(() => {
        setPhase(3);
        if (commentListRef?.current) {
          startAutoScroll(commentListRef.current, () => {
            safeTimeout(() => {
              setPhase(4);
              onCloseComments();

              safeTimeout(() => {
                setFadeToBlack(true);
                safeTimeout(() => {
                  setShowReveal(true);
                  setRevealPhase("main");
                  setPhase(5);

                  // Main lines: 7 × 1s
                  const mainLines = 7;
                  for (let i = 0; i < mainLines; i++) {
                    safeTimeout(() => setRevealLineIndex(i), i * 1000);
                  }

                  // Transition to middle phase (800ms fade gap)
                  safeTimeout(() => {
                    setRevealPhase("middle");
                    setRevealLineIndex(-1);

                    safeTimeout(() => {
                      setPhase(6);
                      const middleLines = 4;
                      for (let i = 0; i < middleLines; i++) {
                        safeTimeout(() => setRevealLineIndex(i), i * 1000);
                      }

                      // Transition to final phase (800ms fade gap)
                      safeTimeout(() => {
                        setRevealPhase("final");
                        setRevealLineIndex(-1);

                        safeTimeout(() => {
                          setPhase(7);
                          const finalLines = 6;
                          for (let i = 0; i < finalLines; i++) {
                            safeTimeout(() => setRevealLineIndex(i), i * 1000);
                          }

                          // Hold 10s then reset
                          safeTimeout(() => {
                            setPhase(8);
                            resetTimerRef.current = setTimeout(() => resetAll(), 10000);
                          }, (finalLines - 1) * 1000 + 500);
                        }, 800);
                      }, middleLines * 1000 + 500);
                    }, 800);
                  }, mainLines * 1000 + 500);
                }, 500);
              }, 400);
            }, 1000);
          });
        }
      }, 350);
    }, 2500);
  }, [isActive, onOpenComments, onCloseComments, startAutoScroll, safeTimeout, resetAll]);

  useEffect(() => {
    return () => clearAll();
  }, [clearAll]);

  return {
    isActive,
    phase,
    shakingNumbers,
    shakingChannel,
    shakingTitle,
    glitchColor,
    useAiComments,
    showReveal,
    fadeToBlack,
    revealPhase,
    revealLineIndex,
    trigger,
    resetAll,
  };
}
