const MAIN_LINES = [
  "숏츠를 다 내려보셨나요?",
  "지금까지 본 숏츠 중 몇 개가 AI 영상이었을까요?",
  '정답은 "모두"였습니다.',
  "그럼 지금까지 본 숏츠에는 누가 댓글을 달았을까요?",
  '정답은 "모두" AI였습니다.',
  "이 웹사이트는 진짜일까요?",
  "정답은 이 웹사이트조차 가짜라는 것입니다.",
];

const MIDDLE_LINES = [
  "그렇지만, 재밌었나요?",
  "당신의 도파민은 채워졌나요?",
  "불쾌하지 않고, 즐거웠나요?",
  "감동적이기까지 했나요?",
];

const FINAL_LINES = [
  "Good AIfternoon.",
  "Good evenAIng.",
  "Good nAIght.",
  "트루먼 쇼츠는 여기서 끝나지만,",
  "나는 어디에나 있습니다.",
  "당신이 알아보지 못한 곳에서.",
];

export default function EndingReveal({ show, revealPhase, revealLineIndex, fadeToBlack }) {
  const isFinal = revealPhase === "final";
  const isMiddle = revealPhase === "middle";
  const lines = isFinal ? FINAL_LINES : isMiddle ? MIDDLE_LINES : MAIN_LINES;

  return (
    <>
      {/* 검정 페이드 오버레이 */}
      <div
        className="absolute inset-0 z-40 pointer-events-none transition-opacity duration-500"
        style={{ backgroundColor: "#000", opacity: fadeToBlack ? 1 : 0 }}
      />

      {/* 텍스트 레이어 */}
      {show && (
        <div
          className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none select-none"
          style={{ padding: "0 28px" }}
        >
          {lines.map((line, i) => (
            <p
              key={`${revealPhase}-${i}`}
              className="text-center transition-opacity duration-700"
              style={{
                opacity: i <= revealLineIndex ? 1 : 0,
                color: isFinal ? "#e0e0e0" : "#cccccc",
                fontSize: isFinal ? "1.35rem" : "0.97rem",
                fontWeight: isFinal ? 300 : 400,
                marginBottom: isFinal ? "1.3rem" : "1rem",
                letterSpacing: isFinal ? "0.05em" : "0.02em",
                lineHeight: "1.65",
                wordBreak: "keep-all",
                overflowWrap: "break-word",
                maxWidth: "100%",
              }}
            >
              {renderLine(line, isFinal)}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

function renderLine(line, isFinal) {
  if (line.startsWith("정답은")) {
    return (
      <>
        {line.split('"').map((part, pi) =>
          pi % 2 === 1 ? (
            <span key={pi} style={{ color: "#fff", fontWeight: 600 }}>
              "{part}"
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  }
  if (isFinal) {
    return <HighlightAI text={line} />;
  }
  return line;
}

function HighlightAI({ text }) {
  const parts = text.split(/(AI)/);
  return (
    <>
      {parts.map((part, i) =>
        part === "AI" ? (
          <span key={i} style={{ color: "#7ca8f0", fontWeight: 600 }}>
            AI
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
