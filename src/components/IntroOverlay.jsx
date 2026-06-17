export default function IntroOverlay({ show, onDismiss }) {
  const lineStyle = {
    fontSize: "0.88rem",
    fontWeight: 400,
    color: "#fff",
    textShadow: "0 2px 12px rgba(0,0,0,0.9)",
    whiteSpace: "nowrap",
    marginBottom: "0.55rem",
    letterSpacing: "0.01em",
  };
  const bold = { fontWeight: 700 };

  return (
    <div
      className={`absolute inset-0 z-[60] flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onDismiss}
    >
      <div className="flex flex-col items-center">
        <p style={lineStyle}>
          이 중에 <span style={bold}>몇 개</span>의 쇼츠가 <span style={bold}>AI</span> 생성물일까요?
        </p>
        <p style={lineStyle}>
          <span style={bold}>댓글</span>에 힌트가 있으니 잘 살펴보세요!
        </p>
        <p style={{ ...lineStyle, marginBottom: 0 }}>
          답은 <span style={bold}>맨 아래에</span>..
        </p>
      </div>
      <p className="text-white/50 text-sm mt-8 tracking-wide">탭하여 시작</p>
    </div>
  );
}
