import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Entretien() {
  return (
    <>
      <Head>
        <title>DeuxyProd - Espaces Verts & Bâtiment</title>
        <meta
          name="description"
          content="Services d'entretien d'espaces verts et bâtiment - Entretenir, Rénover, Sublimer"
        />
      </Head>
      <Layout title="Espaces Verts & Bâtiment">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Entretien d'Espaces Verts & Bâtiment
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/images/entretien-espaces-verts.jpg"
                alt="Entretien d'espaces verts"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">
                Entretenir, Rénover, Sublimer
              </h3>
              <p className="text-lg mb-6">
                Nos services d'entretien d'espaces verts et de bâtiment vous
                garantissent des espaces impeccables et fonctionnels. Nous
                prenons soin de vos extérieurs et intérieurs avec
                professionnalisme et attention aux détails.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Entretien régulier d'espaces verts</li>
                <li>Taille de haies et arbustes</li>
                <li>Tonte de pelouse</li>
                <li>Nettoyage et entretien de bâtiments</li>
                <li>Petites réparations et rénovations</li>
                <li>Aménagement paysager</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
