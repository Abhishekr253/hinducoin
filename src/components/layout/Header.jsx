import React, { useState } from "react";
import { Copy, Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { label, path } from "framer-motion/client";

/* ------------------ NAV DATA ------------------ */

const navItems = [
  { label: "Citizenship", path: "/citizenship" },
  { label: "Explore", path: "/explore" },
  { label: "NFTs & Offerings", path: "/nfts" },
  { label: "Games & Downloads ", path: "/downloads" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Legal", path: "/legal" },
];

const sanatanItems = [
  { label: "Foundations", path: "/sanatan/foundations" },
  { label: "History & Heritage", path: "/sanatan/history" },
  { label: "Festivals & Calendar", path: "/sanatan/festivals" },
  { label: "Deities & Symbols", path: "/sanatan/deities" },
  { label: "Glossary", path: "/sanatan/glossary" },
];

const dharmaverseItems = [
  { label: "Overview", path: "/dharmaverse/overview" },
  { label: "Development", path: "/dharmaverse/development" },
  { label: "Festivals – Living World", path: "/dharmaverse/festivals" },
  { label: "Temple Complex", path: "/dharmaverse/temple" },
  { label: "Facilities & Zones", path: "/dharmaverse/facilities" },
  { label: "Rituals & Prayers", path: "/dharmaverse/rituals" },
  { label: "World Map / Realm Explorer", path: "/dharmaverse/world-map" },
  { label: "Codex / Lore", path: "/dharmaverse/codex" },
];

/* ------------------ COMPONENT ------------------ */

function Header() {
  const [open, setOpen] = useState(false);
  const [openSanatan, setOpenSanatan] = useState(false);
  const [openDharmaverse, setOpenDharmaverse] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="mx-auto flex justify-between items-center px-6 py-4">
          {/* LOGO */}
          <NavLink to="/" className="text-white font-medium tracking-wide">
            The Hindu Coin
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {/* SANATAN DROPDOWN */}
            <div className="relative group">
              <NavLink
                to="/sanatan-hub"
                className="flex items-center gap-1 text-white hover:underline underline-offset-8"
              >
                Sanatan Dharma Hub
                <ChevronDown size={16} className="mt-[2px]" />
              </NavLink>

              {/* Hover bridge container */}
              <div
                className="
      absolute left-0 top-full pt-3 w-64
      opacity-0 invisible
      translate-y-3 scale-95
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      group-hover:scale-100
      transition-all duration-300 ease-out
    "
              >
                <div
                  className="
        bg-[#050B1A]/95 backdrop-blur-xl
        border border-[#D4AF37]/20
        rounded-xl shadow-xl
        overflow-hidden
      "
                >
                  {sanatanItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className="
            block px-5 py-3
            text-white/80
            hover:text-white
            hover:bg-white/5
            transition
          "
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* DHARMAVERSE DROPDOWN */}
            <div className="relative group">
              <NavLink
                to="/dharmaverse"
                className="flex items-center gap-1 text-white hover:underline underline-offset-8"
              >
                Dharmaverse Hub
                <ChevronDown size={16} className="mt-[2px]" />
              </NavLink>

              {/* Hover bridge container */}
              <div
                className="
      absolute left-0 top-full pt-3 w-72
      opacity-0 invisible
      translate-y-3 scale-95
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      group-hover:scale-100
      transition-all duration-300 ease-out
    "
              >
                <div
                  className="
        bg-[#050B1A]/95 backdrop-blur-xl
        border border-[#D4AF37]/20
        rounded-xl shadow-xl
        overflow-hidden
      "
                >
                  {dharmaverseItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className="
            block px-5 py-3
            text-white/80
            hover:text-white
            hover:bg-white/5
            transition
          "
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* STANDARD LINKS */}
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className="text-white hover:underline underline-offset-8 transition"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText("0xYOUR_CONTRACT_ADDRESS")
              }
              className="p-2 rounded-full border border-[#D4AF37]/40 bg-white/5 hover:shadow-[0_0_18px_rgba(212,175,55,0.45)] transition"
            >
              <Copy size={16} />
            </button>

            {/* <NavLink
              to="/buy"
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] text-[#1A1A1A] font-semibold shadow"
            >
              Buy Hindu Coin
            </NavLink> */}

            <NavLink
              to="/citizenship"
              className="px-4 py-1.5 rounded-full bg-blue-800/30 border border-blue-400/30 text-white"
            >
              Become a Citizen
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50
        bg-[#050B1A] backdrop-blur-xl
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-5 border-b border-[#D4AF37]/20">
          <span className="text-white font-semibold">The Hindu Coin</span>
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6 text-sm">
          {/* SANATAN MOBILE */}
          <div>
            <div className="flex items-center justify-between">
              {/* TEXT = Navigate */}
              <NavLink
                to="/sanatan-hub"
                onClick={() => setOpen(false)}
                className="text-white/80"
              >
                Sanatan Dharma Hub
              </NavLink>

              {/* ICON = Toggle */}
              <button
                onClick={() => setOpenSanatan(!openSanatan)}
                className="text-white/60"
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    openSanatan ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {openSanatan && (
              <div className="mt-3 ml-4 flex flex-col gap-3">
                {sanatanItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-white/60 hover:text-white"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* DHARMAVERSE MOBILE */}
          <div>
            <div className="flex items-center justify-between">
              {/* TEXT = Navigate */}
              <NavLink
                to="/dharmaverse"
                onClick={() => setOpen(false)}
                className="text-white/80"
              >
                Dharmaverse Hub
              </NavLink>

              {/* ICON = Toggle */}
              <button
                onClick={() => setOpenDharmaverse(!openDharmaverse)}
                className="text-white/60"
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    openDharmaverse ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {openDharmaverse && (
              <div className="mt-3 ml-4 flex flex-col gap-3">
                {dharmaverseItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-white/60 hover:text-white"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;
