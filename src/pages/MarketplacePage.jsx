import { Link } from "react-router-dom";

const sampleListings = [
  { id: "dk5510", name: "대동 트랙터 DK5510", price: "28,500,000원", distance: "3.2km", state: "A급" },
  { id: "yh6115", name: "얀마 콤바인 YH6115", price: "42,000,000원", distance: "5.8km", state: "정비완료" },
  { id: "lr50", name: "LS 이앙기 LR50", price: "9,800,000원", distance: "8.6km", state: "실매물 인증" },
  { id: "kbt75", name: "구보다 트랙터 KBT75", price: "45,000,000원", distance: "6.1km", state: "무사고" },
];

export function MarketplacePage() {
  return (
    <section className="marketplace-page">
      <div className="section-head">
        <h2>내 주변 매물</h2>
        <p>GPS 기반 거리순 정렬 (POST 통신 기준)</p>
      </div>
      <div className="marketplace-chip-row">
        <button type="button" className="chip active">
          거리순
        </button>
        <button type="button" className="chip">
          가격순
        </button>
        <button type="button" className="chip">
          사용시간순
        </button>
      </div>

      <div className="marketplace-grid">
        {sampleListings.map((listing, index) => (
          <article key={listing.id} className="marketplace-card">
            <div className={`marketplace-card__thumb type-${(index % 4) + 1}`} />
            <div>
              <h3>{listing.name}</h3>
              <p>{listing.state} · {listing.distance}</p>
            </div>
            <div className="marketplace-card__meta">
              <strong>{listing.price}</strong>
              <Link to={`/listings/${listing.id}`}>상세 보기</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
