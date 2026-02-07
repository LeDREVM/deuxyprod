import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { photos } from "../data/photos";

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [interval, setIntervalTime] = useState(5000);
  const [showControls, setShowControls] = useState(true);
  const timerRef = useRef(null);

  const currentPhoto = photos[currentIndex];

  // Gestion du diaporama automatique
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, interval);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, interval]);

  // Masquer les contrôles après inactivité
  useEffect(() => {
    let timeout;
    
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  // Navigation clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === " ") {
        e.preventDefault();
        togglePlayPause();
      }
      if (e.key === "Escape") window.location.href = "/";
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const changeSpeed = (speed) => {
    setIntervalTime(speed);
  };

  return (
    <>
      <Head>
        <title>Diaporama - DeuxyProd</title>
        <meta name="description" content="Diaporama automatique du portfolio DeuxyProd" />
      </Head>

      <div className="w-screen h-screen bg-black overflow-hidden relative">
        {/* Images avec transition */}
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none z-20" />

        {/* Contrôles et informations */}
        <div className={`absolute inset-0 z-30 transition-opacity duration-500 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-6">
            <div className="flex justify-between items-center text-white">
              <a
                href="/"
                className="flex items-center space-x-2 hover:text-gray-300 transition group"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-lg font-semibold">Retour</span>
              </a>

              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">Diaporama</div>
                <div className="text-2xl font-bold">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
                </div>
              </div>

              <div className="w-24"></div>
            </div>
          </div>

          {/* Informations de la photo */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <div className="max-w-4xl">
              <div className="text-sm text-gray-400 mb-2">{currentPhoto.date}</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                {currentPhoto.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-4">
                {currentPhoto.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {currentPhoto.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contrôles centraux */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
            <div className="bg-black/70 backdrop-blur-md rounded-full px-6 py-4 flex items-center space-x-6 border border-white/10">
              {/* Précédent */}
              <button
                onClick={goToPrev}
                className="text-white hover:text-gray-300 transition"
                title="Précédent (←)"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Play/Pause */}
              <button
                onClick={togglePlayPause}
                className="text-white hover:text-gray-300 transition"
                title={isPlaying ? "Pause (Espace)" : "Lecture (Espace)"}
              >
                {isPlaying ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>

              {/* Suivant */}
              <button
                onClick={goToNext}
                className="text-white hover:text-gray-300 transition"
                title="Suivant (→)"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Séparateur */}
              <div className="w-px h-6 bg-white/20"></div>

              {/* Vitesse */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => changeSpeed(3000)}
                  className={`text-xs px-2 py-1 rounded transition ${
                    interval === 3000 ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                  }`}
                  title="Rapide"
                >
                  3s
                </button>
                <button
                  onClick={() => changeSpeed(5000)}
                  className={`text-xs px-2 py-1 rounded transition ${
                    interval === 5000 ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                  }`}
                  title="Normal"
                >
                  5s
                </button>
                <button
                  onClick={() => changeSpeed(8000)}
                  className={`text-xs px-2 py-1 rounded transition ${
                    interval === 8000 ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                  }`}
                  title="Lent"
                >
                  8s
                </button>
              </div>
            </div>
          </div>

          {/* Miniatures */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex space-x-2">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 h-2 bg-white'
                      : 'w-8 h-2 bg-white/30 hover:bg-white/50'
                  } rounded-full`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Barre de progression */}
        {isPlaying && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-40">
            <div
              className="h-full bg-white transition-all ease-linear"
              style={{
                width: '100%',
                animation: `progress ${interval}ms linear infinite`
              }}
            />
          </div>
        )}

        {/* Instructions */}
        <div className={`absolute top-1/2 right-6 -translate-y-1/2 z-40 text-white/40 text-xs transition-opacity duration-500 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-black/30 backdrop-blur-sm px-3 py-4 rounded-lg space-y-2">
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs">←</kbd>
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs">→</kbd>
              <span>Navigation</span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Espace</kbd>
              <span>Play/Pause</span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Esc</kbd>
              <span>Quitter</span>
            </div>
          </div>
        </div>

        {/* Animation de la barre de progression */}
        <style jsx>{`
          @keyframes progress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}
