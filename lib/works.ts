export type Work = {
  slug: string
  title: string
  description: string
  thumbnail: string
  year: string
  detail: {
    coverImage: string
    body: string
    links: { label: string; href: string }[]
  }
}

export const works: Work[] = [
  {
    slug: "vinylc-ux-writing",
    title: "UX WRITING GUIDELINES FOR VINYLC",
    description: "음악 스트리밍 서비스의 UX 라이팅 가이드라인 설계 및 문서화",
    thumbnail: "/images/works/vinylc-ux-writing.jpg",
    year: "2024",
    detail: {
      coverImage: "/images/works/vinylc-ux-writing.jpg",
      body: `VinylC는 독립 음악 아티스트와 팬을 연결하는 스트리밍 서비스입니다.

기존 UI 텍스트가 브랜드 톤과 일치하지 않고 사용자 행동 유도가 불명확하다는 문제를 발견했습니다. 리서치를 통해 주요 터치포인트를 식별하고, 브랜드 보이스 원칙·마이크로카피 패턴·에러 메시지 가이드를 포함한 UX 라이팅 가이드라인을 수립했습니다.

가이드라인 적용 후 온보딩 완료율이 18% 향상되었으며, 서포트 문의 중 UI 텍스트 혼란으로 인한 건수가 감소했습니다.`,
      links: [
        { label: "BEHANCE↗", href: "https://behance.net/ashyoo" },
      ],
    },
  },
  {
    slug: "skt-messenger",
    title: "SERVICE STRATEGY — SKT A. MESSENGER",
    description: "SKT A. 메신저 서비스의 전략 컨설팅 및 사용자 경험 재설계",
    thumbnail: "/images/works/skt-messenger.jpg",
    year: "2024",
    detail: {
      coverImage: "/images/works/skt-messenger.jpg",
      body: `SKT A. 메신저는 AI 기반 커뮤니케이션 서비스로, 기존 메신저 시장에서의 차별화 포지셔닝이 과제였습니다.

사용자 인터뷰·경쟁사 분석·서비스 블루프린트를 통해 핵심 사용자 니즈와 비즈니스 기회를 매핑했습니다. AI 기능이 대화 흐름을 방해하지 않는 "조용한 조력자" 원칙을 도출하고, 이를 IA 구조와 주요 화면 와이어프레임으로 구체화했습니다.

전략 방향성 수립부터 프로토타입 검증까지 전 과정에 참여했습니다.`,
      links: [
        { label: "BEHANCE↗", href: "https://behance.net/ashyoo" },
      ],
    },
  },
  {
    slug: "lotte-duty-free",
    title: "UX/UI CONSULTING — LOTTE DUTY FREE",
    description: "롯데면세점 모바일 앱의 구매 플로우 개선 및 UI 리뉴얼",
    thumbnail: "/images/works/lotte-duty-free.jpg",
    year: "2023",
    detail: {
      coverImage: "/images/works/lotte-duty-free.jpg",
      body: `롯데면세점 앱은 국내외 여행객을 대상으로 하는 대형 커머스 서비스입니다.

데이터 분석을 통해 장바구니 이탈률이 높은 구간을 특정하고, 사용성 테스트로 원인을 검증했습니다. 상품 탐색 → 장바구니 → 결제 플로우를 단순화하고, 다국어 환경에서도 일관된 경험을 제공하는 컴포넌트 구조를 설계했습니다.

리뉴얼 이후 결제 전환율이 개선되었고, 앱 스토어 평점이 상승했습니다.`,
      links: [
        { label: "BEHANCE↗", href: "https://behance.net/ashyoo" },
        { label: "INSTAGRAM↗", href: "https://instagram.com/ashyoo" },
      ],
    },
  },
]
