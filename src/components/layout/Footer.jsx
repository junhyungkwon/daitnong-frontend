import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <strong className="footer__brand">다있농</strong>
          <div className="footer__quick">
            <Link to="/notices">고객센터</Link>
            <Link to="/community">제휴문의</Link>
            <Link to="/asset-care">내 장비 등록</Link>
          </div>
        </div>

        <div className="footer__grid">
          <section>
            <h4>Company Info</h4>
            <p>(주)다있농 | 대표: 권준형</p>
            <p>사업자등록번호: 000-00-00000</p>
            <p>통신판매업신고: 2026-서울강남-0000</p>
            <p>서울특별시 강남구 테헤란로</p>
          </section>
          <section>
            <h4>Services</h4>
            <p>중고 매물 검색</p>
            <p>내 장비 관리 비서</p>
            <p>지역별 시세 정보</p>
            <p>농업 커뮤니티</p>
          </section>
          <section>
            <h4>Support</h4>
            <p>고객센터: 1588-0000</p>
            <p>(평일 09-18시)</p>
            <p>이메일: support@daitnong.com</p>
            <button type="button" className="footer__inquiry">
              1:1 문의하기
            </button>
          </section>
          <section>
            <h4>Legal & App</h4>
            <p>
              <Link to="/notices">이용약관</Link>
            </p>
            <p>
              <Link to="/notices">개인정보처리방침</Link>
            </p>
            <p>
              <Link to="/safety-report">청소년보호정책</Link>
            </p>
            <div className="footer__apps">
              <span>App Store</span>
              <span>Google Play</span>
            </div>
          </section>
        </div>

        <p className="footer__copyright">Copyright © 2026 Daitnong Co., Ltd. All rights reserved</p>
      </div>
    </footer>
  );
}
