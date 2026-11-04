import { CircleHelp, UserRound } from 'lucide-react';

function AirbnbMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 48 48"
      role="img"
      aria-label="Airbnb-inspired"
    >
      <path
        d="M24 5.5c-2.2 0-3.8 1.6-5 4.1L7.6 33.2c-2.1 4.2.4 8.7 4.9 8.7 3.3 0 6.1-2.3 9.2-6.4l2.3-3.1 2.3 3.1c3.1 4.1 5.9 6.4 9.2 6.4 4.5 0 7-4.5 4.9-8.7L29 9.6c-1.2-2.5-2.8-4.1-5-4.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 18.2c-3.3 0-5.6 2.5-5.6 5.5 0 2.2 1.5 4.2 5.6 9.1 4.1-4.9 5.6-6.9 5.6-9.1 0-3-2.3-5.5-5.6-5.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatHeader() {
  return (
    <header className="topbar">
      <div className="brand-lockup">
        <AirbnbMark />
        <span className="brand-divider" aria-hidden="true" />
        <div className="brand-copy">
          <h1>Kyoto Trip Planner</h1>
          <p>Your weekend, thoughtfully planned.</p>
        </div>
      </div>

      <div className="header-actions">
        <button className="icon-button" type="button" aria-label="Help">
          <CircleHelp size={20} strokeWidth={1.8} />
        </button>
        <button className="profile-button" type="button" aria-label="Profile">
          <UserRound size={19} strokeWidth={1.8} />
        </button>
      </div>
    </header>
  );
}
