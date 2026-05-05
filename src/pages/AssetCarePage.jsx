const maintenanceItems = [
  { model: "DK5510", part: "엔진오일", due: "3일 후", status: "warning" },
  { model: "YH6115", part: "미션오일", due: "12일 후", status: "normal" },
  { model: "LR50", part: "에어필터", due: "오늘 교체", status: "danger" },
];

export function AssetCarePage() {
  return (
    <section className="asset-care-page">
      <div className="section-head">
        <h2>내 장비 비서</h2>
        <p>교체 이력 + 누적 가동시간 기반 맞춤 알림</p>
      </div>
      <div className="asset-care-list">
        {maintenanceItems.map((item) => (
          <article key={`${item.model}-${item.part}`} className="asset-care-card">
            <div>
              <h3>{item.model}</h3>
              <p>{item.part}</p>
            </div>
            <span className={`status-pill ${item.status}`}>{item.due}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
