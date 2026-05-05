import { Link } from "react-router-dom";
import { homeAssetProgress, homeMapPrices, homePopularListings } from "../mock/homePageMock";

export function HomePage() {
  return (
    <section className="home-page">
      <article className="home-hero" aria-label="메인 배너">
        <div className="home-hero__overlay">
          <h2>
            <span>다있농:</span> 스마트 농업의 시작
          </h2>
        </div>
      </article>

      <section className="asset-section">
        <div className="section-head section-head--tight">
          <h3>내 자산 관리</h3>
        </div>
        <div className="asset-board">
          <article className="asset-card asset-card--chart">
            <p className="asset-card__label">현재 자산 가치</p>
            <strong>₩28,800,000</strong>
            <div className="bar-chart" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </article>
          <article className="asset-card asset-card--donut">
            <p className="asset-card__label">유지보수 추이</p>
            <strong>₩3,000,000</strong>
            <div className="asset-donut" aria-hidden="true" />
          </article>
          <article className="asset-card asset-card--progress">
            <p className="asset-card__label">유지보수 주기</p>
            {homeAssetProgress.map((item) => (
              <div key={item.label} className="progress-row">
                <span>{item.label}</span>
                <b style={{ width: item.ratio }} />
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="market-layout">
        <article className="market-section">
          <div className="section-head section-head--tight">
            <h3>인기 중고 매물</h3>
          </div>
          <div className="listing-grid">
            {homePopularListings.map((listing) => (
              <article key={listing.id} className="listing-card">
                <span className="listing-card__badge">{listing.badge}</span>
                <div className={`listing-card__thumb ${listing.image}`} />
                <h4>{listing.name}</h4>
                <p>{listing.year}</p>
                <strong>{listing.price}</strong>
                <Link to={`/listings/${listing.id}`} className="listing-card__button">
                  판매자 상담
                </Link>
              </article>
            ))}
          </div>
        </article>

        <aside className="nearby-section">
          <div className="section-head section-head--tight">
            <h3>지역별 매물 추천</h3>
          </div>
          <div className="nearby-map">
            {homeMapPrices.map((item) => (
              <span key={item.className} className={`map-price ${item.className}`}>
                {item.price}
              </span>
            ))}
          </div>
          <Link to="/listings" className="nearby-section__link">
            지역별 매물 보기
          </Link>
        </aside>
      </section>

      <section className="market-section market-section--mobile">
        <div className="section-head">
          <h3>빠른 이동</h3>
          <Link to="/listings">더보기</Link>
        </div>
        <div className="home-hero__actions">
          <Link to="/listings" className="home-btn home-btn--accent">
            매물 바로 보기
          </Link>
          <Link to="/asset-care" className="home-btn home-btn--line">
            자산 관리 시작
          </Link>
        </div>
      </section>
    </section>
  );
}
