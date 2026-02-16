import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRouter from "./router";
import ScrollToTop from "./ScrollToTop";
import Loader from "./components/common/Loader";
import { useLocation } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // you can adjust duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isSuccessPage = location.pathname === "/success";

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <>
          <ScrollToTop />
          {!isSuccessPage && <Header />}
          <AppRouter />
          {!isSuccessPage && <Footer />}
        </>
      )}
    </>
  );
}

export default App;
