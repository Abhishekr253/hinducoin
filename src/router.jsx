import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SanatanHero from "./Pages/SanatanDharmaHub ";
import Explore from "./Pages/Explore";
import SanatanFoundations from "./components/sanatan/SanatanFoundations";
import HistoryHeritage from "./components/sanatan/HistoryHeritage";
import FestivalsCalendar from "./components/sanatan/FestivalsCalendar";
import DeitiesSymbols from "./components/sanatan/DeitiesSymbols";
import DharmaverseHub from "./Pages/DharmaverseHub";
import DharmaverseOverview from "./components/dharmaverse/Overview";
import FestivalsLivingWorld from "./components/dharmaverse/FestivalsLivingWorld";
import TempleComplex from "./components/dharmaverse/TempleComplex";
import FacilitiesZones from "./components/dharmaverse/FacilitiesZones";
import RitualsPrayers from "./components/dharmaverse/RitualsPrayers";
import WorldMap from "./components/dharmaverse/WorldMap";
import Codex from "./components/dharmaverse/Codex";
import Citizenship from "./Pages/Citizenship";
import DharmaverseDevelopment from "./components/dharmaverse/Development";


// future pages
// import Tokenomics from "./Pages/Tokenomics";
// import Buy from "./Pages/Buy";
// import Legal from "./Pages/Legal";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/sanatan-hub" element={<SanatanHero />} />
      <Route path="/sanatan/foundations" element={<SanatanFoundations />} />
      <Route path="/sanatan/history" element={<HistoryHeritage />} />
      <Route path="/sanatan/festivals" element={<FestivalsCalendar />} />
      <Route path="/sanatan/deities" element={<DeitiesSymbols />} />
      <Route path="/dharmaverse" element={<DharmaverseHub />} />
      <Route path="/dharmaverse/overview" element={<DharmaverseOverview />} />
      <Route path="/dharmaverse/development" element={<DharmaverseDevelopment />} />
      <Route path="/dharmaverse/festivals" element={<FestivalsLivingWorld />} />
      <Route path="/dharmaverse/temple" element={<TempleComplex />} />
      <Route path="/dharmaverse/facilities" element={<FacilitiesZones />} />
      <Route path="/dharmaverse/rituals" element={<RitualsPrayers />} />
      <Route path="/dharmaverse/world-map" element={<WorldMap />} />
      <Route path="/dharmaverse/codex" element={<Codex />} />
      <Route path="/citizenship" element={<Citizenship />} />



      {/* Future routes */}
      {/* <Route path="/tokenomics" element={<Tokenomics />} /> */}
      {/* <Route path="/buy" element={<Buy />} /> */}
      {/* <Route path="/legal" element={<Legal />} /> */}
    </Routes>
  );
}
