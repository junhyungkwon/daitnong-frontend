export function ReportPage() {
  return (
    <section className="report-page">
      <div className="section-head">
        <h2>허위매물 신고</h2>
        <p>접수 후 처리 결과를 사용자에게 피드백하는 클린 정책</p>
      </div>

      <form className="report-page__form">
        <label>
          매물 번호
          <input type="text" placeholder="예: P-202605-0012" />
        </label>
        <label>
          신고 사유
          <textarea rows={5} placeholder="허위 의심 사유를 입력해주세요." />
        </label>
        <button type="submit" className="report-page__submit">
          신고 접수하기
        </button>
      </form>
    </section>
  );
}
