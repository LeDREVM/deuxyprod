import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { photos } from "../data/photos";

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [interval, setIntervalTime] = useState(5000);
  const [showControls, setShowControls] = useState(true);
  const timerRef = useRef(null);

  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, interval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, interval]);

  useEffect(() => {
    let timeout;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === " ") { e.preventDefault(); togglePlayPause(); }
      if (e.key === "Escape") window.location.href = "/";
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isPlaying]);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  const goToSlide = (index) => setCurrentIndex(index);
  const togglePlayPause = () => setIsPlaying(!isPlaying);
  const changeSpeed = (speed) => setIntervalTime(speed);

  return (
    <>
      <Head>
        <title>Diaporama - DeuxyProd</title>
        <meta name="description" content="Diaporama automatique du portfolio DeuxyProd" />
      </Head>

      <div className="w-screen h-screen bg-tropical-dark overflow-hidden relative">
        {/* Images */}
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={photo.src}
                alt={photo.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-tropical-dark/90 via-transparent to-tropical-dark/60 pointer-events-none z-20" />

        {/* Controls & Info */}
        <div className={`absolute inset-0 z-30 transition-opacity duration-500 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-5">
            <div className="flex justify-between items-center">
              <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-tropical-cyan transition group">
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-bold text-gradient-tropical">DeuxyProd</span>
              </a>

              <div className="text-center">
                <div className="text-[10px] text-gray-600 uppercase tracking-widest">Diaporama</div>
                <div className="text-lg font-bold text-white">
                  <span className="text-tropical-cyan">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-gray-600 mx-1">/</span>
                  <span className="text-gray-600">{String(photos.length).padStart(2, '0')}</span>
                </div>
              </div>

              <div className="w-16" />
            </div>
          </div>

          {/* Photo Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-3xl">
              <div className="text-[10px] text-tropical-cyan/60 uppercase tracking-widest mb-1">{currentPhoto.date}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 glow-text-cyan">{currentPhoto.title}</h2>
              <p className="text-gray-400 text-sm mb-3">{currentPhoto.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {currentPhoto.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] px-2.5 py-1 border border-tropical-cyan/10 rounded-full text-tropical-cyan/50">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Central Controls */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2">
            <div className="glass-tropical rounded-full px-5 py-3 flex items-center gap-4 border border-tropical-cyan/10">
              <button onClick={goToPrev} className="text-gray-400 hover:text-tropical-cyan transition" title="Précédent (←)">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button onClick={togglePlayPause} className="text-white hover:text-tropical-cyan transition" title={isPlaying ? "Pause" : "Lecture"}>
                {isPlaying ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>

              <button onClick={goToNext} className="text-gray-400 hover:text-tropical-cyan transition" title="Suivant (→)">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="w-px h-5 bg-white/10" />

              {[3000, 5000, 8000].map((speed) => (
                <button
                  key={speed}
                  onClick={() => changeSpeed(speed)}
                  className={`text-[10px] px-2 py-1 rounded-full transition font-medium ${
                    interval === speed
                      ? 'bg-tropical-cyan text-tropical-dark'
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {speed / 1000}s
                </button>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="flex gap-1.5">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-1.5 bg-tropical-cyan shadow-glow-cyan'
                      : 'w-5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        {isPlaying && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/5 z-40">
            <div
              className="h-full bg-gradient-to-r from-tropical-cyan to-tropical-purple"
              style={{ width: '100%', animation: `progress ${interval}ms linear infinite` }}
            />
          </div>
        )}

        {/* Keyboard hints */}
        <div className={`absolute top-1/2 right-4 -translate-y-1/2 z-40 text-[10px] text-gray-600 transition-opacity duration-500 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-tropical-dark/60 backdrop-blur-sm px-2.5 py-3 rounded-lg space-y-1.5">
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white/5 rounded text-[9px]">←→</kbd>
              <span>Nav</span>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white/5 rounded text-[9px]">⎵</kbd>
              <span>Play</span>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white/5 rounded text-[9px]">Esc</kbd>
              <span>Quit</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    </>
  );
}
