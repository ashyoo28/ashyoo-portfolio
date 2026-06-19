"use client";

import { useEffect, useState } from "react";

export function TallyForm() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Tally embed 스크립트 로드 (중복 방지)
    const SCRIPT_ID = "tally-embed-js";
    const loadEmbeds = () => {
      if (typeof (window as { Tally?: { loadEmbeds: () => void } }).Tally !== "undefined") {
        (window as { Tally?: { loadEmbeds: () => void } }).Tally!.loadEmbeds();
      }
    };

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://tally.so/widgets/embed.js";
      script.onload = loadEmbeds;
      script.onerror = loadEmbeds;
      document.body.appendChild(script);
    } else {
      loadEmbeds();
    }

    // 폼 제출 이벤트 감지
    const handleMessage = (e: MessageEvent) => {
      if (
        typeof e.data === "object" &&
        (e.data?.event === "tally-form-submitted" ||
          e.data?.type === "tally-form-submitted")
      ) {
        setSubmitted(true);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (submitted) {
    return (
      <div className="w-full min-h-[200px] sm:min-h-[240px] flex items-center justify-center border border-black/10 bg-white/10 backdrop-blur-sm">
        <p className="text-sm uppercase tracking-widest text-center px-6">
          문의가 접수됐어요. 확인 후 답장드릴게요.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full border border-black/10 bg-white/10 backdrop-blur-sm overflow-hidden">
      <iframe
        data-tally-src="https://tally.so/embed/Y5e445?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="320"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Contact me"
        className="w-full"
      />
    </div>
  );
}
