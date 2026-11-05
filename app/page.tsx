'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCheck, Sparkles } from 'lucide-react';
import { RecommendationCards } from '@/components/cards/RecommendationCards';
import { ChatHeader } from '@/components/chat/ChatHeader';
import { ChatInput } from '@/components/chat/ChatInput';
import { ThinkingIndicator } from '@/components/chat/ThinkingIndicator';
import { mockTripRequests } from '@/data/mockTripRequests';
import { kyotoRecommendations } from '@/data/kyotoRecommendations';
import { mockBrokenResponse } from '@/data/mockBrokenResponse';
import { isRecommendationSet } from '@/utils/validateRecommendationResponse';
import type { RecommendationSet } from '@/types/trip';
import './globals.css';

const welcomeMessage =
  "Hi! Where would you like to explore next? Tell me about your trip and I'll help you discover a stay, an experience and somewhere great to eat.";

type TurnStatus = 'thinking' | 'success' | 'error';

type ConversationTurn = {
  id: number;
  userMessage: string;
  status: TurnStatus;
  recommendations?: RecommendationSet;
};

export default function Home() {
  const [draft, setDraft] = useState('');
  const [turns, setTurns] = useState<ConversationTurn[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const nextTurnId = useRef(1);
  const responseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (responseTimeout.current) clearTimeout(responseTimeout.current);
    },
    [],
  );

  function resolveTurn(turnId: number, response: unknown) {
    responseTimeout.current = setTimeout(() => {
      const isValidResponse = isRecommendationSet(response);
      setTurns((currentTurns) =>
        currentTurns.map((turn) =>
          turn.id === turnId
            ? {
                ...turn,
                status: isValidResponse ? 'success' : 'error',
                recommendations: isValidResponse ? response : undefined,
              }
            : turn,
        ),
      );
      setIsThinking(false);
      responseTimeout.current = null;
    }, 1100);
  }

  function handleSubmit(request = draft) {
    if (!request.trim() || isThinking) return;

    const turnId = nextTurnId.current++;
    const shouldFail = request.trim().toLowerCase() === 'break my trip';
    setTurns((currentTurns) => [
      ...currentTurns,
      { id: turnId, userMessage: request, status: 'thinking' },
    ]);
    setDraft('');
    setIsThinking(true);
    resolveTurn(turnId, shouldFail ? mockBrokenResponse : kyotoRecommendations);
  }

  function handleRetry(turnId: number) {
    if (isThinking) return;
    setTurns((currentTurns) =>
      currentTurns.map((turn) => (turn.id === turnId ? { ...turn, status: 'thinking' } : turn)),
    );
    setIsThinking(true);
    resolveTurn(turnId, kyotoRecommendations);
  }

  return (
    <main className="app-shell">
      <ChatHeader />

      <section className="chat-content" aria-label="Trip planning conversation">
        <div className="message-row assistant-row">
          <div className="assistant-avatar" aria-hidden="true">
            <Sparkles size={17} strokeWidth={1.8} />
          </div>
          <div className="assistant-message-copy">
            <p className="message-bubble assistant-bubble">{welcomeMessage}</p>
            {turns.length === 0 && (
              <div className="example-prompts" aria-label="Example trip requests">
                {mockTripRequests.map((request) => (
                  <button
                    className="example-prompt"
                    key={request}
                    type="button"
                    disabled={isThinking}
                    onClick={() => handleSubmit(request)}
                  >
                    {request}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {turns.map((turn) => {
          const isLatestTurn = turn.id === turns[turns.length - 1]?.id;

          return (
            <div className="conversation-turn" key={turn.id}>
              <div className="message-row user-row">
                <p className="message-bubble user-bubble">{turn.userMessage}</p>
                <div className="message-meta">
                  <span>9:41 AM</span>
                  <CheckCheck size={16} aria-label="Message sent" />
                </div>
              </div>

              <div className="results-row">
                <div className="assistant-avatar results-avatar" aria-hidden="true">
                  <Sparkles size={17} strokeWidth={1.8} />
                </div>
                <div className="results-content">
                  {turn.status === 'thinking' && (
                    <div
                      className="message-bubble assistant-bubble thinking-bubble"
                      aria-live="polite"
                    >
                      <ThinkingIndicator />
                    </div>
                  )}
                  {turn.status === 'error' && (
                    <div
                      className="message-bubble assistant-bubble error-bubble"
                      role="alert"
                    >
                      <div className="flex items-start gap-[9px]">
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#ff385c]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                        <span>
                          We couldn’t put your Kyoto plan together just now. Your request is still
                          here — try again and we’ll rebuild your recommendations.
                        </span>
                      </div>
                      <button
                        className="retry-button"
                        type="button"
                        onClick={() => handleRetry(turn.id)}
                        disabled={isThinking}
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                  {turn.status === 'success' && turn.recommendations && (
                    <>
                      <p className="message-bubble assistant-bubble results-intro">
                        Here are three recommendations for your Kyoto weekend.
                      </p>
                      <p className="mock-disclosure">
                        Mock data: recommendations are sample entries from the Kyoto trip-planner workbook.
                      </p>
                      {isLatestTurn && (
                        <RecommendationCards recommendations={turn.recommendations} />
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div className="composer-area">
        <ChatInput
          value={draft}
          disabled={isThinking}
          onChange={setDraft}
          onSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}
