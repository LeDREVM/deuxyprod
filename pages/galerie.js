import React, { useState, useRef } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { useLanguage } from "../context/LanguageContext";

import { photos } from "../data/photos";
import { artists, playlists } from "../data/videos";

export default function Galerie() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();
  const videoRef = useRef(null);

  const media = [
    // === PHOTOS ===
    ...photos.filter(Boolean).map(p => ({
      ...p,
      type: "photo",
    })),

    // === VIDÉOS ===
    ...artists.flatMap(a =>
      a.videos.map(v => ({
        id: v.id,
        type: "video",
        src: `/video/${v.id}.mp4`, // if local videos follow this pattern, adjust as needed
        title: v.title,
        date: "2024",
        description: "",
        location: "",
        category: "video",
        tags: ["Vidéo"],
      }))
    ),
    ...playlists.flatMap(pl =>
      pl.videos.map(v => ({
        id: v.id,
        type: "video",
        src: `/video/${v.id}.mp4`,
        title: v.title,
        date: "",
        description: v.description || "",
        location: "",
        category: "video",
        tags: ["Vidéo"],
      }))
    ),
    {
      id: "manual-1",
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
      id: "manual-2",
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
      id: "manual-3",
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
      // renamed file to avoid spaces/case sensitivity issues
      src: "/video/purplehazebeatz.mp4",
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

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-gradient-tropical">{t("galerie.title")}</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400">
            {t("galerie.subtitle")}
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1 glass-card">
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
        <div className="grid grid-cols-1 gap-5 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="relative p-0 overflow-hidden cursor-pointer group rounded-2xl glass-card border-tropical-cyan/5"
              onClick={() => openLightbox(item)}
            >
              <div className={`relative ${item.type === "video" ? "aspect-video" : "aspect-[4/5]"} overflow-hidden rounded-2xl`}>
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-tropical-dark/95 via-tropical-dark/30 to-transparent group-hover:opacity-100">
                  <h3 className="mb-1 text-xl font-bold text-white glow-text-cyan">
                    {item.title}
                  </h3>
                  <p className="mb-2 text-xs text-gray-300">{item.description}</p>
                  <div className="flex items-center text-tropical-cyan/60 text-[10px]">
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Play icon for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none group-hover:opacity-0">
                    <div className="flex items-center justify-center border rounded-full w-14 h-14 bg-tropical-dark/60 backdrop-blur-sm border-tropical-cyan/20">
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
          <div className="py-20 text-center">
            <p className="text-gray-500">{t("galerie.noPhotos")}</p>
          </div>
        )}

        {/* Liens vers autres vues */}
        <div className="flex justify-center gap-3 mb-12">
          <a href="/portfolio" className="px-5 py-2 text-xs btn-neon btn-neon-cyan">
            {t("galerie.viewSlides")}
          </a>
          <a href="/portfolio-fullscreen" className="px-5 py-2 text-xs btn-neon btn-neon-purple">
            {t("galerie.viewFullscreen")}
          </a>
          <a href="/creations" className="px-5 py-2 text-xs btn-neon btn-neon-magenta">
            {t("galerie.viewCreations")}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-tropical-dark/95 lightbox-backdrop"
          onClick={closeLightbox}
        >
          <button
            className="absolute z-50 p-2 text-gray-400 transition top-5 right-5 hover:text-tropical-cyan"
            onClick={closeLightbox}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute z-50 p-2 text-gray-400 transition -translate-y-1/2 left-4 top-1/2 hover:text-tropical-cyan"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute z-50 p-2 text-gray-400 transition -translate-y-1/2 right-4 top-1/2 hover:text-tropical-cyan"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="flex flex-col items-center w-full max-w-6xl gap-8 px-6 mx-auto md:flex-row"
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
                  className="object-contain max-w-full max-h-full rounded-lg"
                />
              )}
            </div>

            <div className="w-full space-y-4 text-white md:w-72">
              <div className="text-xs tracking-widest uppercase text-tropical-cyan/60">{selectedItem.date}</div>
              <h2 className="text-2xl font-bold glow-text-cyan">{selectedItem.title}</h2>
              <p className="text-sm text-gray-400">{selectedItem.description}</p>

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
