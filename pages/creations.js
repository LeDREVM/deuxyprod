import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Creations() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Playlists et vidéos
  const playlists = [
    {
      id: 1,
      title: "Créations Artistiques",
      description: "Collection de créations musicales et visuelles",
      playlistId: "PLniFU1EmwtN8TvGH_T_6uRaoZFUJPCpHe",
      thumbnail: "https://img.youtube.com/vi/HaC_CaTa-UU/maxresdefault.jpg",
      videos: [
        {
          id: "HaC_CaTa-UU",
          title: "Création Artistique #1",
          description: "Première création de la série"
        }
      ]
    }
  ];

  const featuredVideos = [
    {
      id: "HaC_CaTa-UU",
      title: "Création Artistique Principale",
      description: "Découvrez notre dernière création artistique",
      thumbnail: "https://img.youtube.com/vi/HaC_CaTa-UU/maxresdefault.jpg"
    }
  ];

  const openVideo = (videoId, title) => {
    setSelectedVideo({ id: videoId, title });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <Head>
        <title>Créations Artistiques - DeuxyProd</title>
        <meta name="description" content="Découvrez nos créations artistiques et musicales" />
      </Head>

      <Layout title="Créations">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Créations Artistiques
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez nos créations musicales et visuelles. Plongez dans notre univers artistique à travers nos vidéos et playlists.
          </p>
        </section>

        {/* Vidéos en Vedette */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            En Vedette
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openVideo(video.id, video.title)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Playlists */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Playlists
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Playlist Thumbnail */}
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${playlist.videos[0].id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Playlist
                  </div>
                </div>

                {/* Playlist Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {playlist.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {playlist.description}
                  </p>

                  {/* Boutons d'action */}
                  <div className="flex gap-3">
                    <a
                      href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-center"
                    >
                      Voir sur YouTube
                    </a>
                    <button
                      onClick={() => openVideo(playlist.videos[0].id, playlist.title)}
                      className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
                    >
                      Lire ici
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Embed YouTube */}
        <section className="mb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Playlist Complète
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Découvrez toutes nos créations dans cette playlist YouTube
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLniFU1EmwtN8TvGH_T_6uRaoZFUJPCpHe"
                title="Playlist Créations Artistiques"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Abonnez-vous à Notre Chaîne
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ne manquez aucune de nos nouvelles créations. Abonnez-vous pour être notifié de nos dernières sorties.
          </p>
          <a
            href="https://www.youtube.com/@ledrevm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            S'abonner sur YouTube
          </a>
        </section>
      </Layout>

      {/* Modal Vidéo */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-50"
            onClick={closeVideo}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
