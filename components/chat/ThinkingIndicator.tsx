export function ThinkingIndicator() {
  return (
    <div className="flex items-center gap-2 py-1" aria-label="Planner is thinking">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#717171]/80"
          style={{
            animationDelay: `${dot * 0.14}s`,
            animationDuration: "1.2s",
          }}
        />
      ))}
    </div>
  );
}
