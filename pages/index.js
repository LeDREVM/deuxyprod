import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const slides = [
    {
      image: "/images/directeur-artistique.jpg",
      title: "Direction Artistique",
      subtitle: "Créativité & Visibilité",
      href: "/directeur-artistique",
      color: "cyan",
    },
    {
      image: "/images/entretien-espaces-verts.jpg",
      title: "Espaces Verts & Bâtiment",
      subtitle: "Entretenir, Rénover, Sublimer",
      href: "/entretien",
      color: "lime",
    },
    {
      image: "/photo/20240106-IMG_9743.jpg",
      title: "Portfolio",
      subtitle: "Découvrez notre univers visuel",
      href: "/portfolio",
      color: "magenta",
    },
    {
      image: "/photo/20240318-IMG_0949.jpg",
      title: "Créations",
      subtitle: "Nos productions artistiques",
      href: "/creations",
      color: "purple",
    },
  ];

  const glowColors = {
    cyan: "shadow-glow-cyan border-tropical-cyan/30",
    lime: "shadow-glow-lime border-tropical-lime/30",
    magenta: "shadow-glow-magenta border-tropical-magenta/30",
    purple: "shadow-glow-purple border-tropical-purple/30",
  };

  const btnColors = {
    cyan: "btn-neon btn-neon-cyan",
    lime: "btn-neon btn-neon-lime",
    magenta: "btn-neon btn-neon-magenta",
    purple: "btn-neon btn-neon-purple",
  };

  return (
    <>
      <Head>
        <title>DeuxyProd - Créativité & Excellence</title>
        <meta name="description" content="DeuxyProd - Direction artistique, espaces verts et productions créatives" />
      </Head>

      <div className="w-screen h-screen bg-tropical-dark relative overflow-hidden">
        {/* Background orbs */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="tropical-orb tropical-orb-cyan w-[600px] h-[600px] -top-48 -right-48" />
          <div className="tropical-orb tropical-orb-magenta w-[500px] h-[500px] bottom-0 -left-48" />
        </div>

        {/* Navbar overlay */}
        <div className="absolute top-0 left-0 right-0 z-50 p-6">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link href="/" className="group flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient-tropical">DeuxyProd</span>
              <span className="w-2 h-2 rounded-full bg-tropical-cyan animate-glow-pulse" />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {slides.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="nav-link text-xs"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect="fade"
          navigation
          loop
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          speed={1200}
          className="w-full h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative flex items-center justify-center h-screen bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                {/* Dark tropical overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-dark via-tropical-dark/70 to-tropical-dark/40" />

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                  <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 font-light tracking-wide">
                      {slide.subtitle}
                    </p>
                    <Link href={slide.href}>
                      <button className={`${btnColors[slide.color]} text-sm px-6 py-2.5`}>
                        Découvrir →
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tropical-cyan/30 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce-subtle">
          <div className="flex flex-col items-center text-gray-500 text-xs">
            <span className="mb-2 uppercase tracking-widest text-[10px]">Swipe</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
