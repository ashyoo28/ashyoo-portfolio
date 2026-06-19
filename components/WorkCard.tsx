import Link from "next/link";
import type { Work } from "@/lib/works";

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group flex flex-col gap-3 font-mono"
    >
      {/* 썸네일 — 실제 이미지 없을 시 muted 배경 fallback */}
      <div className="relative w-full aspect-[4/3] bg-black/8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/15 group-hover:from-black/10 group-hover:to-black/25 transition-all duration-500" />
      </div>

      {/* 텍스트 */}
      <div className="flex flex-col gap-1">
        <p className="text-xs text-muted-foreground tabular-nums">
          {work.year}
        </p>
        <h3 className="text-sm uppercase leading-snug tracking-tight group-hover:opacity-60 transition-opacity duration-300">
          {work.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {work.description}
        </p>
      </div>
    </Link>
  );
}
