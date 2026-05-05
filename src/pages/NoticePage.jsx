export function NoticePage() {
  return (
    <section className="notice-page">
      <div className="section-head">
        <h2>공지 및 시세 가이드</h2>
        <p>서비스 정책 안내와 다있농 데이터 기반 시세 정보</p>
      </div>

      <article className="notice-page__card">
        <h3>5월 점검 캠페인 안내</h3>
        <p>
          엔진오일/필터 교체 이력 입력 시 다음 교체 주기를 자동 추천해드립니다.
        </p>
      </article>

      <article className="notice-page__card">
        <h3>트랙터 평균 시세 (최근 30일)</h3>
        <p>2,100만원 ~ 3,400만원 / 연식과 가동시간 기준 자동 산정</p>
      </article>
    </section>
  );
}
