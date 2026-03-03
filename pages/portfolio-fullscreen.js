import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { photos as allPhotos } from "../data/photos";

export default function PortfolioFullscreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const { t } = useLanguage();

  // Map photos to minimal fields needed for display
  const photos = allPhotos.map(({ src, title, date, description, location, camera, tags }) => ({
    src,
    title,
    date,
    description,
    location,
    camera,
    tags
  }));

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
        <title>{t("fullscreen.metaTitle")}</title>
        <meta name="description" content={t("fullscreen.metaDesc")} />
      </Head>

      <div className="relative w-screen h-screen overflow-hidden bg-tropical-dark">
        {/* Header */}
        <header className={`absolute top-0 left-0 right-0 z-50 p-5 transition-opacity duration-300 ${showInfo ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-lg font-bold transition text-gradient-tropical hover:opacity-80 group">
              <svg className="w-4 h-4 mr-2 transition-transform transform text-tropical-cyan group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              DeuxyProd
            </Link>

            <div className="flex items-center gap-4">
              <div className="text-sm">
                <span className="text-xl font-bold text-tropical-cyan">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="mx-1 text-gray-600">/</span>
                <span className="text-gray-600">{String(photos.length).padStart(2, '0')}</span>
              </div>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="p-1.5 hover:bg-white/5 rounded-lg transition text-gray-400 hover:text-tropical-cyan"
                title="Toggle info (I)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Images */}
        <div className="relative flex items-center justify-center w-full h-full">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-800 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="relative flex items-center justify-center w-full h-full">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </div>
          ))}

          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-tropical-dark/90 via-transparent to-tropical-dark/50" />
        </div>

        {/* Info Panel */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white z-30 transition-all duration-500 ${
          showInfo ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <div className="grid max-w-5xl gap-6 mx-auto md:grid-cols-2">
            <div>
              <div className="inline-block mb-2">
                <span className="text-[10px] uppercase tracking-widest text-tropical-cyan/60 bg-tropical-cyan/5 px-2.5 py-1 rounded-full border border-tropical-cyan/10">
                  {currentPhoto.date}
                </span>
              </div>
              <h2 className="mb-2 text-3xl font-bold md:text-4xl glow-text-cyan">{currentPhoto.title}</h2>
              <p className="mb-3 text-sm text-gray-400">{currentPhoto.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {currentPhoto.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] px-2.5 py-1 border border-tropical-cyan/10 rounded-full text-tropical-cyan/50">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">📍 {currentPhoto.location}</div>
              <div className="flex items-center gap-2">📷 {currentPhoto.camera}</div>
              <div className="flex items-center gap-2">👤 @ledrevm</div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute z-40 p-2 text-gray-500 transition -translate-y-1/2 left-3 md:left-6 top-1/2 hover:text-tropical-cyan group"
          disabled={isTransitioning}
        >
          <svg className="w-8 h-8 transition-transform transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute z-40 p-2 text-gray-500 transition -translate-y-1/2 right-3 md:right-6 top-1/2 hover:text-tropical-cyan group"
          disabled={isTransitioning}
        >
          <svg className="w-8 h-8 transition-transform transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination dots */}
        <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          showInfo ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <div className="flex gap-2 px-3 py-2 border rounded-full bg-tropical-dark/60 backdrop-blur-md border-tropical-cyan/10">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-1.5 bg-tropical-cyan shadow-glow-cyan'
                    : 'w-5 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className={`absolute bottom-4 right-4 z-40 text-[10px] text-gray-600 transition-opacity duration-300 ${
          showInfo ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-tropical-dark/40 backdrop-blur-sm px-2 py-1.5 rounded-lg space-y-0.5">
            <div>← → {t("fullscreen.navigation")}</div>
            <div>I {t("fullscreen.info")}</div>
          </div>
        </div>
      </div>
    </>
  );
}
