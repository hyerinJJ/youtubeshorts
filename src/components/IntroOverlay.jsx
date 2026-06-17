export default function IntroOverlay({ show, onDismiss }) {
  return (
    <div
      className={`absolute inset-0 z-[60] flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onDismiss}
    >
      <p
        className="text-white font-extrabold text-center px-8 leading-snug"
        style={{
          fontSize: "clamp(1.5rem, 5.5vw, 2rem)",
          textShadow: "0 2px 20px rgba(0,0,0,0.9)",
          wordBreak: "keep-all",
        }}
      >
        쇼츠와 댓글을 자유롭게 감상해주세요!{" "}
        <br />
        마지막 쇼츠까지 꼭 봐주세요!
      </p>
      <p className="text-white/50 text-sm mt-8 tracking-wide">탭하여 시작</p>
    </div>
  );
}
