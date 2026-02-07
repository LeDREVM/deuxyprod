import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import CreatorCard from "../components/CreatorCard";
import { creators } from "../data/creators";

export default function DirecteurArtistique() {

  return (
    <>
      <Head>
        <title>DeuxyProd - Directeur Artistique</title>
        <meta
          name="description"
          content="Services de direction artistique - Créativité et Visibilité"
        />
      </Head>
      <Layout title="Directeur Artistique">
        {/* Section Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Services de Direction Artistique
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/images/directeur-artistique.jpg"
                alt="Direction Artistique"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">
                Créativité et Visibilité
              </h3>
              <p className="text-lg mb-6">
                Notre service de direction artistique vous accompagne dans la
                création d'une identité visuelle forte et cohérente pour votre
                entreprise ou vos projets. Nous mettons notre expertise au
                service de votre vision pour vous démarquer dans un monde visuel
                saturé.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Conception d'identité visuelle</li>
                <li>Direction artistique pour événements</li>
                <li>Création de supports de communication</li>
                <li>Conseil en stratégie créative</li>
                <li>Supervision de projets artistiques</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Créateurs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nos Créateurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deux visions artistiques complémentaires au service de votre créativité.
              Découvrez les talents qui donnent vie à vos projets.
            </p>
          </div>

          <div className="space-y-12">
            {creators.map((creator, index) => (
              <CreatorCard 
                key={index} 
                creator={creator} 
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </section>

        {/* Section CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Prêt à Donner Vie à Votre Vision ?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment notre équipe 
            peut transformer vos idées en réalité visuelle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:contact@deuxyprod.com"
              className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Nous Contacter
            </a>
            <a
              href="/portfolio"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Voir le Portfolio
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}
