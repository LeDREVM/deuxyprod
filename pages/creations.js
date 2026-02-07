import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { playlists, featuredVideos, channelInfo } from "../data/videos";

export default function Creations() {
  const [selectedVideo, setSelectedVideo] = useState(null);

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
        {/* Hero */}
        <section className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-fire">Créations Artistiques</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explorez nos créations musicales et visuelles. Plongez dans notre univers artistique.
          </p>
        </section>

        {/* Vidéos en Vedette */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-tropical-magenta">⭐</span> En Vedette
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="group glass-card p-0 overflow-hidden cursor-pointer"
                onClick={() => openVideo(video.id, video.title)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-tropical-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-tropical-magenta/90 flex items-center justify-center shadow-glow-magenta">
                      <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white mb-1">{video.title}</h3>
                  <p className="text-xs text-gray-500">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="tropical-divider mb-16" />

        {/* Playlists */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-tropical-purple">📋</span> Playlists
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="glass-card p-0 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/HaC_CaTa-UU/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-tropical-dark/80 backdrop-blur-md text-tropical-purple text-[10px] px-2.5 py-1 rounded-full border border-tropical-purple/20 font-medium">
                    Playlist
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1">{playlist.title}</h3>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">{playlist.description}</p>
                  <div className="flex gap-2">
                    <a
                      href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon btn-neon-magenta text-[10px] px-4 py-1.5 flex-1 text-center"
                    >
                      YouTube
                    </a>
                    {playlist.videos && playlist.videos.length > 0 && (
                      <button
                        onClick={() => openVideo(playlist.videos[0].id, playlist.title)}
                        className="btn-neon btn-neon-cyan text-[10px] px-4 py-1.5 flex-1"
                      >
                        Lire ici
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Embed YouTube */}
        <section className="mb-16 glass-card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            <span className="text-gradient-tropical">Playlist Complète</span>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Toutes nos créations dans une playlist
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-tropical-cyan/10">
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
        <section className="glass-card p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Abonnez-vous à <span className="text-tropical-magenta">Notre Chaîne</span>
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
            Ne manquez aucune de nos nouvelles créations.
          </p>
          <a
            href={channelInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-magenta text-sm px-6 py-2.5 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            S'abonner
          </a>
        </section>
      </Layout>

      {/* Modal Vidéo */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-tropical-dark/95 lightbox-backdrop z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <button
            className="absolute top-5 right-5 text-gray-400 hover:text-tropical-cyan transition z-50 p-2"
            onClick={closeVideo}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-tropical-cyan/10">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-white glow-text-cyan">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
