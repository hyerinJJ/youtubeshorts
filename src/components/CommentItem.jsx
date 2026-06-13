import { memo, useState } from "react";

function hashOf(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  return Math.abs(h);
}

function AvatarEl({ username, small = false }) {
  if (username === "나") {
    const iconSize = small ? 17 : 22;
    const sizeClass = small ? "w-7 h-7" : "w-9 h-9";
    return (
      <div className={`${sizeClass} rounded-full bg-[#8AB4FF] flex items-center justify-center shrink-0`}>
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="#356DDB" aria-hidden="true">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
    );
  }

  const h = hashOf(username);
  const type = h % 12;
  const initial = username.trim().charAt(0).toUpperCase();
  const sizeClass = small ? "w-7 h-7 text-[11px]" : "w-9 h-9 text-xs";
  const imageClass = `${sizeClass} rounded-full shrink-0 object-cover`;

  if (type <= 2) {
    return (
      <img
        src={`https://picsum.photos/seed/landscape-${h}/80/80`}
        alt=""
        className={imageClass}
        loading="lazy"
        decoding="async"
      />
    );
  }

  if (type <= 5) {
    const animalUrl = h % 2 === 0
      ? `https://cataas.com/cat?width=80&height=80&user=${h}`
      : `https://source.unsplash.com/80x80/?dog,cat,hamster&sig=${h}`;

    return (
      <img
        src={animalUrl}
        alt=""
        className={imageClass}
        loading="lazy"
        decoding="async"
        onError={(event) => {
          const image = event.currentTarget;
          const retries = Number(image.dataset.retries || 0);
          if (retries >= 2) return;

          image.dataset.retries = String(retries + 1);
          image.src = `https://cataas.com/cat?width=80&height=80&user=${h}&retry=${retries + 1}`;
        }}
      />
    );
  }

  if (type === 6) {
    const iconSize = small ? 15 : 20;
    const gray = 80 + ((h >>> 5) % 121);
    const red = Math.max(0, Math.min(255, gray + ((h >>> 12) % 13) - 6));
    const green = Math.max(0, Math.min(255, gray + ((h >>> 17) % 13) - 6));
    const blue = Math.max(0, Math.min(255, gray + ((h >>> 22) % 13) - 6));
    const iconColor = gray >= 145 ? "#FFFFFF" : "#F5F5F5";
    return (
      <div
        className={`${sizeClass} rounded-full flex items-center justify-center shrink-0`}
        style={{ backgroundColor: `rgb(${red} ${green} ${blue})` }}
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill={iconColor} aria-hidden="true">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
    );
  }

  const hue = h % 360;
  const saturation = 35 + ((h >>> 4) % 61);
  const lightness = 25 + ((h >>> 9) % 51);
  const color = `hsl(${hue} ${saturation}% ${lightness}%)`;
  const showInitial = type === 7 || type === 8;
  const textColor = lightness >= 62 ? "#202124" : "#FFFFFF";

  return (
    <div
      className={`${sizeClass} rounded-full shrink-0 flex items-center justify-center font-semibold text-white`}
      style={{ backgroundColor: color, color: textColor }}
      aria-hidden="true"
    >
      {showInitial ? initial : null}
    </div>
  );
}

function formatCount(n) {
  if (!n || n === 0) return "0";
  if (n >= 10000) return (n / 10000).toFixed(1) + "만";
  if (n >= 1000) return (n / 1000).toFixed(1) + "천";
  return String(n);
}

const GRAY_ICON_FILTER = "brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(92%) contrast(88%)";
const BLUE_ICON_FILTER = "brightness(0) saturate(100%) invert(29%) sepia(95%) saturate(1748%) hue-rotate(203deg) brightness(88%) contrast(101%)";

function CommentActionIcon({ src, alt, size = 20, active = false }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="object-contain"
      style={{ filter: active ? BLUE_ICON_FILTER : GRAY_ICON_FILTER }}
    />
  );
}

function ReplyItem({ reply }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(reply.likes);

  return (
    <div className="flex gap-2.5 mt-3">
      <AvatarEl username={reply.user} small />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[14px] font-semibold text-black truncate">@{reply.user}</span>
            <span className="text-[13px] text-gray-500 shrink-0">{reply.time}</span>
          </div>
          <button className="shrink-0 p-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#606060">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
        <p className="text-[14px] text-gray-800 leading-snug mt-0.5">{reply.text}</p>
        <div className="flex items-center gap-3 mt-1.5">
          <button onClick={() => { setLiked(!liked); setLikeCount((c) => liked ? c - 1 : c + 1); }} className="flex items-center gap-1">
            <CommentActionIcon src="/likes.png" alt="좋아요" active={liked} />
            <span className="text-[12px] text-gray-500">{formatCount(likeCount)}</span>
          </button>
          <button><CommentActionIcon src="/dislikes.png" alt="싫어요" /></button>
          <button><CommentActionIcon src="/comments.png" alt="답글" /></button>
        </div>
      </div>
    </div>
  );
}

function CommentItem({ comment, onReply }) {
  const [showReplies, setShowReplies] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);

  return (
    <div className="px-4 py-3.5 border-b border-gray-100">
      <div className="flex gap-3">
        <AvatarEl username={comment.user} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[14px] font-semibold text-black truncate">@{comment.user}</span>
              <span className="text-[13px] text-gray-500 shrink-0">{comment.time}</span>
            </div>
            <button className="shrink-0 p-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#606060">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
          </div>

          <p className="text-[14px] text-gray-800 leading-snug mt-0.5">{comment.text}</p>

          <div className="flex items-center gap-4 mt-2">
            <button onClick={() => { setLiked(!liked); setLikeCount((c) => liked ? c - 1 : c + 1); }} className="flex items-center gap-1.5">
              <CommentActionIcon src="/likes.png" alt="좋아요" active={liked} />
              <span className="text-[12px] text-gray-500">{formatCount(likeCount)}</span>
            </button>
            <button><CommentActionIcon src="/dislikes.png" alt="싫어요" /></button>
            <button onClick={() => onReply?.(comment.user)}>
              <CommentActionIcon src="/comments.png" alt="답글" />
            </button>
          </div>

          {comment.replies?.length > 0 && (
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="flex items-center gap-1 mt-2.5 text-[13px] font-semibold text-[#065FD4]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#065FD4"
                className={`transition-transform duration-200 ${showReplies ? "rotate-180" : ""}`}>
                <path d="M7 10l5 5 5-5z" />
              </svg>
              답글 {comment.replies.length}개
            </button>
          )}

          {showReplies && (
            <div className="mt-1">
              {comment.replies.map((r) => (
                <ReplyItem key={r.id} reply={r} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(CommentItem);
