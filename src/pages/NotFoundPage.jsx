import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="page not-found-page">
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>입력하신 주소를 확인하거나 홈으로 이동해주세요.</p>
      <Link to="/" className="btn-primary">
        홈으로 이동
      </Link>
    </section>
  );
}
