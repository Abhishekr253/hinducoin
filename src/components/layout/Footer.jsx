import { Copy, Twitter, Github, Globe } from "lucide-react";
import { useState } from "react";
import solana from "../../assets/solana.png";

const CONTRACT_ADDRESS = "Coming Soon";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="relative w-full bg-[#05070C] text-white/80">
      {/* Top divider glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Contract */}
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/50 font-['Cormorant_Garamond']">
              Contract
            </p>

            <div className="flex items-center gap-3 text-sm">
              <span className="truncate max-w-[220px] text-white/70">
                {CONTRACT_ADDRESS}
              </span>

              <button
                onClick={handleCopy}
                className="p-2 rounded-md border border-white/10 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition"
                aria-label="Copy contract"
              >
                <Copy className="w-4 h-4" />
              </button>

              {copied && <span className="text-xs text-[#D4AF37]">Copied</span>}
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-col items-center gap-4">
            {/* Solana Badge */}
            <div
              className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-medium
  bg-gradient-to-r from-[#9945FF]/20 via-[#14F195]/20 to-[#00FFA3]/20
  border border-white/10 text-white"
            >
              <img
                src={solana}
                alt="Solana Logo"
                className="w-5 h-7 object-contain"
              />
              <span className="uppercase tracking-[0.2em]">
                Built on Solana
              </span>
            </div>

            <nav className="flex gap-6 text-sm">
              {["Tokenomics", "Buy", "Legal"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="relative text-white/70 hover:text-[#D4AF37] transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#D4AF37] hover:after:w-full after:transition-all"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="flex md:justify-end gap-4">
            {[Twitter, Github, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 rounded-full border border-white/10 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/10 text-center text-xs text-white/50 leading-relaxed">
          <p>
            Hindu Coin is a digital cultural utility token. It does not
            represent financial advice, securities, or investment guarantees.
            Participate responsibly.
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} Hindu Coin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
