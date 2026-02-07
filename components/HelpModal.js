import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function HelpModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("navigation");
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const tabs = [
    { id: "navigation", label: t("help.tabNav"), icon: "🧭" },
    { id: "keyboard", label: t("help.tabKeyboard"), icon: "⌨️" },
    { id: "features", label: t("help.tabFeatures"), icon: "✨" },
    { id: "tips", label: t("help.tabTips"), icon: "💡" }
  ];

  return (
    <div
      className="fixed inset-0 bg-tropical-dark/90 lightbox-backdrop z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="glass-card max-w-3xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-tropical-dark to-tropical-navy p-5 border-b border-tropical-cyan/10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white">{t("help.title")}</h2>
              <p className="text-xs text-gray-500">{t("help.subtitle")}</p>
            </div>
            <button onClick={onClose} className="p-1.5 hover:bg-white/5 rounded-lg transition text-gray-400 hover:text-tropical-cyan">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-tropical-cyan/10">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-3 text-xs font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-tropical-cyan border-b-2 border-tropical-cyan bg-tropical-cyan/5'
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="mr-1">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto max-h-[calc(90vh-200px)] text-sm">
          {activeTab === "navigation" && (
            <div className="space-y-4">
              {[
                { icon: "🖱️", title: t("help.mouse"), items: t("help.mouseItems") },
                { icon: "👆", title: t("help.touch"), items: t("help.touchItems") },
                { icon: "⌨️", title: t("help.keyboard"), items: t("help.keyboardItems") },
              ].map((m, i) => (
                <div key={i} className="glass-card p-4">
                  <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-lg">{m.icon}</span>{m.title}
                  </h3>
                  <ul className="space-y-1">
                    {m.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="text-tropical-cyan">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "keyboard" && (
            <div className="space-y-2">
              {[
                { key: "← →", action: t("help.keyNav"), ctx: t("help.everywhere") },
                { key: "I", action: t("help.keyToggle"), ctx: t("help.fullscreenCtx") },
                { key: "⎵", action: t("help.keyPlayPause"), ctx: t("help.slideshowCtx") },
                { key: "Esc", action: t("help.keyQuit"), ctx: t("help.lightboxCtx") },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between glass-card p-3">
                  <kbd className="px-2 py-1 bg-tropical-cyan/10 text-tropical-cyan rounded text-xs font-mono">{s.key}</kbd>
                  <span className="text-xs text-white">{s.action}</span>
                  <span className="text-[10px] text-gray-600">{s.ctx}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "features" && (
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🎞️", name: t("help.featureSlides"), url: "/portfolio" },
                { icon: "🖥️", name: t("help.featureFullscreen"), url: "/portfolio-fullscreen" },
                { icon: "🖼️", name: t("help.featureGrid"), url: "/galerie" },
                { icon: "▶️", name: t("help.featureSlideshow"), url: "/slideshow" },
              ].map((v, i) => (
                <a key={i} href={v.url} className="glass-card p-4 text-center hover:border-tropical-cyan/30 transition">
                  <span className="text-2xl block mb-1">{v.icon}</span>
                  <h3 className="text-xs font-bold text-white">{v.name}</h3>
                  <p className="text-[10px] text-gray-500">{v.url}</p>
                </a>
              ))}
            </div>
          )}

          {activeTab === "tips" && (
            <div className="space-y-2">
              {[
                { icon: "🎨", ...t("help.tipImmersion") },
                { icon: "⚡", ...t("help.tipFastNav") },
                { icon: "🔍", ...t("help.tipFilters") },
                { icon: "📱", ...t("help.tipMobile") },
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 glass-card p-3">
                  <span className="text-xl">{tip.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">{tip.title}</h4>
                    <p className="text-[10px] text-gray-500">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-tropical-cyan/10 p-4 flex justify-between items-center">
          <span className="text-[10px] text-gray-600">📸 @ledrevm</span>
          <button onClick={onClose} className="btn-neon btn-neon-cyan text-[10px] px-4 py-1.5">
            {t("help.close")}
          </button>
        </div>
      </div>
    </div>
  );
}
