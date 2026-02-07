import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { useLanguage } from "../context/LanguageContext";

export default function Entretien() {
  const { t } = useLanguage();

  const services = [
    { icon: "🌿", title: t("entretien.services.green.title"), desc: t("entretien.services.green.desc") },
    { icon: "✂️", title: t("entretien.services.hedge.title"), desc: t("entretien.services.hedge.desc") },
    { icon: "🌱", title: t("entretien.services.lawn.title"), desc: t("entretien.services.lawn.desc") },
    { icon: "🏠", title: t("entretien.services.building.title"), desc: t("entretien.services.building.desc") },
    { icon: "🔧", title: t("entretien.services.repairs.title"), desc: t("entretien.services.repairs.desc") },
    { icon: "🌳", title: t("entretien.services.landscaping.title"), desc: t("entretien.services.landscaping.desc") },
  ];

  return (
    <>
      <Head>
        <title>{t("entretien.metaTitle")}</title>
        <meta name="description" content={t("entretien.metaDesc")} />
      </Head>
      <Layout title={t("entretien.title")}>
        {/* Hero */}
        <section className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-neon">{t("entretien.title")}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("entretien.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-tropical-lime/20 to-tropical-cyan/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <img
                src="/images/entretien-espaces-verts.jpg"
                alt={t("entretien.title")}
                className="relative rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("entretien.heroTitle")} <span className="text-tropical-lime">{t("entretien.heroHighlight")}</span>
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t("entretien.heroDesc")}
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
            {t("entretien.ctaTitle")} <span className="text-tropical-lime">{t("entretien.ctaHighlight")}</span> ?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
            {t("entretien.ctaText")}
          </p>
          <a href="mailto:longvichy@gmail.com" className="btn-neon btn-neon-lime text-sm px-6 py-2.5">
            {t("entretien.ctaButton")}
          </a>
        </section>
      </Layout>
    </>
  );
}
