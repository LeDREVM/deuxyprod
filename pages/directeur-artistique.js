import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import CreatorCard from "../components/CreatorCard";
import { creators } from "../data/creators";
import { useLanguage } from "../context/LanguageContext";

export default function DirecteurArtistique() {
  const { t } = useLanguage();

  const services = [
    { icon: "🎨", title: t("da.services.identity.title"), desc: t("da.services.identity.desc") },
    { icon: "🎭", title: t("da.services.events.title"), desc: t("da.services.events.desc") },
    { icon: "📐", title: t("da.services.creative.title"), desc: t("da.services.creative.desc") },
    { icon: "💡", title: t("da.services.strategy.title"), desc: t("da.services.strategy.desc") },
    { icon: "🎬", title: t("da.services.supervision.title"), desc: t("da.services.supervision.desc") },
  ];

  return (
    <>
      <Head>
        <title>{t("da.metaTitle")}</title>
        <meta name="description" content={t("da.metaDesc")} />
      </Head>
      <Layout title={t("da.title")}>
        {/* Hero */}
        <section className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-tropical">{t("da.title")}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("da.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-tropical-cyan/20 to-tropical-purple/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <img
                src="/images/directeur-artistique.jpg"
                alt={t("da.title")}
                className="relative rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("da.heroTitle")} <span className="text-tropical-cyan">{t("da.heroHighlight")}</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t("da.heroDesc")}
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
              <span className="text-gradient-fire">{t("da.creatorsTitle")}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("da.creatorsSubtitle")}
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
            {t("da.ctaTitle")} <span className="text-tropical-cyan">{t("da.ctaHighlight")}</span> ?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {t("da.ctaText")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="mailto:contact@deuxyprod.com" className="btn-neon btn-neon-filled text-sm px-6 py-2.5">
              {t("da.ctaContact")}
            </a>
            <a href="/portfolio" className="btn-neon btn-neon-cyan text-sm px-6 py-2.5">
              {t("da.ctaPortfolio")}
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}
