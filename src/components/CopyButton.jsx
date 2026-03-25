import { useState } from "react";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const contract =
    "HNDUx7y8z9A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6";

  const handleCopy = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 text-sm transition"
    >
      <span>📋</span>
      <span className="font-mono text-xs">
        {copied
          ? "Copied!"
          : `${contract.slice(0, 6)}...${contract.slice(-4)}`}
      </span>
    </button>
  );
};

export default CopyButton;