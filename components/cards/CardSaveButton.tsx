"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export function CardSaveButton({ title }: { title: string }) {
  const [saved, setSaved] = useState(false);

  return (
    <button
      className={`save-button${saved ? " is-saved" : ""}`}
      type="button"
      aria-label={saved ? `Remove ${title} from saved items` : `Save ${title}`}
      aria-pressed={saved}
      onClick={() => setSaved((isSaved) => !isSaved)}
    >
      <Heart
        size={18}
        strokeWidth={1.8}
        fill={saved ? "currentColor" : "none"}
      />
    </button>
  );
}
