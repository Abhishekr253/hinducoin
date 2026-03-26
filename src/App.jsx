import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRouter from "./router";
import ScrollToTop from "./ScrollToTop";
import Loader from "./components/common/Loader";
import { useLocation } from "react-router-dom";
import ScrollButtons from "./components/ScrollButtons";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader immediately on route change
    setLoading(true);

    // Hide loader after next tick (when route component is rendered)
    const timeout = setTimeout(() => setLoading(false), 350);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const isSuccessPage = location.pathname.startsWith("/success");
  const isGatewayPage = location.pathname === "/";
  const isHinduCoinPage = location.pathname.startsWith("/hindu-coin");

  return (
    <>
      <ScrollToTop />
      {loading && <Loader />}

      {!loading && (
        <>
        
          {!isSuccessPage && !isGatewayPage && !isHinduCoinPage && <Header />}
          <AppRouter />
          {!isSuccessPage && !isGatewayPage && !isHinduCoinPage && <Footer />}

          <ScrollButtons />
        </>
      )}
    </>
  );
}

export default App;
