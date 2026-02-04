import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRouter from "./router";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
