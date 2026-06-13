function formatCount(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + "만";
  if (n >= 1000) return (n / 1000).toFixed(1) + "천";
  return String(n);
}

export default function ActionBar({ video, onCommentOpen, videoState, onStateChange }) {
  const { isLiked, isDisliked, likeCount } = videoState;

  const handleLike = () => {
    if (isLiked) {
      onStateChange({ isLiked: false, likeCount: likeCount - 1 });
    } else {
      onStateChange({ isLiked: true, isDisliked: false, likeCount: likeCount + 1 });
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      onStateChange({ isDisliked: false });
    } else {
      onStateChange({
        isDisliked: true,
        isLiked: false,
        likeCount: isLiked ? likeCount - 1 : likeCount,
      });
    }
  };

  return (
    <div className="absolute right-3 bottom-[118px] flex flex-col items-center gap-1.5 z-20">

      {/* 좋아요 */}
      <button
        onClick={handleLike}
        className="flex flex-col items-center active:scale-110 transition-transform duration-150"
        style={{ gap: '1.2px' }}
      >
        <img
          src="/likes.png"
          width={48}
          height={48}
          alt="좋아요"
          style={{
            filter: isLiked
              ? "drop-shadow(0 1px 4px rgba(0,0,0,0.9)) brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(5000%) hue-rotate(0deg) brightness(110%)"
              : "drop-shadow(0 1px 4px rgba(0,0,0,0.9))",
          }}
        />
        <span className="text-white text-xs font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          {formatCount(likeCount)}
        </span>
      </button>

      {/* 싫어요 */}
      <button
        onClick={handleDislike}
        className="flex flex-col items-center active:scale-110 transition-transform duration-150"
        style={{ gap: '2px' }}
      >
        <img
          src="/dislikes.png"
          width={48}
          height={48}
          alt="싫어요"
          className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
          style={{ opacity: isDisliked ? 0.5 : 1 }}
        />
        <span className={`text-xs font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${isDisliked ? "text-gray-400" : "text-white"}`}>
          싫어요
        </span>
      </button>

      {/* 댓글 */}
      <button
        onClick={onCommentOpen}
        className="flex flex-col items-center gap-0.5 active:scale-110 transition-transform duration-150"
      >
        <img
          src="/comments.png"
          width={36}
          height={36}
          alt="댓글"
          className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
        />
        <span className="text-white text-xs font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          {formatCount(video.comments + videoState.sessionComments.length)}
        </span>
      </button>

      {/* 공유 */}
      <button className="flex flex-col items-center gap-0.5 active:scale-110 transition-transform duration-150">
        <img
          src="/share.png"
          width={36}
          height={36}
          alt="공유"
          className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
        />
        <span className="text-white text-xs font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          공유
        </span>
      </button>

    </div>
  );
}
