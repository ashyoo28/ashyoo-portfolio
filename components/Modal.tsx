"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // 모달 열릴 때 배경 스크롤 잠금
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col font-mono bg-white/90 transition-transform duration-500 ease-out ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* 헤더 */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-black/10 shrink-0">
        <span className="text-xs uppercase tracking-widest text-foreground/50">
          ASH YOO
        </span>
        <h2 className="text-sm uppercase tracking-widest font-mono">
          {title}
        </h2>
        <button
          onClick={onClose}
          className="text-foreground/40 hover:text-foreground transition-colors duration-200 text-lg leading-none"
          aria-label="닫기"
        >
          ✕
        </button>
      </div>

      {/* 콘텐츠 */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        {children}
      </div>
    </div>
  );
}
