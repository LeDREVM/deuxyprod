import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Entretien() {
  const services = [
    { icon: "🌿", title: "Entretien d'espaces verts", desc: "Entretien régulier et soigné de vos jardins" },
    { icon: "✂️", title: "Taille de haies", desc: "Taille précise de haies et arbustes" },
    { icon: "🌱", title: "Tonte de pelouse", desc: "Tonte régulière pour un gazon impeccable" },
    { icon: "🏠", title: "Entretien bâtiment", desc: "Nettoyage et entretien de bâtiments" },
    { icon: "🔧", title: "Réparations", desc: "Petites réparations et rénovations" },
    { icon: "🌳", title: "Aménagement paysager", desc: "Création d'espaces verts sur mesure" },
  ];

  return (
    <>
      <Head>
        <title>DeuxyProd - Espaces Verts & Bâtiment</title>
        <meta name="description" content="Services d'entretien d'espaces verts et bâtiment" />
      </Head>
      <Layout title="Espaces Verts & Bâtiment">
        {/* Hero */}
        <section className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-neon">Espaces Verts & Bâtiment</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Entretenir, Rénover, Sublimer — Des espaces impeccables et fonctionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-tropical-lime/20 to-tropical-cyan/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <img
                src="/images/entretien-espaces-verts.jpg"
                alt="Entretien d'espaces verts"
                className="relative rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Entretenir, Rénover, <span className="text-tropical-lime">Sublimer</span>
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Nos services d'entretien d'espaces verts et de bâtiment vous
                garantissent des espaces impeccables et fonctionnels. Nous
                prenons soin de vos extérieurs et intérieurs avec
                professionnalisme et attention aux détails.
              </p>

              {/* Services grid */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="glass-card p-3 flex items-start space-x-3"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <h4 className="text-xs font-semibold text-white">{s.title}</h4>
                      <p className="text-[11px] text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Besoin d'un <span className="text-tropical-lime">Devis</span> ?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
            Contactez-nous pour un devis gratuit et personnalisé.
          </p>
          <a href="mailto:contact@deuxyprod.com" className="btn-neon btn-neon-lime text-sm px-6 py-2.5">
            ✉️ Demander un devis
          </a>
        </section>
      </Layout>
    </>
  );
}
