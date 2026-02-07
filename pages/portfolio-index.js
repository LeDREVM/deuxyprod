import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PortfolioNav from "../components/PortfolioNav";

export default function PortfolioIndex() {
  const stats = [
    { label: "Photos", value: "3", icon: "📸" },
    { label: "Catégories", value: "3", icon: "🏷️" },
    { label: "Vues", value: "4", icon: "👁️" },
  ];

  const features = [
    {
      title: "Navigation Intuitive",
      description: "Plusieurs modes adaptés à vos préférences",
      icon: "⚡",
      color: "cyan",
    },
    {
      title: "Haute Qualité",
      description: "Images optimisées pour une expérience visuelle top",
      icon: "💎",
      color: "magenta",
    },
    {
      title: "Responsive",
      description: "Adapté à tous les écrans",
      icon: "📱",
      color: "lime",
    },
  ];

  const colorBorder = {
    cyan: "border-tropical-cyan/20 hover:border-tropical-cyan/40 hover:shadow-glow-cyan",
    magenta: "border-tropical-magenta/20 hover:border-tropical-magenta/40 hover:shadow-glow-magenta",
    lime: "border-tropical-lime/20 hover:border-tropical-lime/40 hover:shadow-glow-lime",
  };

  return (
    <Layout title="Portfolio">
      <Head>
        <title>Portfolio - DeuxyProd</title>
        <meta name="description" content="Explorez le portfolio photographique de DeuxyProd" />
      </Head>

      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-tropical">Portfolio Photographique</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Découvrez notre collection, capturant l'essence de la culture urbaine et musicale.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-lg">{stat.icon}</span>
                <div className="text-2xl font-bold text-tropical-cyan mt-1">{stat.value}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <PortfolioNav />

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {features.map((f, i) => (
            <div key={i} className={`glass-card p-5 text-center border ${colorBorder[f.color]}`}>
              <span className="text-2xl mb-2 block">{f.icon}</span>
              <h3 className="text-sm font-bold text-white mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Preview */}
        <div className="glass-card p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">
            Aperçu de la <span className="text-tropical-cyan">Collection</span>
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/photo/20240111-IMG_9907.jpg", title: "Studio Session", date: "Jan 2024" },
              { src: "/photo/20240106-IMG_9743.jpg", title: "Street Portrait", date: "Jan 2024" },
              { src: "/photo/20240318-IMG_0949.jpg", title: "Urban Lifestyle", date: "Mar 2024" },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <div className="text-white">
                    <h3 className="text-xs font-bold">{photo.title}</h3>
                    <p className="text-[10px] text-tropical-cyan/60">{photo.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-10 text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Prêt à <span className="text-gradient-tropical">Explorer</span> ?
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Choisissez votre mode de visualisation préféré.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="/portfolio" className="btn-neon btn-neon-cyan text-xs px-5 py-2">📸 Slides</a>
            <a href="/portfolio-fullscreen" className="btn-neon btn-neon-magenta text-xs px-5 py-2">🖥️ Plein Écran</a>
            <a href="/galerie" className="btn-neon btn-neon-lime text-xs px-5 py-2">🖼️ Grille</a>
            <a href="/slideshow" className="btn-neon btn-neon-purple text-xs px-5 py-2">▶️ Diaporama</a>
          </div>
        </div>

        {/* Photographer info */}
        <div className="text-center text-gray-600 text-xs">
          <p>📸 Photographe : <span className="text-tropical-cyan">@ledrevm</span></p>
          <p className="text-[10px] mt-1">© 2024 DeuxyProd — Tous droits réservés</p>
        </div>
      </div>
    </Layout>
  );
}
