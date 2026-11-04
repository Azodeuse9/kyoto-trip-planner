import { FormEvent } from 'react';
import { Plus, Send } from 'lucide-react';

type ChatInputProps = {
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export function ChatInput({ value, disabled, onChange, onSubmit }: ChatInputProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <button className="add-button" type="button" aria-label="Add attachment">
        <Plus size={21} strokeWidth={1.8} />
      </button>
      <input
        aria-label="Message your trip planner"
        type="text"
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Plan your Kyoto weekend..."
      />
      <button
        className="send-button"
        type="submit"
        aria-label="Send message"
        disabled={disabled || !value.trim()}
      >
        <Send size={19} strokeWidth={1.9} />
      </button>
    </form>
  );
}
