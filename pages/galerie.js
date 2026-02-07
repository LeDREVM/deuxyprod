import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Galerie() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState("all");

  const photos = [
    {
      id: 1,
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
      src: "/photo/20240318-IMG_0949.jpg",
      title: "Urban Lifestyle",
      date: "18 Mars 2024",
      description: "Lifestyle urbain - La culture de la rue",
      location: "Espace public",
      category: "lifestyle",
      tags: ["Lifestyle", "Culture", "Street"]
    }
  ];

  const categories = [
    { id: "all", label: "Tout", icon: "✨" },
    { id: "studio", label: "Studio", icon: "🎵" },
    { id: "portrait", label: "Portrait", icon: "👤" },
    { id: "lifestyle", label: "Lifestyle", icon: "🌆" }
  ];

  const filteredPhotos = filter === "all"
    ? photos
    : photos.filter(photo => photo.category === filter);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction) => {
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % photos.length;
    } else {
      newIndex = (currentIndex - 1 + photos.length) % photos.length;
    }
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <Layout title="Galerie">
      <Head>
        <title>Galerie - DeuxyProd</title>
        <meta name="description" content="Galerie photographique DeuxyProd" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-tropical">Galerie Photo</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Découvrez notre collection photographique
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center mb-10">
          <div className="glass-card inline-flex p-1 gap-1">
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
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer glass-card p-0 border-tropical-cyan/5"
              onClick={() => openLightbox(photo)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-dark/95 via-tropical-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-white text-xl font-bold mb-1 glow-text-cyan">
                    {photo.title}
                  </h3>
                  <p className="text-gray-300 text-xs mb-2">{photo.description}</p>
                  <div className="flex items-center text-tropical-cyan/60 text-[10px]">
                    <span>{photo.date}</span>
                    <span className="mx-2">•</span>
                    <span>{photo.location}</span>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-3 right-3 bg-tropical-dark/80 backdrop-blur-md text-tropical-cyan text-[10px] px-2.5 py-1 rounded-full border border-tropical-cyan/20">
                {photo.category}
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">Aucune photo dans cette catégorie</p>
          </div>
        )}

        {/* Liens vers autres vues */}
        <div className="flex justify-center gap-3 mb-12">
          <a href="/portfolio" className="btn-neon btn-neon-cyan text-xs px-5 py-2">
            📸 Vue Slides
          </a>
          <a href="/portfolio-fullscreen" className="btn-neon btn-neon-purple text-xs px-5 py-2">
            🖥️ Plein Écran
          </a>
          <a href="/creations" className="btn-neon btn-neon-magenta text-xs px-5 py-2">
            🎬 Créations
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
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
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            <div className="w-full md:w-72 text-white space-y-4">
              <div className="text-xs text-tropical-cyan/60 uppercase tracking-widest">{selectedPhoto.date}</div>
              <h2 className="text-2xl font-bold glow-text-cyan">{selectedPhoto.title}</h2>
              <p className="text-gray-400 text-sm">{selectedPhoto.description}</p>

              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span>📍</span> {selectedPhoto.location}
                </div>
                <div className="flex items-center gap-2">
                  <span>🏷️</span> {selectedPhoto.category}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedPhoto.tags.map((tag, i) => (
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
