import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Head from "next/head";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  const photos = [
    {
      src: "/photo/20240111-IMG_9907.jpg",
      title: "Studio Session",
      date: "11 Janvier 2024",
      description: "Création musicale en studio - L'art de la production",
      location: "Studio d'enregistrement"
    },
    {
      src: "/photo/20240106-IMG_9743.jpg",
      title: "Street Portrait",
      date: "06 Janvier 2024",
      description: "Portrait urbain - L'authenticité dans la rue",
      location: "Environnement urbain"
    },
    {
      src: "/photo/20240318-IMG_0949.jpg",
      title: "Urban Lifestyle",
      date: "18 Mars 2024",
      description: "Lifestyle urbain - La culture de la rue",
      location: "Espace public"
    },
    {
      src: "/photo/20231029-IMG_8587.jpg",
      title: "Session Octobre",
      date: "29 Octobre 2023",
      description: "Capture artistique - L'essence du moment",
      location: "Extérieur"
    },
    {
      src: "/photo/20240106-IMG_9753.jpg",
      title: "Street Session",
      date: "06 Janvier 2024",
      description: "Ambiance urbaine - La rue comme toile de fond",
      location: "Environnement urbain"
    },
    {
      src: "/photo/20240107-IMG_9789.jpg",
      title: "Urban Vibes",
      date: "07 Janvier 2024",
      description: "L'énergie de la ville capturée",
      location: "Environnement urbain"
    },
    {
      src: "/photo/IMG_8396.JPG",
      title: "Artistic Shot",
      date: "2023",
      description: "Capture artistique - Vision créative",
      location: "Studio"
    },
    {
      src: "/photo/IMG_8400.JPG",
      title: "Creative Portrait",
      date: "2023",
      description: "Portrait créatif - L'art du cadrage",
      location: "Studio"
    }
  ];

  return (
    <>
      <Head>
        <title>{t("portfolio.metaTitle")}</title>
        <meta name="description" content={t("portfolio.metaDesc")} />
      </Head>

      <div className="w-screen h-screen bg-tropical-dark overflow-hidden relative">
        {/* Background orbs */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="tropical-orb tropical-orb-cyan w-[400px] h-[400px] -top-48 -right-48 opacity-30" />
          <div className="tropical-orb tropical-orb-magenta w-[300px] h-[300px] bottom-0 -left-48 opacity-30" />
        </div>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50 p-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-lg font-bold text-gradient-tropical hover:opacity-80 transition">
              DeuxyProd
            </Link>
            <div className="flex items-center gap-4">
              <div className="text-sm font-light text-white">
                <span className="text-2xl font-bold text-tropical-cyan">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="text-gray-600 mx-1">/</span>
                <span className="text-gray-600">{String(photos.length).padStart(2, '0')}</span>
              </div>
              <Link href="/galerie" className="btn-neon btn-neon-cyan text-[10px] px-3 py-1">
                {t("portfolio.gallery")}
              </Link>
            </div>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Keyboard, Mousewheel]}
          effect="fade"
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          speed={800}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-full"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full flex items-center justify-center bg-tropical-dark">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-dark/90 via-transparent to-tropical-dark/40 pointer-events-none" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
                  <div className="max-w-3xl">
                    <div className="text-[10px] uppercase tracking-widest text-tropical-cyan/60 mb-2">
                      {photo.date}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 glow-text-cyan">
                      {photo.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-1">{photo.description}</p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-wide">
                      📍 {photo.location}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <button className="swiper-button-prev-custom absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 text-gray-400 hover:text-tropical-cyan transition group p-2">
          <svg className="w-8 h-8 md:w-10 md:h-10 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="swiper-button-next-custom absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 text-gray-400 hover:text-tropical-cyan transition group p-2">
          <svg className="w-8 h-8 md:w-10 md:h-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Instructions */}
        <div className="absolute bottom-4 right-4 z-50 text-gray-600 text-[10px]">
          <span>{t("portfolio.navigate")}</span>
          <span className="mx-1">•</span>
          <span>{t("portfolio.wheel")}</span>
        </div>
      </div>
    </>
  );
}
