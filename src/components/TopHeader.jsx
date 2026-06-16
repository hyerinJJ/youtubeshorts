export default function TopHeader() {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] lg:w-[calc(100dvh*9/16)] lg:max-w-none z-50 flex items-center justify-between px-4 pt-3 pb-12 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
      {/* 뒤로가기 */}
      <button className="pointer-events-auto p-1">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </button>

      {/* 중앙 빈 공간 */}
      <div className="flex-1" />

      {/* 검색 + 더보기 */}
      <div className="flex items-center gap-1 pointer-events-auto">
        <button className="p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
        <button className="p-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
