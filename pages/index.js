import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DeuxyProd - Accueil</title>
      </Head>
      <div className="w-screen h-screen">
        <Swiper
          modules={[Navigation, EffectFade]}
          effect="fade"
          navigation
          loop
          className="w-full h-full"
        >
          {/* Slide 1 - Directeur Artistique */}
          <SwiperSlide>
            <div
              className="flex items-center justify-center h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/directeur-artistique.jpg')",
              }}
            >
              <div className="text-white text-center">
                <h1 className="text-5xl font-bold mb-4">
                  Directeur Artistique
                </h1>
                <p className="text-lg mb-6">Créativité et Visibilité</p>
                <Link href="/directeur-artistique">
                  <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition">
                    Découvrir
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Entretien d'espaces verts et bâtiment */}
          <SwiperSlide>
            <div
              className="flex items-center justify-center h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/entretien-espaces-verts.jpg')",
              }}
            >
              <div className="text-white text-center">
                <h1 className="text-5xl font-bold mb-4">
                  Espaces Verts & Bâtiment
                </h1>
                <p className="text-lg mb-6">Entretenir, Rénover, Sublimer</p>
                <Link href="/entretien">
                  <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition">
                    Découvrir
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Portfolio */}
          <SwiperSlide>
            <div
              className="flex items-center justify-center h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/photo/20240106-IMG_9743.jpg')",
              }}
            >
              <div className="text-white text-center bg-black/50 p-12 rounded-lg backdrop-blur-sm">
                <h1 className="text-5xl font-bold mb-4">
                  Portfolio
                </h1>
                <p className="text-lg mb-6">Découvrez notre univers visuel</p>
                <Link href="/portfolio">
                  <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition">
                    Voir le Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
