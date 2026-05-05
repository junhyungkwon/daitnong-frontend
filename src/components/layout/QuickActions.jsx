import { NavLink } from "react-router-dom";

export function QuickActions() {
  return (
    <aside className="quick-actions" aria-label="빠른 메뉴">
      <NavLink to="/listings" className={({ isActive }) => (isActive ? "quick-actions__link active" : "quick-actions__link")}>
        매물
      </NavLink>
      <NavLink to="/asset-care" className={({ isActive }) => (isActive ? "quick-actions__link active" : "quick-actions__link")}>
        자산
      </NavLink>
      <NavLink to="/safety-report" className={({ isActive }) => (isActive ? "quick-actions__link alert active" : "quick-actions__link alert")}>
        신고
      </NavLink>
    </aside>
  );
}
