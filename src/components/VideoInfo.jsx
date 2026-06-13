import React, { useState } from "react";

export default function VideoInfo({ video, videoState, onStateChange }) {
  const [expanded, setExpanded] = useState(false);
  const { isSubscribed } = videoState;

  return (
    <>
      {/* 하단 그라디언트 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* 하단 정보 - 왼쪽 */}
      <div className="absolute bottom-[26px] left-3 right-20 z-20">
        {/* 채널 아바타 + 핸들 + 구독 버튼 */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
            <img
              src={video.channel.avatarUrl}
              alt={video.channel.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(video.channel.name)}&background=random&size=64`;
              }}
            />
          </div>
          <span className="text-white font-semibold text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate max-w-[130px]">
            {video.channel.handle}
          </span>
          <button
            onClick={() => onStateChange({ isSubscribed: !isSubscribed })}
            className={`shrink-0 text-sm font-semibold transition-colors duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] ${
              isSubscribed ? "text-white/50" : "text-white"
            }`}
          >
            {isSubscribed ? "구독중" : "구독"}
          </button>
        </div>

        {/* ▶ 음악 제목 */}
        <div className="flex items-center gap-2 mb-2 overflow-hidden">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white" className="shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            <path d="M8 5v14l11-7z" />
          </svg>
          <div className="overflow-hidden flex-1">
            <p className="text-white text-sm whitespace-nowrap animate-marquee drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              {video.music}
            </p>
          </div>
        </div>

        {/* 영상 제목 */}
        {expanded ? (
          <p className="text-white text-sm leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            {video.title}
            <button onClick={() => setExpanded(false)} className="text-white/60 ml-1 text-xs">접기</button>
          </p>
        ) : (
          <p className="text-white text-sm leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] line-clamp-1 cursor-pointer" onClick={() => setExpanded(true)}>
            {video.title}
          </p>
        )}
      </div>

      {/* 채널 썸네일 - 우측 하단 (둥근 네모) */}
      <div className="absolute bottom-[26px] right-3 z-20 w-[52px] h-[52px] rounded-xl overflow-hidden border border-white/20 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
        <img
          src={video.channel.avatarUrl}
          alt={video.channel.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(video.channel.name)}&background=random&size=64`;
          }}
        />
      </div>
    </>
  );
}
