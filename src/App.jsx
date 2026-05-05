import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { QuickActions } from "./components/layout/QuickActions";
import { AssetCarePage } from "./pages/AssetCarePage";
import { CommunityPage } from "./pages/CommunityPage";
import { HomePage } from "./pages/HomePage";
import { ListingDetailPage } from "./pages/ListingDetailPage";
import { MarketplacePage } from "./pages/MarketplacePage";
import { NoticePage } from "./pages/NoticePage";
import { ReportPage } from "./pages/ReportPage";
import "./styles/index.css";

function ScrollRestoration() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, search]);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/listings" element={<MarketplacePage />} />
      <Route path="/listings/:listingId" element={<ListingDetailPage />} />
      <Route path="/asset-care" element={<AssetCarePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/notices" element={<NoticePage />} />
      <Route path="/safety-report" element={<ReportPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="app-shell">
        <ScrollRestoration />
        <Header />
        <main className="app-main">
          <AppRoutes />
        </main>
        <QuickActions />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
