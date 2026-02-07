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
    { id: "all", label: "Tout" },
    { id: "studio", label: "Studio" },
    { id: "portrait", label: "Portrait" },
    { id: "lifestyle", label: "Lifestyle" }
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
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Galerie Photo</h1>
          <p className="text-xl text-gray-600">
            Découvrez notre collection de photographies en noir et blanc
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onClick={() => openLightbox(photo)}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {photo.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {photo.description}
                </p>
                <div className="flex items-center text-gray-400 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {photo.date}
                </div>
              </div>

              {/* Badge catégorie */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                {photo.category}
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucune photo */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucune photo dans cette catégorie</p>
          </div>
        )}

        {/* Liens vers autres vues */}
        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="/portfolio"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Vue Slides
          </a>
          <a
            href="/portfolio-fullscreen"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Mode Plein Écran
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Bouton fermer */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-50"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation précédent */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-50"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Navigation suivant */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-50"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contenu lightbox */}
          <div
            className="max-w-7xl w-full mx-auto px-6 flex flex-col md:flex-row items-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="flex-1 relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Informations */}
            <div className="w-full md:w-80 text-white space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-2">{selectedPhoto.date}</div>
                <h2 className="text-3xl font-bold mb-3">{selectedPhoto.title}</h2>
                <p className="text-gray-300 mb-4">{selectedPhoto.description}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {selectedPhoto.location}
                </div>

                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {selectedPhoto.category}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {selectedPhoto.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full"
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
