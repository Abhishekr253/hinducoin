import React from "react";
import clsx from "clsx";

const baseStyles = `
  inline-flex items-center justify-center
  px-5 py-2.5 rounded-full
  text-sm font-semibold tracking-wide
  transition-all duration-300
  focus:outline-none
`;

const variants = {
  gold: `
    bg-gradient-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37]
    text-[#1A1A1A]
    shadow-[0_0_18px_rgba(212,175,55,0.45)]
    hover:shadow-[0_0_32px_rgba(212,175,55,0.65)]
    hover:-translate-y-[1px]
  `,

  blueGlass: `
    bg-blue-900/30 backdrop-blur-md
    border border-blue-400/30
    text-white
    shadow-[0_0_14px_rgba(96,165,250,0.25)]
    hover:shadow-[0_0_24px_rgba(96,165,250,0.45)]
    hover:bg-blue-800/40
    hover:-translate-y-[1px]
  `,

  whiteGold: `
    bg-white
    text-[#1A1A1A]
    border border-[#D4AF37]
    shadow-[0_0_12px_rgba(212,175,55,0.25)]
    hover:shadow-[0_0_22px_rgba(212,175,55,0.45)]
    hover:-translate-y-[1px]
  `,
};

function CTAButton({
  children,
  variant = "gold",
  className,
  as: Component = "button",
  ...props
}) {
  return (
    <Component
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default CTAButton;
