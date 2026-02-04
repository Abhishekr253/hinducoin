import React from "react";
import clsx from "clsx";

const baseStyles = `
  relative rounded-2xl
  bg-[#070D1F]
  border border-[#D4AF37]/30
  overflow-hidden
  transition-all duration-300
`;

const embossEffect = `
  before:absolute before:inset-0
  before:rounded-2xl
  before:bg-gradient-to-br
  before:from-[#D4AF37]/15
  before:via-transparent
  before:to-transparent
  before:pointer-events-none
`;

const hoverEffect = `
  hover:-translate-y-[2px]
  hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]
  hover:border-[#D4AF37]/50
`;

function LuxuryCard({ children, className }) {
  return (
    <div
      className={clsx(baseStyles, embossEffect, hoverEffect, className)}
    >
      {/* Inner padding wrapper */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}

export default LuxuryCard;
