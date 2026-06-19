# AGENTS.md — Ash Yoo Portfolio

## Operational Commands

패키지 매니저는 **bun 고정** — npm/yarn/pnpm 절대 사용 금지.

```bash
bun dev          # 개발 서버 (http://localhost:3000)
bun build        # 프로덕션 빌드
bun lint         # ESLint 실행
bunx shadcn add <component>   # shadcn 컴포넌트 추가
```

Next.js 16은 breaking changes가 있다. 코드 작성 전 반드시 `node_modules/next/dist/docs/` 의 해당 가이드를 확인하고 deprecation 공지를 따른다.

---

## Project Context

개인 포트폴리오 겸 AI 시대 브랜딩 사이트.

Stack: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · Magic UI · GSAP · Bun

---

## Golden Rules

### Do

- 답변과 코드 주석은 **한국어**로 작성한다.
- UI는 **Tailwind 우선**으로 구현한다. Tailwind로 해결 불가할 때만 컴포넌트를 설치한다.
- 폼, 다이얼로그, 모달 등 인터랙티브 UI는 **shadcn/ui** 컴포넌트를 사용한다.
- 진입(entrance) 애니메이션은 **Magic UI** 컴포넌트를 활용한다.
- 마우스 인터랙션·스크롤 기반 고급 애니메이션은 **GSAP**으로 구현한다.
- 환경변수는 `.env.local`에 보관하고 **절대 커밋하지 않는다.**
- 새 shadcn 컴포넌트 추가 시 `bunx shadcn add <component>` 명령을 먼저 검토한다.
- Tailwind CSS v4 방식(CSS `@theme` 블록)을 따른다 — `tailwind.config.ts` 없음.

### Don't

- API 키, 시크릿, 토큰을 소스코드에 하드코딩하지 않는다.
- `.env.local`, `.env*.local` 파일을 git에 커밋하지 않는다.
- npm/yarn/pnpm 명령을 사용하지 않는다.
- 애니메이션 역할이 겹치지 않도록: Magic UI(진입) / GSAP(인터랙션·스크롤) 경계를 유지한다.
- 이미 Tailwind로 해결 가능한 스타일을 위해 별도 라이브러리를 추가하지 않는다.

---

## Standards

- TypeScript strict 모드 유지.
- 컴포넌트 파일명: PascalCase (`HeroSection.tsx`), 유틸 파일명: camelCase (`cn.ts`).
- 커밋 메시지: `type(scope): 한국어 설명` 형식 (예: `feat(hero): 히어로 섹션 레이아웃 추가`).
- 규칙과 코드 간 괴리가 발생하면 이 파일의 업데이트를 제안한다.
