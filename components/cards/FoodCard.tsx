import Image from "next/image";
import { Clock3, Heart, MapPin, Sparkles, UtensilsCrossed } from "lucide-react";
import type { FoodData } from "@/types/trip";

export function FoodCard({ food }: { food: FoodData }) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-[#ebebeb] bg-[#f9f9f9] shadow-[0_8px_22px_rgba(34,34,34,0.04)]">
      <div className="relative h-44 overflow-hidden rounded-b-[18px]">
        <Image
          src={food.image}
          alt={food.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <button
          type="button"
          aria-label="Save food spot"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/80 text-[#222222] shadow-sm backdrop-blur-sm"
        >
          <Heart size={18} strokeWidth={2} fill="none" />
        </button>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex rounded-full bg-[#f3f3f3] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#222222]">
            FOOD
          </span>
          <span className="text-[0.9rem] font-semibold text-[#222222]">{food.priceRange}</span>
        </div>

        <div>
          <h3 className="text-[1.05rem] font-semibold leading-tight tracking-[-0.04em] text-[#222222] sm:text-[1.25rem]">
            {food.title}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-[0.9rem] text-[#717171]">
            <MapPin size={14} className="text-[#ff385c]" />
            <span>{food.location}</span>
          </div>
        </div>

        <div className="space-y-2 border-t border-[#ebebeb] pt-3 text-[0.9rem] text-[#222222]">
          <div className="flex items-center gap-2">
            <UtensilsCrossed size={14} className="text-[#717171]" />
            <span>{food.cuisine}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock3 size={14} className="text-[#717171]" />
            <span>{food.openingHours}</span>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles size={14} className="mt-0.5 text-[#ff385c]" />
            <span>Must-order: {food.mustOrder}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
