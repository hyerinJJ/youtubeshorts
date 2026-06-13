import { useRef, useCallback } from "react";

export function useSwipe({ onSwipeUp, onSwipeDown, threshold = 50 }) {
  const touchStartY = useRef(null);
  const touchStartTime = useRef(null);

  const onTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      if (touchStartY.current === null) return;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const elapsed = Date.now() - touchStartTime.current;
      const isQuickSwipe = elapsed < 300 && Math.abs(deltaY) > 30;

      if (Math.abs(deltaY) > threshold || isQuickSwipe) {
        if (deltaY > 0) {
          onSwipeUp?.();
        } else {
          onSwipeDown?.();
        }
      }
      touchStartY.current = null;
    },
    [onSwipeUp, onSwipeDown, threshold]
  );

  return { onTouchStart, onTouchEnd };
}
