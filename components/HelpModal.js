import React, { useState, useEffect } from "react";

export default function HelpModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("navigation");

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const tabs = [
    { id: "navigation", label: "Navigation", icon: "🧭" },
    { id: "keyboard", label: "Clavier", icon: "⌨️" },
    { id: "features", label: "Fonctionnalités", icon: "✨" },
    { id: "tips", label: "Astuces", icon: "💡" }
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
              <h2 className="text-xl font-bold text-white">Guide d'Utilisation</h2>
              <p className="text-xs text-gray-500">Portfolio DeuxyProd</p>
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
                { icon: "🖱️", title: "Souris", items: ["Cliquez sur les flèches", "Molette pour défiler", "Cliquez sur la pagination"] },
                { icon: "👆", title: "Tactile", items: ["Glissez gauche/droite", "Appuyez sur les flèches", "Pincez pour zoomer"] },
                { icon: "⌨️", title: "Clavier", items: ["← → pour naviguer", "I pour les infos", "Espace pour play/pause"] },
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
                { key: "← →", action: "Navigation", ctx: "Partout" },
                { key: "I", action: "Toggle infos", ctx: "Plein écran" },
                { key: "⎵", action: "Play/Pause", ctx: "Diaporama" },
                { key: "Esc", action: "Quitter", ctx: "Lightbox" },
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
                { icon: "🎞️", name: "Slides", url: "/portfolio" },
                { icon: "🖥️", name: "Plein Écran", url: "/portfolio-fullscreen" },
                { icon: "🖼️", name: "Grille", url: "/galerie" },
                { icon: "▶️", name: "Diaporama", url: "/slideshow" },
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
                { icon: "🎨", title: "Immersion", desc: "Mode plein écran pour la meilleure expérience" },
                { icon: "⚡", title: "Navigation rapide", desc: "Le clavier est le plus rapide" },
                { icon: "🔍", title: "Filtres", desc: "Filtrez par catégorie dans la galerie" },
                { icon: "📱", title: "Mobile", desc: "Glissez horizontalement sur mobile" },
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3 glass-card p-3">
                  <span className="text-xl">{t.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.title}</h4>
                    <p className="text-[10px] text-gray-500">{t.desc}</p>
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
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
