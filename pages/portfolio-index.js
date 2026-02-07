import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PortfolioNav from "../components/PortfolioNav";
import Image from "next/image";

export default function PortfolioIndex() {
  const stats = [
    { label: "Photos", value: "3" },
    { label: "Catégories", value: "3" },
    { label: "Vues", value: "3" }
  ];

  const features = [
    {
      title: "Navigation Intuitive",
      description: "Plusieurs modes de navigation adaptés à vos préférences",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Haute Qualité",
      description: "Images optimisées pour une expérience visuelle exceptionnelle",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Responsive Design",
      description: "Adapté à tous les écrans, du mobile au desktop",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <Layout title="Portfolio">
      <Head>
        <title>Portfolio - DeuxyProd</title>
        <meta name="description" content="Explorez le portfolio photographique de DeuxyProd" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Portfolio Photographique
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez notre collection de photographies en noir et blanc, 
            capturant l'essence de la culture urbaine et musicale.
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-black mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation des vues */}
        <PortfolioNav />

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-black mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Preview des photos */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Aperçu de la Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <Image
                src="/photo/20240111-IMG_9907.jpg"
                alt="Studio Session"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-bold">Studio Session</h3>
                  <p className="text-sm text-gray-300">11 Janvier 2024</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <Image
                src="/photo/20240106-IMG_9743.jpg"
                alt="Street Portrait"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-bold">Street Portrait</h3>
                  <p className="text-sm text-gray-300">06 Janvier 2024</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <Image
                src="/photo/20240318-IMG_0949.jpg"
                alt="Urban Lifestyle"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-bold">Urban Lifestyle</h3>
                  <p className="text-sm text-gray-300">18 Mars 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Explorer ?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Choisissez votre mode de visualisation préféré et plongez dans notre univers photographique.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/portfolio"
              className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Vue Slides
            </a>
            <a
              href="/portfolio-fullscreen"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition border border-gray-700"
            >
              Mode Plein Écran
            </a>
            <a
              href="/galerie"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition border border-gray-700"
            >
              Vue Grille
            </a>
            <a
              href="/slideshow"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition border border-gray-700"
            >
              Diaporama
            </a>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            📸 Photographe : <span className="font-semibold">@ledrevm</span>
          </p>
          <p className="text-sm">
            Toutes les photographies sont protégées par le droit d'auteur © 2024 DeuxyProd
          </p>
        </div>
      </div>
    </Layout>
  );
}
