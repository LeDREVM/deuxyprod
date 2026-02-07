import React, { useState, useRef } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { useLanguage } from "../context/LanguageContext";

export default function Galerie() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();
  const videoRef = useRef(null);

  const media = [
    // === PHOTOS ===
    {
      id: 1,
      type: "photo",
      src: "/photo/20240111-IMG_9907.jpg",
      title: "Studio Session",
      date: "11 Janvier 2024",
      description: "Création musicale en studio - L'art de la production",
      location: "Studio d'enregistrement",
      category: "studio",
      tags: ["Studio", "Musique", "Production"]
    },
    {
      id: 2,
      type: "photo",
      src: "/photo/20240106-IMG_9743.jpg",
      title: "Street Portrait",
      date: "06 Janvier 2024",
      description: "Portrait urbain - L'authenticité dans la rue",
      location: "Environnement urbain",
      category: "portrait",
      tags: ["Portrait", "Street", "Urbain"]
    },
    {
      id: 3,
      type: "photo",
      src: "/photo/20240318-IMG_0949.jpg",
      title: "Urban Lifestyle",
      date: "18 Mars 2024",
      description: "Lifestyle urbain - La culture de la rue",
      location: "Espace public",
      category: "lifestyle",
      tags: ["Lifestyle", "Culture", "Street"]
    },
    {
      id: 4,
      type: "photo",
      src: "/photo/20231029-IMG_8587.jpg",
      title: "Session Octobre",
      date: "29 Octobre 2023",
      description: "Capture artistique - L'essence du moment",
      location: "Extérieur",
      category: "lifestyle",
      tags: ["Lifestyle", "Artistique", "Automne"]
    },
    {
      id: 5,
      type: "photo",
      src: "/photo/20240106-IMG_9753.jpg",
      title: "Street Session",
      date: "06 Janvier 2024",
      description: "Ambiance urbaine - La rue comme toile de fond",
      location: "Environnement urbain",
      category: "portrait",
      tags: ["Portrait", "Street", "Urbain"]
    },
    {
      id: 6,
      type: "photo",
      src: "/photo/20240107-IMG_9789.jpg",
      title: "Urban Vibes",
      date: "07 Janvier 2024",
      description: "L'énergie de la ville capturée",
      location: "Environnement urbain",
      category: "portrait",
      tags: ["Portrait", "Urban", "Vibes"]
    },
    {
      id: 7,
      type: "photo",
      src: "/photo/IMG_8396.JPG",
      title: "Artistic Shot",
      date: "2023",
      description: "Capture artistique - Vision créative",
      location: "Studio",
      category: "studio",
      tags: ["Studio", "Artistique", "Création"]
    },
    {
      id: 8,
      type: "photo",
      src: "/photo/IMG_8400.JPG",
      title: "Creative Portrait",
      date: "2023",
      description: "Portrait créatif - L'art du cadrage",
      location: "Studio",
      category: "studio",
      tags: ["Studio", "Portrait", "Créatif"]
    },
    // === VIDÉOS ===
    {
      id: 9,
      type: "video",
      src: "/video/video_1_7f880a3118bf43d9b7bd5f71705749ba.mp4",
      title: "Behind The Scenes #1",
      date: "2024",
      description: "Coulisses de production - Immersion créative",
      location: "Studio",
      category: "video",
      tags: ["Vidéo", "BTS", "Production"]
    },
    {
      id: 10,
      type: "video",
      src: "/video/video_1_958cfa975feb4e529520339adeec186b.mp4",
      title: "Behind The Scenes #2",
      date: "2024",
      description: "Processus créatif - L'art en mouvement",
      location: "Studio",
      category: "video",
      tags: ["Vidéo", "BTS", "Production"]
    },
    {
      id: 11,
      type: "video",
      src: "/video/video_1_a47edae80c094eb98f204890c674100d.mp4",
      title: "Behind The Scenes #3",
      date: "2024",
      description: "Capturer l'instant - L'énergie du live",
      location: "Extérieur",
      category: "video",
      tags: ["Vidéo", "BTS", "Live"]
    },
    {
      id: 12,
      type: "video",
      src: "/video/PURPLEHAZEBEATZ Visual effect by @LEDREVM.Mp4",
      title: "PURPLEHAZEBEATZ - Visual Effect",
      date: "2024",
      description: "Effets visuels par @LEDREVM - Purple Haze Beatz",
      location: "Studio",
      category: "video",
      tags: ["Vidéo", "Visual", "PURPLEHAZEBEATZ"]
    },
  ];

  const categories = [
    { id: "all", label: t("galerie.filterAll"), icon: "✨" },
    { id: "studio", label: t("galerie.filterStudio"), icon: "🎵" },
    { id: "portrait", label: t("galerie.filterPortrait"), icon: "👤" },
    { id: "lifestyle", label: t("galerie.filterLifestyle"), icon: "🌆" },
    { id: "video", label: t("galerie.filterVideo"), icon: "🎬" },
  ];

  const filteredMedia = filter === "all"
    ? media
    : media.filter(item => item.category === filter);

  const openLightbox = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction) => {
    const currentIndex = media.findIndex(p => p.id === selectedItem.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % media.length;
    } else {
      newIndex = (currentIndex - 1 + media.length) % media.length;
    }
    setSelectedItem(media[newIndex]);
  };

  return (
    <Layout title={t("galerie.title")}>
      <Head>
        <title>{t("galerie.metaTitle")}</title>
        <meta name="description" content={t("galerie.metaDesc")} />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-tropical">{t("galerie.title")}</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            {t("galerie.subtitle")}
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center mb-10">
          <div className="glass-card inline-flex p-1 gap-1 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-tropical-cyan/20 text-tropical-cyan shadow-glow-cyan'
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer glass-card p-0 border-tropical-cyan/5"
              onClick={() => openLightbox(item)}
            >
              <div className={`relative ${item.type === "video" ? "aspect-video" : "aspect-[4/5]"} overflow-hidden rounded-2xl`}>
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-dark/95 via-tropical-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-white text-xl font-bold mb-1 glow-text-cyan">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs mb-2">{item.description}</p>
                  <div className="flex items-center text-tropical-cyan/60 text-[10px]">
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Play icon for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-tropical-dark/60 backdrop-blur-sm flex items-center justify-center border border-tropical-cyan/20">
                      <svg className="w-6 h-6 text-tropical-cyan ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Badge */}
              <div className={`absolute top-3 right-3 backdrop-blur-md text-[10px] px-2.5 py-1 rounded-full border ${
                item.type === "video"
                  ? "bg-tropical-magenta/20 text-tropical-magenta border-tropical-magenta/20"
                  : "bg-tropical-dark/80 text-tropical-cyan border-tropical-cyan/20"
              }`}>
                {item.type === "video" ? "🎬 vidéo" : item.category}
              </div>
            </div>
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">{t("galerie.noPhotos")}</p>
          </div>
        )}

        {/* Liens vers autres vues */}
        <div className="flex justify-center gap-3 mb-12">
          <a href="/portfolio" className="btn-neon btn-neon-cyan text-xs px-5 py-2">
            {t("galerie.viewSlides")}
          </a>
          <a href="/portfolio-fullscreen" className="btn-neon btn-neon-purple text-xs px-5 py-2">
            {t("galerie.viewFullscreen")}
          </a>
          <a href="/creations" className="btn-neon btn-neon-magenta text-xs px-5 py-2">
            {t("galerie.viewCreations")}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-tropical-dark/95 lightbox-backdrop z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-gray-400 hover:text-tropical-cyan transition z-50 p-2"
            onClick={closeLightbox}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-tropical-cyan transition z-50 p-2"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-tropical-cyan transition z-50 p-2"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="max-w-6xl w-full mx-auto px-6 flex flex-col md:flex-row items-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
              {selectedItem.type === "video" ? (
                <video
                  ref={videoRef}
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-full max-h-full rounded-lg"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}
            </div>

            <div className="w-full md:w-72 text-white space-y-4">
              <div className="text-xs text-tropical-cyan/60 uppercase tracking-widest">{selectedItem.date}</div>
              <h2 className="text-2xl font-bold glow-text-cyan">{selectedItem.title}</h2>
              <p className="text-gray-400 text-sm">{selectedItem.description}</p>

              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span>📍</span> {selectedItem.location}
                </div>
                <div className="flex items-center gap-2">
                  <span>{selectedItem.type === "video" ? "🎬" : "🏷️"}</span> {selectedItem.category}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedItem.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 border border-tropical-cyan/15 rounded-full text-tropical-cyan/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
