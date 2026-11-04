export function ThinkingIndicator() {
  return (
    <div className="thinking-indicator" role="status" aria-label="Planner is thinking">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="thinking-dot"
          style={{
            animationDelay: `${dot * 0.16}s`,
          }}
        />
      ))}
    </div>
  );
}
