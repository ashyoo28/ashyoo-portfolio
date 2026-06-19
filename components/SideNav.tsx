"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal";
import { WorkCard } from "@/components/WorkCard";
import { TallyForm } from "@/components/TallyForm";
import { BlurFade } from "@/components/ui/blur-fade";
import { works } from "@/lib/works";

type ModalType = "works" | "contact" | null;

export function SideNav() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const NAV_ITEMS: { key: ModalType; label: string }[] = [
    { key: "works", label: "WORKS" },
    { key: "contact", label: "CONTACT" },
  ];

  return (
    <>
      <nav
        aria-label="섹션 네비게이션"
        className="hidden md:flex fixed left-6 top-12 z-50 flex-col gap-5"
      >
        {NAV_ITEMS.map(({ key, label }) => {
          const isActive = openModal === key;
          return (
            <button
              key={key}
              onClick={() => setOpenModal(isActive ? null : key)}
              className="group flex items-center gap-2 transition-colors duration-200 text-left"
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
                className={`text-[16px] uppercase tracking-widest font-mono transition-colors duration-200 ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground/30 group-hover:text-foreground/60"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Works 모달 */}
      <Modal
        isOpen={openModal === "works"}
        onClose={() => setOpenModal(null)}
        title="WORKS"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {works.map((work, i) => (
            <BlurFade key={work.slug} delay={0.05 + i * 0.08} direction="up">
              <WorkCard work={work} />
            </BlurFade>
          ))}
        </div>
      </Modal>

      {/* Contact 모달 */}
      <Modal
        isOpen={openModal === "contact"}
        onClose={() => setOpenModal(null)}
        title="CONTACT"
      >
        <div className="flex min-h-full items-center justify-center">
          <div className="flex w-full max-w-xl flex-col items-center justify-center gap-6">
          <BlurFade delay={0.05} direction="up">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-base uppercase leading-snug font-normal tracking-tight">
                함께 만들 프로젝트
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                브랜드, 제품, 인터페이스, 콘텐츠를 함께 만들고 싶다면 간단히
                남겨주세요.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.12} direction="up">
            <TallyForm />
          </BlurFade>
          </div>
        </div>
      </Modal>
    </>
  );
}
