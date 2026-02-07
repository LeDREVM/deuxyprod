import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import CreatorCard from "../components/CreatorCard";
import { creators } from "../data/creators";

export default function DirecteurArtistique() {
  const services = [
    { icon: "🎨", title: "Identité Visuelle", desc: "Conception d'identité visuelle forte et cohérente" },
    { icon: "🎭", title: "Direction Événementielle", desc: "Direction artistique pour événements" },
    { icon: "📐", title: "Supports Créatifs", desc: "Création de supports de communication" },
    { icon: "💡", title: "Stratégie Créative", desc: "Conseil en stratégie créative" },
    { icon: "🎬", title: "Supervision", desc: "Supervision de projets artistiques" },
  ];

  return (
    <>
      <Head>
        <title>DeuxyProd - Direction Artistique</title>
        <meta name="description" content="Services de direction artistique - Créativité et Visibilité" />
      </Head>
      <Layout title="Directeur Artistique">
        {/* Hero */}
        <section className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-tropical">Direction Artistique</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Créativité et Visibilité — Notre expertise au service de votre vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-tropical-cyan/20 to-tropical-purple/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <img
                src="/images/directeur-artistique.jpg"
                alt="Direction Artistique"
                className="relative rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Créativité & <span className="text-tropical-cyan">Visibilité</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Notre service de direction artistique vous accompagne dans la
                création d'une identité visuelle forte et cohérente pour votre
                entreprise ou vos projets. Nous mettons notre expertise au
                service de votre vision pour vous démarquer dans un monde visuel saturé.
              </p>

              {/* Services cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="glass-card p-3 flex items-start space-x-3"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                      <p className="text-xs text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="tropical-divider mb-16" />

        {/* Section Créateurs */}
        <section className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-fire">Nos Créateurs</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deux visions artistiques complémentaires au service de votre créativité.
            </p>
          </div>

          <div className="space-y-10">
            {creators.map((creator, index) => (
              <CreatorCard
                key={index}
                creator={creator}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à Donner Vie à Votre <span className="text-tropical-cyan">Vision</span> ?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment notre équipe
            peut transformer vos idées en réalité visuelle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="mailto:contact@deuxyprod.com" className="btn-neon btn-neon-filled text-sm px-6 py-2.5">
              ✉️ Nous Contacter
            </a>
            <a href="/portfolio" className="btn-neon btn-neon-cyan text-sm px-6 py-2.5">
              📸 Voir le Portfolio
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}
