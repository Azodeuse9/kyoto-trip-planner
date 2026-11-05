import { RecommendationCards } from "@/components/cards/RecommendationCards";
import { ThinkingIndicator } from "@/components/chat/ThinkingIndicator";
import type { ChatMessageModel } from "@/types/trip";
import { isRecommendationSet } from "@/utils/validateRecommendationResponse";

type ChatMessageProps = {
  message: ChatMessageModel;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user";
  const hasRecommendations = message.recommendations !== undefined;
  const recommendations = isRecommendationSet(message.recommendations)
    ? message.recommendations
    : null;

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="mr-3 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5dfe4] text-sm text-[#ff385c] shadow-sm">
          ✦
        </div>
      )}

      <div className={`flex max-w-[85%] flex-col ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={[
            "rounded-[26px] px-4 py-3 text-[15px] leading-6 sm:px-5",
            isUser
              ? "bg-[#ff385c] text-white shadow-[0_10px_20px_rgba(255,56,92,0.15)]"
              : "bg-[#f5f5f5] text-[#222222]",
            isUser ? "rounded-br-md" : "rounded-bl-md",
          ].join(" ")}
        >
          {message.isThinking ? (
            <ThinkingIndicator />
          ) : (
            <>
              {message.text ? (
                <p className={isUser ? "text-white" : "text-[#222222]"}>{message.text}</p>
              ) : null}
              {hasRecommendations && !recommendations ? (
                <p className="text-[#222222]" role="alert">
                  We couldn’t put your Kyoto plan together just now. Your request is still here —
                  try again and we’ll rebuild your recommendations.
                </p>
              ) : null}
              {recommendations ? (
                <div className="mt-4 space-y-3">
                  <RecommendationCards recommendations={recommendations} />
                </div>
              ) : null}
            </>
          )}
        </div>

        {isUser && (
          <span className="mt-2 pr-2 text-[11px] font-medium tracking-[0.02em] text-[#717171]">
            9:41 AM
          </span>
        )}
      </div>
    </div>
  );
}
