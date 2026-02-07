import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

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
        <section className="mb-16">
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
      </Layout>
    </>
  );
}
