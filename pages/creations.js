import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { artists, playlists, featuredVideos, channelInfo } from "../data/videos";

export default function Creations() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeArtist, setActiveArtist] = useState("all");

  const openVideo = (videoId, title) => {
    setSelectedVideo({ id: videoId, title });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const colorMap = {
    cyan: {
      badge: "bg-tropical-cyan/10 text-tropical-cyan border-tropical-cyan/20",
      glow: "shadow-glow-cyan",
      text: "text-tropical-cyan",
      btn: "btn-neon-cyan",
      play: "bg-tropical-cyan/90 shadow-glow-cyan",
    },
    magenta: {
      badge: "bg-tropical-magenta/10 text-tropical-magenta border-tropical-magenta/20",
      glow: "shadow-glow-magenta",
      text: "text-tropical-magenta",
      btn: "btn-neon-magenta",
      play: "bg-tropical-magenta/90 shadow-glow-magenta",
    },
    lime: {
      badge: "bg-tropical-lime/10 text-tropical-lime border-tropical-lime/20",
      glow: "shadow-glow-lime",
      text: "text-tropical-lime",
      btn: "btn-neon-lime",
      play: "bg-tropical-lime/90 shadow-glow-lime",
    },
    purple: {
      badge: "bg-tropical-purple/10 text-tropical-purple border-tropical-purple/20",
      glow: "shadow-glow-purple",
      text: "text-tropical-purple",
      btn: "btn-neon-purple",
      play: "bg-tropical-purple/90 shadow-glow-purple",
    },
  };

  return (
    <>
      <Head>
        <title>Créations Artistiques - DeuxyProd</title>
        <meta name="description" content="Découvrez nos créations artistiques et musicales - Direction Artistique OfVision" />
      </Head>

      <Layout title="Créations">
        {/* Hero */}
        <section className="mb-12 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-gradient-fire">Créations Artistiques</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Direction Artistique — Découvrez les artistes et leurs productions
          </p>
        </section>

        {/* Artist Filter */}
        <div className="flex justify-center mb-10">
          <div className="glass-card inline-flex p-1 gap-1 flex-wrap justify-center">
            <button
              onClick={() => setActiveArtist("all")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                activeArtist === "all"
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-white hover:bg-white/5"
              }`}
            >
              🎶 Tous
            </button>
            {artists.map((artist) => {
              const c = colorMap[artist.color] || colorMap.cyan;
              return (
                <button
                  key={artist.id}
                  onClick={() => setActiveArtist(artist.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                    activeArtist === artist.id
                      ? `${c.badge} ${c.glow}`
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {artist.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Artists Sections */}
        {artists
          .filter((a) => activeArtist === "all" || a.id === activeArtist)
          .map((artist) => {
            const c = colorMap[artist.color] || colorMap.cyan;
            return (
              <section key={artist.id} className="mb-14">
                {/* Artist header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 rounded-full ${c.badge.split(" ")[0].replace("/10", "")}`}
                    style={{ background: artist.color === "cyan" ? "#00FFD1" : artist.color === "magenta" ? "#FF006E" : artist.color === "lime" ? "#39FF14" : "#8B5CF6" }}
                  />
                  <div>
                    <h2 className={`text-2xl font-bold ${c.text}`}>
                      {artist.name}
                    </h2>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                      Direction Artistique OfVision • {artist.videos.length} vidéo{artist.videos.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Videos grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {artist.videos.map((video) => (
                    <div
                      key={video.id}
                      className="group glass-card p-0 overflow-hidden cursor-pointer"
                      onClick={() => openVideo(video.id, `${artist.name} — ${video.title}`)}
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
                        {/* Play overlay */}
                        <div className="absolute inset-0 bg-tropical-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${c.play}`}>
                            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        {/* Artist badge */}
                        <div className={`absolute top-2 left-2 text-[9px] px-2 py-0.5 rounded-full border font-medium ${c.badge}`}>
                          {artist.name}
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="text-xs font-semibold text-white truncate">{video.title}</h3>
                        <p className="text-[10px] text-gray-600 mt-0.5">Direction Artistique</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

        {/* Divider */}
        <div className="tropical-divider mb-14" />

        {/* Playlist embed */}
        <section className="mb-14 glass-card p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-1 text-center">
            <span className="text-gradient-tropical">Playlist Complète</span>
          </h2>
          <p className="text-center text-gray-500 text-xs mb-5">
            Toutes les créations dans une playlist
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
        <section className="glass-card p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Abonnez-vous à <span className="text-tropical-magenta">Notre Chaîne</span>
          </h3>
          <p className="text-gray-500 text-xs mb-5 max-w-md mx-auto">
            Ne manquez aucune de nos nouvelles créations.
          </p>
          <a
            href={channelInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-magenta text-xs px-5 py-2 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
            <div className="mt-3 text-center">
              <h3 className="text-sm font-bold text-white glow-text-cyan">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
