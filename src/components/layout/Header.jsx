import { Link, NavLink } from "react-router-dom";

const menus = [
  { to: "/home", label: "홈" },
  { to: "/listings", label: "매물찾기" },
  { to: "/asset-care", label: "자산관리" },
  { to: "/community", label: "커뮤니티" },
];

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/home" className="header__logo">
          Daitnong
        </Link>
        <nav className="header__menu" aria-label="주요 메뉴">
          {menus.map((menu) => (
            <NavLink key={menu.to} to={menu.to} className={({ isActive }) => (isActive ? "header__menu-link active" : "header__menu-link")}>
              {menu.label}
            </NavLink>
          ))}
        </nav>
        <div className="header__icons" aria-label="유틸 메뉴">
          <button type="button" aria-label="검색">
            검색
          </button>
          <button type="button" aria-label="알림">
            알림
          </button>
          <button type="button" aria-label="내 정보">
            MY
          </button>
        </div>
      </div>
    </header>
  );
}
