import { MouseSpotlight } from "@/components/MouseSpotlight";
import { SideNav } from "@/components/SideNav";
import { BlurFade } from "@/components/ui/blur-fade";
import { TallyForm } from "@/components/TallyForm";

export const metadata = {
  title: "Contact — Ash Yoo",
  description: "브랜드, 제품, 인터페이스, 콘텐츠를 함께 만들고 싶다면 간단히 남겨주세요.",
};

export default function ContactPage() {
  return (
    <div
      className="min-h-screen flex flex-col font-mono text-foreground bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <MouseSpotlight />
      <SideNav />

      <main className="flex-1 w-full max-w-3xl mx-auto px-7 pt-12 pb-20 flex flex-col gap-10">
        {/* 헤딩 */}
        <BlurFade delay={0.05} direction="up">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              ASH YOO
            </p>
            <h1 className="text-2xl uppercase leading-snug font-normal tracking-tight">
              함께 만들 프로젝트
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              브랜드, 제품, 인터페이스, 콘텐츠를 함께 만들고 싶다면 간단히
              남겨주세요.
            </p>
          </div>
        </BlurFade>

        {/* Tally 폼 */}
        <BlurFade delay={0.15} direction="up">
          <TallyForm />
        </BlurFade>
      </main>

      <footer className="border-t border-black/10 bg-white/30 backdrop-blur-md px-7 py-3 flex items-center gap-6 text-xs uppercase tracking-widest text-foreground/60">
        <a href="/" className="hover:text-foreground transition-colors">
          ASH YOO
        </a>
        <span className="text-foreground">CONTACT</span>
        <a
          href="https://linkedin.com/in/ashyoo"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hover:text-foreground transition-colors"
        >
          LINKEDIN
        </a>
      </footer>
    </div>
  );
}
