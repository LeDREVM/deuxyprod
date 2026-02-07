import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLanguage } from "../context/LanguageContext";

export default function PortfolioNav() {
  const router = useRouter();
  const { t } = useLanguage();

  const views = [
    {
      href: "/portfolio",
      label: t("portfolioNav.slides"),
      icon: "🎞️",
      desc: t("portfolioNav.slidesDesc"),
      color: "cyan",
    },
    {
      href: "/portfolio-fullscreen",
      label: t("portfolioNav.fullscreen"),
      icon: "🖥️",
      desc: t("portfolioNav.fullscreenDesc"),
      color: "magenta",
    },
    {
      href: "/galerie",
      label: t("portfolioNav.grid"),
      icon: "🖼️",
      desc: t("portfolioNav.gridDesc"),
      color: "lime",
    },
    {
      href: "/slideshow",
      label: t("portfolioNav.slideshow"),
      icon: "▶️",
      desc: t("portfolioNav.slideshowDesc"),
      color: "purple",
    },
  ];

  const colorClasses = {
    cyan: "border-tropical-cyan/20 hover:border-tropical-cyan/50 hover:shadow-glow-cyan text-tropical-cyan",
    magenta: "border-tropical-magenta/20 hover:border-tropical-magenta/50 hover:shadow-glow-magenta text-tropical-magenta",
    lime: "border-tropical-lime/20 hover:border-tropical-lime/50 hover:shadow-glow-lime text-tropical-lime",
    purple: "border-tropical-purple/20 hover:border-tropical-purple/50 hover:shadow-glow-purple text-tropical-purple",
  };

  const activeClasses = {
    cyan: "border-tropical-cyan/50 bg-tropical-cyan/10 shadow-glow-cyan",
    magenta: "border-tropical-magenta/50 bg-tropical-magenta/10 shadow-glow-magenta",
    lime: "border-tropical-lime/50 bg-tropical-lime/10 shadow-glow-lime",
    purple: "border-tropical-purple/50 bg-tropical-purple/10 shadow-glow-purple",
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
      {views.map((view) => {
        const isActive = router.pathname === view.href;
        return (
          <Link
            key={view.href}
            href={view.href}
            className={`glass-card p-4 text-center transition-all duration-300 border ${
              isActive
                ? activeClasses[view.color]
                : colorClasses[view.color]
            }`}
          >
            <span className="text-2xl mb-2 block">{view.icon}</span>
            <h3 className={`text-sm font-bold mb-0.5 ${isActive ? "" : "text-white"}`}>
              {view.label}
            </h3>
            <p className="text-[10px] text-gray-500">{view.desc}</p>
          </Link>
        );
      })}
    </div>
  );
}
