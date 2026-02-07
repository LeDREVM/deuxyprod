import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioFullscreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const photos = [
    {
      src: "/photo/20240111-IMG_9907.jpg",
      title: "Studio Session",
      date: "11 Janvier 2024",
      description: "Création musicale en studio - L'art de la production",
      location: "Studio d'enregistrement",
      camera: "Appareil argentique",
      tags: ["Studio", "Musique", "Production"]
    },
    {
      src: "/photo/20240106-IMG_9743.jpg",
      title: "Street Portrait",
      date: "06 Janvier 2024",
      description: "Portrait urbain - L'authenticité dans la rue",
      location: "Environnement urbain",
      camera: "Appareil argentique",
      tags: ["Portrait", "Street", "Urbain"]
    },
    {
      src: "/photo/20240318-IMG_0949.jpg",
      title: "Urban Lifestyle",
      date: "18 Mars 2024",
      description: "Lifestyle urbain - La culture de la rue",
      location: "Espace public",
      camera: "Appareil argentique",
      tags: ["Lifestyle", "Culture", "Street"]
    }
  ];

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % photos.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "i" || e.key === "I") setShowInfo(!showInfo);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isTransitioning, showInfo]);

  const currentPhoto = photos[currentIndex];

  return (
    <>
      <Head>
        <title>Portfolio Fullscreen - DeuxyProd</title>
        <meta name="description" content="Portfolio photographique DeuxyProd" />
      </Head>

      <div className="w-screen h-screen bg-black overflow-hidden relative">
        {/* Header minimaliste */}
        <header className={`absolute top-0 left-0 right-0 z-50 p-6 transition-opacity duration-300 ${showInfo ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-center text-white">
            <Link href="/" className="text-xl font-bold hover:text-gray-300 transition flex items-center group">
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              DeuxyProd
            </Link>
            
            <div className="flex items-center space-x-8">
              <div className="text-sm font-light">
                <span className="text-2xl font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-500">{String(photos.length).padStart(2, '0')}</span>
              </div>
              
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
                title="Toggle info (I)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Image principale avec transition */}
        <div className="relative w-full h-full flex items-center justify-center">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-800 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  quality={95}
                />
              </div>
            </div>
          ))}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 pointer-events-none z-20" />
        </div>

        {/* Informations de la photo */}
        <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-30 transition-all duration-500 ${
          showInfo ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Colonne gauche - Titre et description */}
              <div>
                <div className="inline-block mb-3">
                  <div className="text-xs uppercase tracking-widest text-gray-400 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                    {currentPhoto.date}
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {currentPhoto.title}
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-4 font-light">
                  {currentPhoto.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentPhoto.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Colonne droite - Métadonnées */}
              <div className="flex flex-col justify-end space-y-3 text-sm">
                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{currentPhoto.location}</span>
                </div>

                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{currentPhoto.camera}</span>
                </div>

                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>@ledrevm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Flèches */}
        <button
          onClick={goToPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 text-white hover:text-gray-300 transition group"
          disabled={isTransitioning}
        >
          <div className="p-3 hover:bg-white/10 rounded-full transition">
            <svg 
              className="w-8 h-8 md:w-10 md:h-10 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 text-white hover:text-gray-300 transition group"
          disabled={isTransitioning}
        >
          <div className="p-3 hover:bg-white/10 rounded-full transition">
            <svg 
              className="w-8 h-8 md:w-10 md:h-10 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Miniatures / Pagination */}
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          showInfo ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <div className="flex space-x-3 bg-black/50 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 h-2 bg-white'
                    : 'w-8 h-2 bg-white/30 hover:bg-white/50'
                } rounded-full`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className={`absolute bottom-6 right-6 z-40 text-white/40 text-xs transition-opacity duration-300 ${
          showInfo ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col items-end space-y-1 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
            <span>← → Navigation</span>
            <span>I Infos</span>
          </div>
        </div>
      </div>
    </>
  );
}
