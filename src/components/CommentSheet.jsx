import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import CommentItem from "./CommentItem";
import { aiRevealComments } from "../data/aiRevealComments";

function spreadEarlyComments(comments) {
  const earlyComments = [];
  const regularComments = [];

  comments.forEach((comment) => {
    if (/^\s*\d+\s*빠/.test(comment.text)) {
      earlyComments.push(comment);
    } else {
      regularComments.push(comment);
    }
  });

  earlyComments.forEach((comment, index) => {
    const ratio = Math.min(0.9, 0.62 + index * 0.12);
    const targetIndex = Math.round(regularComments.length * ratio);
    regularComments.splice(targetIndex, 0, comment);
  });

  return regularComments;
}

export default function CommentSheet({
  video,
  videoState,
  onStateChange,
  onClose,
  isOpen,
  useAiComments,
  commentListRef,
  endingActive,
}) {
  const [inputText, setInputText] = useState("");
  const [replyTo, setReplyTo] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);
  const internalListRef = useRef(null);
  const dragStartY = useRef(null);
  const dragOffsetRef = useRef(0);

  // Allow external ref override for auto-scroll during ending
  const effectiveListRef = commentListRef ?? internalListRef;

  const normalComments = useMemo(
    () => [...videoState.sessionComments, ...spreadEarlyComments(video.comments_data)],
    [video.comments_data, videoState.sessionComments]
  );
  const displayedComments = useAiComments ? aiRevealComments : normalComments;
  const totalCount = useAiComments
    ? aiRevealComments.length
    : video.comments + videoState.sessionComments.length;

  const handleSubmit = () => {
    if (!inputText.trim()) return;
    const newComment = {
      id: `session_${Date.now()}`,
      user: "나",
      text: replyTo ? `@${replyTo} ${inputText}` : inputText,
      likes: 0,
      time: "방금",
      replies: [],
    };
    onStateChange({ sessionComments: [newComment, ...videoState.sessionComments] });
    setInputText("");
    setReplyTo(null);
  };

  const handleReply = useCallback((username) => {
    setReplyTo(username);
    inputRef.current?.focus();
  }, []);

  const handleDragStart = (e) => {
    if (endingActive) return;
    dragStartY.current = e.clientY;
    dragOffsetRef.current = 0;
    setIsDragging(true);
  };

  const handleDragMove = useCallback((e) => {
    if (dragStartY.current === null) return;
    const nextOffset = Math.max(0, e.clientY - dragStartY.current);
    dragOffsetRef.current = nextOffset;
    setDragOffset(nextOffset);
  }, []);

  const handleDragEnd = useCallback(() => {
    if (dragStartY.current === null) return;
    const delta = dragOffsetRef.current;
    dragStartY.current = null;
    dragOffsetRef.current = 0;
    setIsDragging(false);

    if (delta > 110) {
      onClose();
    }
    setDragOffset(0);
  }, [onClose]);

  useEffect(() => {
    if (!isDragging) return;

    window.addEventListener("pointermove", handleDragMove);
    window.addEventListener("pointerup", handleDragEnd);
    window.addEventListener("pointercancel", handleDragEnd);
    return () => {
      window.removeEventListener("pointermove", handleDragMove);
      window.removeEventListener("pointerup", handleDragEnd);
      window.removeEventListener("pointercancel", handleDragEnd);
    };
  }, [handleDragEnd, handleDragMove, isDragging]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center ${
        isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
      }`}
      onClick={endingActive ? undefined : onClose}
      aria-hidden={!isOpen}
    >
      {/* 백드롭 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 시트 */}
      <div
        className={`relative w-full max-w-[430px] bg-white rounded-t-2xl flex flex-col overflow-hidden ${
          isOpen && !isDragging && dragOffset === 0 ? "animate-slide-up" : ""
        }`}
        style={{
          height: "75vh",
          transform: `translateY(${dragOffset}px)`,
          transition: isDragging ? "none" : "transform 220ms cubic-bezier(0.32, 0.72, 0, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 드래그 핸들 */}
        <div
          className="flex justify-center pt-2.5 pb-2 shrink-0 cursor-grab active:cursor-grabbing touch-none"
          onPointerDown={handleDragStart}
        >
          <div className="w-12 h-1.5 rounded-full bg-gray-300" />
        </div>

        {/* 헤더 */}
        <div className="flex items-center justify-between px-4 py-2.5 shrink-0">
          <h3 className="text-black font-bold text-base">
            댓글 <span className="text-black">{totalCount.toLocaleString()}</span>개
          </h3>
          {!endingActive && (
            <button onClick={onClose} className="p-1 text-gray-600">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          )}
        </div>

        <div className="h-px bg-gray-200 shrink-0" />

        {/* 댓글 입력창 (엔딩 중엔 숨김) */}
        {!endingActive && (
          <>
            <div className="px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#8AB4FF] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#356DDB">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="flex-1">
                {replyTo && (
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[#065FD4] text-xs">@{replyTo}에게 답글</span>
                    <button onClick={() => setReplyTo(null)}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#606060">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                    </button>
                  </div>
                )}
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="댓글 추가..."
                  className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none border border-transparent focus:border-gray-300"
                />
              </div>
              {inputText.trim() && (
                <button onClick={handleSubmit} className="text-[#065FD4] font-semibold text-sm shrink-0">
                  게시
                </button>
              )}
            </div>
            <div className="h-px bg-gray-200 shrink-0" />
          </>
        )}

        {/* 댓글 목록 */}
        <div
          ref={effectiveListRef}
          className="flex-1 overflow-y-auto overscroll-contain bg-white"
          style={{ pointerEvents: endingActive ? "none" : "auto" }}
        >
          {displayedComments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onReply={endingActive ? undefined : handleReply}
            />
          ))}
          <div className="h-6" />
        </div>
      </div>
    </div>
  );
}
