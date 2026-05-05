import { Link, useParams } from "react-router-dom";
import { listingDetailFactItems, listingDetailSpecs, listingSimilarItems } from "../mock/listingDetailMock";

export function ListingDetailPage() {
  const { listingId } = useParams();
  const listingCode = listingId?.toUpperCase() ?? "KBT75";

  return (
    <section className="listing-detail-page">
      <div className="detail-breadcrumb">
        <Link to="/home">홈</Link>
        <span>›</span>
        <Link to="/listings">매물찾기</Link>
        <span>›</span>
        <strong>{listingCode}</strong>
      </div>

      <div className="detail-top">
        <article className="detail-gallery">
          <div className="detail-gallery__main">
            <button type="button" aria-label="이전 이미지" className="gallery-nav prev">
              ‹
            </button>
            <button type="button" aria-label="다음 이미지" className="gallery-nav next">
              ›
            </button>
          </div>
          <div className="detail-gallery__thumbs">
            <button type="button" className="active thumb type-1" aria-label="대표 이미지" />
            <button type="button" className="thumb type-2" aria-label="보조 이미지 1" />
            <button type="button" className="thumb type-3" aria-label="보조 이미지 2" />
            <button type="button" className="thumb type-4" aria-label="보조 이미지 3" />
            <button type="button" className="thumb type-5" aria-label="보조 이미지 4" />
          </div>
        </article>

        <aside className="detail-summary">
          <h2>구보다 트랙터 KBT75 (2021년식)</h2>
          <strong>₩45,000,000</strong>
          <p className="detail-summary__meta">기본 내용 가격 정보</p>
          <ul className="detail-summary__facts">
            {listingDetailFactItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="detail-seller">
            <h3>판매자 정보</h3>
            <p>정영진 | 상주 농기계 전문딜러</p>
            <div className="detail-seller__actions">
              <button type="button">전화 문의</button>
              <button type="button">채팅 문의</button>
              <button type="button">문의 저장</button>
            </div>
          </div>
        </aside>
      </div>

      <article className="detail-spec">
        <h3>상세 제원 및 설명</h3>
        <dl className="detail-spec__grid">
          {listingDetailSpecs.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p>
          작업 효율이 높은 모델로 최근 엔진오일과 필터 교체를 완료했습니다. 시운전
          가능하며, 실제 사용 환경에서 상태 확인 후 거래를 권장합니다.
        </p>
      </article>

      <article className="detail-similar">
        <div className="section-head">
          <h3>비슷한 매물 더보기</h3>
          <Link to="/listings">목록 이동</Link>
        </div>
        <div className="detail-similar__list">
          {listingSimilarItems.map((item, index) => (
            <Link key={item.id} to={`/listings/${item.id}`} className="similar-card">
              <div className={`similar-card__thumb type-${index + 1}`} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
}
