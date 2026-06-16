import { useEffect, useRef } from "react";

const MAIN_LINES = [
  "숏츠를 다 내려보셨나요?",
  "지금까지 본 숏츠 중 몇 개가 AI 영상이었을까요?",
  '정답은 "모두"였습니다.',
  "그럼 지금까지 본 숏츠에는 누가 댓글을 달았을까요?",
  '정답은 모두 "AI"였습니다.',
  "그렇지만, 재밌었나요?",
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
  const lines = revealPhase === "final" ? FINAL_LINES : MAIN_LINES;
  const isFinal = revealPhase === "final";

  return (
    <>
      {/* 검정 페이드 오버레이 */}
      <div
        className="absolute inset-0 z-40 pointer-events-none transition-opacity duration-500"
        style={{ backgroundColor: "#000", opacity: fadeToBlack ? 1 : 0 }}
      />

      {/* 텍스트 레이어 */}
      {show && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-8 pointer-events-none select-none">
          {lines.map((line, i) => (
            <p
              key={`${revealPhase}-${i}`}
              className="text-center leading-relaxed transition-opacity duration-700"
              style={{
                opacity: i <= revealLineIndex ? 1 : 0,
                color: isFinal ? "#e0e0e0" : "#cccccc",
                fontSize: isFinal ? "1.5rem" : "1rem",
                fontWeight: isFinal ? 300 : 400,
                marginBottom: isFinal ? "1.4rem" : "1.1rem",
                letterSpacing: isFinal ? "0.06em" : "0.02em",
                fontStyle: line.startsWith("정답은") ? "normal" : "normal",
              }}
            >
              {line.startsWith("정답은") ? (
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
              ) : isFinal ? (
                <HighlightAI text={line} />
              ) : (
                line
              )}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

function HighlightAI({ text }) {
  // Highlight the "AI" portion in Good AIfternoon / Good evenAIng / Good nAIght
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
