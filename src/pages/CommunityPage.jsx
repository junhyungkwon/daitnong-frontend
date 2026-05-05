const posts = [
  { area: "전북 김제", title: "벼 수확 전 콤바인 점검 체크리스트 공유", comments: 18 },
  { area: "경북 상주", title: "트랙터 냉각수 누수 빠른 해결법", comments: 9 },
  { area: "충남 논산", title: "중고 이앙기 구매 시 필수 확인 5가지", comments: 14 },
];

export function CommunityPage() {
  return (
    <section className="community-page">
      <div className="section-head">
        <h2>농가 소통방</h2>
        <p>지역별 팁과 수리 노하우를 나누는 커뮤니티</p>
      </div>
      <div className="community-list">
        {posts.map((post) => (
          <article key={post.title} className="community-card">
            <div>
              <h3>{post.title}</h3>
              <p>{post.area}</p>
            </div>
            <span className="comment-count">댓글 {post.comments}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
