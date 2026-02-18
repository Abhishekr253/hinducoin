import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRouter from "./router";
import ScrollToTop from "./ScrollToTop";
import Loader from "./components/common/Loader";
import { useLocation } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader immediately on route change
    setLoading(true);

    // Hide loader after next tick (when route component is rendered)
    const timeout = setTimeout(() => setLoading(false), 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const isSuccessPage = location.pathname.startsWith("/success");

  return (
    <>
    <ScrollToTop />
      {loading && <Loader />}

      {!loading && (
        <>
          
          {!isSuccessPage && <Header />}
          <AppRouter />
          {!isSuccessPage && <Footer />}
        </>
      )}
    </>
  );
}

export default App;
