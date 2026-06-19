import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/lib/works";
import { BlurFade } from "@/components/ui/blur-fade";
import { MouseSpotlight } from "@/components/MouseSpotlight";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} — Ash Yoo`,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) notFound();

  return (
    <div
      className="min-h-screen flex flex-col font-mono text-foreground bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <MouseSpotlight />

      <main className="flex-1 w-full max-w-3xl mx-auto px-7 pt-12 pb-20 flex flex-col gap-12">
        {/* 뒤로 가기 */}
        <BlurFade delay={0.05} direction="up">
          <Link
            href="/#works"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            ← 모든 작업물 보기
          </Link>
        </BlurFade>

        {/* 커버 이미지 영역 */}
        <BlurFade delay={0.1} direction="up">
          <div className="w-full aspect-[16/9] bg-black/8">
            <div className="w-full h-full bg-gradient-to-br from-black/5 to-black/20" />
          </div>
        </BlurFade>

        {/* 제목 + 연도 */}
        <BlurFade delay={0.2} direction="up">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {work.year}
            </p>
            <h1 className="text-2xl uppercase leading-snug font-normal tracking-tight">
              {work.title}
            </h1>
            <p className="text-sm text-muted-foreground">{work.description}</p>
          </div>
        </BlurFade>

        {/* 본문 */}
        <BlurFade delay={0.3} direction="up">
          <div className="flex flex-col gap-4 text-sm leading-relaxed border-t border-black/10 pt-10">
            {work.detail.body.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </BlurFade>

        {/* 외부 링크 */}
        {work.detail.links.length > 0 && (
          <BlurFade delay={0.4} direction="up">
            <div className="flex flex-col gap-3 border-t border-black/10 pt-10">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Links
              </p>
              <div className="flex flex-wrap gap-6">
                {work.detail.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase underline underline-offset-2 hover:text-muted-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </BlurFade>
        )}
      </main>

      {/* 하단 바 */}
      <footer className="border-t border-black/10 bg-white/30 backdrop-blur-md px-7 py-3 flex items-center gap-6 text-xs uppercase tracking-widest text-foreground/60">
        <Link href="/" className="hover:text-foreground transition-colors">
          ASH YOO
        </Link>
        <Link
          href="/#works"
          className="hover:text-foreground transition-colors"
        >
          WORKS
        </Link>
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
