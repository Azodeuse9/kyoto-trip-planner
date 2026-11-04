'use client';

import { useState } from 'react';
import { CheckCheck, Sparkles } from 'lucide-react';
import { RecommendationCards } from '@/components/cards/RecommendationCards';
import { ChatHeader } from '@/components/chat/ChatHeader';
import { ChatInput } from '@/components/chat/ChatInput';
import { kyotoRecommendations } from '@/data/kyotoRecommendations';
import './globals.css';

const welcomeMessage =
  "Hi! Where would you like to explore next? Tell me about your trip and I'll help you discover a stay, an experience and somewhere great to eat.";

export default function Home() {
  const [draft, setDraft] = useState('');
  const [sentMessage, setSentMessage] = useState(
    'Plan a weekend trip to Kyoto from April 12 to April 14.',
  );

  function handleSubmit() {
    const message = draft.trim();
    if (!message) return;
    setSentMessage(message);
    setDraft('');
  }

  return (
    <main className="app-shell">
      <ChatHeader />

      <section className="chat-content" aria-label="Trip planning conversation">
        <div className="message-row assistant-row">
          <div className="assistant-avatar" aria-hidden="true">
            <Sparkles size={17} strokeWidth={1.8} />
          </div>
          <p className="message-bubble assistant-bubble">{welcomeMessage}</p>
        </div>

        <div className="message-row user-row">
          <p className="message-bubble user-bubble">{sentMessage}</p>
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
            <p className="message-bubble assistant-bubble results-intro">
              Here are three recommendations for your Kyoto weekend.
            </p>
            <RecommendationCards recommendations={kyotoRecommendations} />
          </div>
        </div>
      </section>

      <div className="composer-area">
        <ChatInput
          value={draft}
          disabled={false}
          onChange={setDraft}
          onSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}
