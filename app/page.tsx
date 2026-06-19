import { MouseSpotlight } from "@/components/MouseSpotlight";
import { SideNav } from "@/components/SideNav";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  const experience = [
    { index: 0, year: "2024", title: "UX WRITING GUIDELINES FOR VINYLC" },
    {
      index: 1,
      year: "2024",
      title: "SERVICE STRATEGY CONSULTING FOR SKT A. (MESSENGER SERVICE)",
    },
    {
      index: 2,
      year: "2023",
      title: "UX/UI CONSULTING FOR LOTTE DUTY FREE",
    },
    { index: 3, year: "2022", title: "UX/UI CONSULTING FOR CJ CGV" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col font-mono text-foreground bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <MouseSpotlight />
      <SideNav />
      {/* Main */}
      <main className="flex-1 h-full w-full max-w-6xl mx-auto px-7 pt-12 pb-12 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
        {/* Left — Bio */}
        <div className="flex flex-col gap-8 self-start">
          {/* Greeting */}
          <BlurFade delay={0.05} direction="up">
            <p className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              HELLO, VISITOR{" "}
              <span
                className="inline-block size-2.5 rounded-full"
                style={{ backgroundColor: "#EF798A" }}
                aria-hidden
              />
            </p>
          </BlurFade>

          {/* Name + tagline */}
          <BlurFade delay={0.15} direction="up">
            <h1 className="text-2xl uppercase leading-snug font-normal tracking-tight">
              I&apos;M{" "}
              <span className="underline underline-offset-4">ASH YOO</span>,
              <br />
              A UX/UI DESIGNER
              <br />
              WHO STRUCTURES PROBLEMS
              <br />
              INTO CLEAR DIGITAL EXPERIENCES.
            </h1>
          </BlurFade>

          {/* Bio paragraphs */}
          <BlurFade delay={0.25} direction="up">
            <div className="flex flex-col gap-5 text-sm uppercase leading-relaxed">
              <p>
                I FIND THE INTERSECTION BETWEEN USER BEHAVIOR AND BUSINESS GOALS,
                THEN SHAPE IT INTO INTERFACES PEOPLE ACTUALLY UNDERSTAND.
              </p>
              <p>
                FROM RESEARCH AND IA TO WIREFRAMES, PROTOTYPES, AND DESIGN
                SYSTEMS — I COVER THE FULL SPAN OF PRODUCT EXPERIENCE, ALWAYS
                IN CLOSE COLLABORATION WITH THE TEAM.
              </p>
              <p>
                FIND ME ON{" "}
                <a
                  href="https://linkedin.com/in/ashyoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
                >
                  LINKEDIN↗
                </a>{" "}
                AND{" "}
                <a
                  href="https://behance.net/ashyoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
                >
                  BEHANCE↗
                </a>
                , OR{" "}
                <a
                  href="mailto:ash.yoo@email.com"
                  className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
                >
                  SEND ME AN EMAIL↗
                </a>
                .
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.35} direction="up">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              MORE ABOUT ME
            </p>
          </BlurFade>
        </div>

        {/* Right — Experience list */}
        <div className="flex flex-col self-end">
          {experience.map((item) => (
            <BlurFade key={item.index} delay={0.1 + item.index * 0.1} direction="up">
              <div className="flex items-baseline gap-5 py-4 border-b border-black/15">
                <span className="text-base text-muted-foreground tabular-nums w-5 shrink-0">
                  {item.index}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-lg uppercase leading-snug tracking-tight">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.year}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </main>

      {/* Bottom status bar */}
      <BlurFade delay={0.5} direction="up">
        <footer className="border-t border-black/10 bg-white/30 backdrop-blur-md px-7 py-3 flex items-center gap-6 text-xs uppercase tracking-widest text-foreground/60">
          <span>ASH YOO / ABOUT</span>
          <a
            href="mailto:ash.yoo@email.com"
            className="hover:text-foreground transition-colors"
          >
            CONTACT
          </a>
          <a
            href="https://linkedin.com/in/ashyoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://behance.net/ashyoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            BEHANCE
          </a>
          <a
            href="https://instagram.com/ashyoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors ml-auto"
          >
            INSTAGRAM
          </a>
        </footer>
      </BlurFade>
    </div>
  );
}
