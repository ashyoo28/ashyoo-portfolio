import { MouseSpotlight } from "@/components/MouseSpotlight";
import { SideNav } from "@/components/SideNav";
import { BlurFade } from "@/components/ui/blur-fade";
import { WorkCard } from "@/components/WorkCard";
import { works } from "@/lib/works";

export const metadata = {
  title: "Works — Ash Yoo",
  description: "UX/UI 디자인 작업물 목록",
};

export default function WorksPage() {
  return (
    <div
      className="min-h-screen flex flex-col font-mono text-foreground bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <MouseSpotlight />
      <SideNav />

      <main className="flex-1 w-full max-w-6xl mx-auto px-7 pt-12 pb-20 flex flex-col gap-10">
        {/* 헤딩 */}
        <BlurFade delay={0.05} direction="up">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              ASH YOO
            </p>
            <h1 className="text-2xl uppercase leading-snug font-normal tracking-tight">
              Works
            </h1>
          </div>
        </BlurFade>

        {/* 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {works.map((work, i) => (
            <BlurFade key={work.slug} delay={0.1 + i * 0.1} direction="up">
              <WorkCard work={work} />
            </BlurFade>
          ))}
        </div>
      </main>

      <footer className="border-t border-black/10 bg-white/30 backdrop-blur-md px-7 py-3 flex items-center gap-6 text-xs uppercase tracking-widest text-foreground/60">
        <a href="/" className="hover:text-foreground transition-colors">
          ASH YOO
        </a>
        <span className="text-foreground">WORKS</span>
        <a
          href="mailto:ash.yoo@email.com"
          className="ml-auto hover:text-foreground transition-colors"
        >
          CONTACT↗
        </a>
      </footer>
    </div>
  );
}
