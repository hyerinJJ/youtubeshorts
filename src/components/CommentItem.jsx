import React, { useState, useEffect } from "react";

// 모듈 레벨 캐시 — 같은 username은 항상 같은 waifu URL
const waifuCache = new Map();
const waifuPending = new Map();

const SOLID_COLORS = [
  "#FF0000", "#FF4500", "#FF6B35", "#FF9800", "#FFC107",
  "#4CAF50", "#00BCD4", "#2196F3", "#3F51B5", "#9C27B0",
  "#E91E63", "#795548", "#607D8B", "#009688", "#8BC34A",
  "#FF5722", "#673AB7", "#03A9F4", "#F44336", "#0288D1",
];

function hashOf(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  return Math.abs(h);
}

// 0: 단색  1: waifu anime  2: picsum  3: default
function getAvatarType(username, idx) {
  return (hashOf(username) + idx * 3) % 4;
}

function DefaultIcon({ small }) {
  const cls = small ? "w-7 h-7" : "w-9 h-9";
  const sz = small ? 15 : 20;
  return (
    <div className={`${cls} rounded-full bg-[#AAAAAA] flex items-center justify-center shrink-0`}>
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="white">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
}

function AvatarEl({ username, idx = 0, small = false }) {
  const type = getAvatarType(username, idx);
  const h = hashOf(username);
  const seed = (h * 7 + 13) % 99991;
  const [waifuUrl, setWaifuUrl] = useState(() => waifuCache.get(username) ?? null);

  useEffect(() => {
    if (type !== 1) return;
    if (waifuCache.has(username)) { setWaifuUrl(waifuCache.get(username)); return; } // eslint-disable-line
    if (waifuPending.has(username)) {
      waifuPending.get(username).then((url) => setWaifuUrl(url));
      return;
    }
    const p = fetch("https://api.waifu.pics/sfw/waifu")
      .then((r) => r.json())
      .then((d) => { waifuCache.set(username, d.url); return d.url; })
      .catch(() => null);
    waifuPending.set(username, p);
    p.then((url) => { setWaifuUrl(url); waifuPending.delete(username); });
  }, [username, type]);

  const cls = small ? "w-7 h-7 rounded-full shrink-0 object-cover" : "w-9 h-9 rounded-full shrink-0 object-cover";

  if (type === 0) {
    const color = SOLID_COLORS[h % SOLID_COLORS.length];
    return <div className={small ? "w-7 h-7 rounded-full shrink-0" : "w-9 h-9 rounded-full shrink-0"} style={{ backgroundColor: color }} />;
  }
  if (type === 1) {
    if (!waifuUrl) return <DefaultIcon small={small} />;
    return <img src={waifuUrl} alt="" className={cls} onError={(e) => { e.currentTarget.style.display = "none"; }} />;
  }
  if (type === 2) {
    return <img src={`https://picsum.photos/seed/${seed}/40/40`} alt="" className={cls} onError={(e) => { e.currentTarget.style.display = "none"; }} />;
  }
  return <DefaultIcon small={small} />;
}

function formatCount(n) {
  if (!n || n === 0) return "0";
  if (n >= 10000) return (n / 10000).toFixed(1) + "만";
  if (n >= 1000) return (n / 1000).toFixed(1) + "천";
  return String(n);
}

const ThumbUpIcon = ({ filled, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={filled ? "#065FD4" : "#606060"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z" />
    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

const ThumbDownIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#606060" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3z" />
    <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
  </svg>
);

const ReplyIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#606060" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

function ReplyItem({ reply, replyIdx = 0, parentIdx = 0 }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(reply.likes);

  return (
    <div className="flex gap-2.5 mt-3">
      <AvatarEl username={reply.user} idx={parentIdx * 10 + replyIdx + 5} small />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[13px] font-semibold text-black truncate">@{reply.user}</span>
            <span className="text-[12px] text-gray-500 shrink-0">{reply.time}</span>
          </div>
          <button className="shrink-0 p-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#606060">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
        <p className="text-[13px] text-gray-800 leading-snug mt-0.5">{reply.text}</p>
        <div className="flex items-center gap-3 mt-1.5">
          <button onClick={() => { setLiked(!liked); setLikeCount((c) => liked ? c - 1 : c + 1); }} className="flex items-center gap-1">
            <ThumbUpIcon filled={liked} size={14} />
            <span className="text-[12px] text-gray-500">{formatCount(likeCount)}</span>
          </button>
          <button><ThumbDownIcon size={14} /></button>
          <button className="text-[12px] text-gray-500 font-medium">답글</button>
        </div>
      </div>
    </div>
  );
}

export default function CommentItem({ comment, onReply, index = 0 }) {
  const [showReplies, setShowReplies] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);

  return (
    <div className="px-4 py-3.5 border-b border-gray-100">
      <div className="flex gap-3">
        <AvatarEl username={comment.user} idx={index} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[13px] font-semibold text-black truncate">@{comment.user}</span>
              <span className="text-[12px] text-gray-500 shrink-0">{comment.time}</span>
            </div>
            <button className="shrink-0 p-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#606060">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
          </div>

          <p className="text-[13px] text-gray-800 leading-snug mt-0.5">{comment.text}</p>

          <div className="flex items-center gap-4 mt-2">
            <button onClick={() => { setLiked(!liked); setLikeCount((c) => liked ? c - 1 : c + 1); }} className="flex items-center gap-1.5">
              <ThumbUpIcon filled={liked} />
              <span className="text-[12px] text-gray-500">{formatCount(likeCount)}</span>
            </button>
            <button><ThumbDownIcon /></button>
            <button onClick={() => onReply?.(comment.user)}><ReplyIcon /></button>
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
              {comment.replies.map((r, ri) => (
                <ReplyItem key={r.id} reply={r} replyIdx={ri} parentIdx={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
