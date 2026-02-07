import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Head from "next/head";
import Image from "next/image";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

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
    }
  ];

  return (
    <>
      <Head>
        <title>Portfolio - DeuxyProd</title>
        <meta name="description" content="Portfolio photographique DeuxyProd" />
      </Head>

      <div className="w-screen h-screen bg-black overflow-hidden relative">
        {/* Header avec compteur */}
        <div className="absolute top-0 left-0 right-0 z-50 p-8">
          <div className="flex justify-between items-center text-white">
            <a href="/" className="text-2xl font-bold hover:text-gray-300 transition">
              DeuxyProd
            </a>
            <div className="text-lg font-light">
              <span className="text-3xl font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-400">{String(photos.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Swiper Gallery */}
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
          keyboard={{
            enabled: true,
          }}
          mousewheel={{
            forceToAxis: true,
          }}
          speed={800}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-full"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full flex items-center justify-center bg-black">
                {/* Image principale */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-contain"
                    priority={index === 0}
                    quality={95}
                  />
                </div>

                {/* Overlay gradient pour le texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

                {/* Informations de la photo */}
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white z-10">
                  <div className="max-w-4xl">
                    <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                      {photo.date}
                    </div>
                    <h2 className="text-5xl font-bold mb-4">
                      {photo.title}
                    </h2>
                    <p className="text-xl text-gray-300 mb-2">
                      {photo.description}
                    </p>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                      {photo.location}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation personnalisée */}
        <button className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 transition group">
          <div className="flex items-center">
            <svg 
              className="w-12 h-12 transform group-hover:-translate-x-2 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 transition group">
          <div className="flex items-center">
            <svg 
              className="w-12 h-12 transform group-hover:translate-x-2 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Instructions de navigation */}
        <div className="absolute bottom-8 right-8 z-50 text-white text-sm opacity-50">
          <div className="flex items-center space-x-4">
            <span>← → Naviguer</span>
            <span>•</span>
            <span>Molette</span>
          </div>
        </div>

        {/* Styles personnalisés pour la pagination */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 40px !important;
            left: 50% !important;
            transform: translateX(-50%);
            width: auto !important;
          }

          .swiper-pagination-bullet-custom {
            width: 40px;
            height: 3px;
            border-radius: 0;
            background: rgba(255, 255, 255, 0.3);
            opacity: 1;
            margin: 0 8px !important;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active-custom {
            background: white;
            width: 60px;
          }

          .swiper-button-prev-custom:disabled,
          .swiper-button-next-custom:disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
        `}</style>
      </div>
    </>
  );
}
