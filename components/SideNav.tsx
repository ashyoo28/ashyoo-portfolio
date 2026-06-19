"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/works", label: "WORKS" },
  { href: "/contact", label: "CONTACT" },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="섹션 네비게이션"
      className="hidden md:flex fixed left-6 top-12 z-50 flex-col gap-5"
    >
      {NAV_ITEMS.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            className="group flex items-center gap-2 transition-colors duration-200"
          >
            {/* 활성 인디케이터 라인 */}
            <span
              className={`block w-0.5 h-4 transition-all duration-300 ${
                isActive
                  ? "bg-foreground"
                  : "bg-foreground/20 group-hover:bg-foreground/40"
              }`}
            />
            <span
              className={`text-xs uppercase tracking-widest font-mono transition-colors duration-200 ${
                isActive
                  ? "text-foreground"
                  : "text-foreground/30 group-hover:text-foreground/60"
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
