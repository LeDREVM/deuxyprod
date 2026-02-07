import React, { useState, useEffect } from "react";

export default function HelpModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("navigation");

  useEffect(() => {
    // Empêcher le scroll du body quand le modal est ouvert
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const tabs = [
    { id: "navigation", label: "Navigation", icon: "🧭" },
    { id: "keyboard", label: "Clavier", icon: "⌨️" },
    { id: "features", label: "Fonctionnalités", icon: "✨" },
    { id: "tips", label: "Astuces", icon: "💡" }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-1">Guide d'Utilisation</h2>
              <p className="text-gray-300 text-sm">Portfolio DeuxyProd</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-black border-b-2 border-black bg-gray-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {activeTab === "navigation" && <NavigationTab />}
          {activeTab === "keyboard" && <KeyboardTab />}
          {activeTab === "features" && <FeaturesTab />}
          {activeTab === "tips" && <TipsTab />}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>📸 @ledrevm</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Onglet Navigation
function NavigationTab() {
  const methods = [
    {
      icon: "🖱️",
      title: "Souris",
      items: [
        "Cliquez sur les flèches latérales",
        "Utilisez la molette pour défiler",
        "Cliquez sur les points de pagination",
        "Survolez pour afficher les informations"
      ]
    },
    {
      icon: "👆",
      title: "Tactile (Mobile)",
      items: [
        "Glissez vers la gauche/droite",
        "Appuyez sur les flèches",
        "Pincez pour zoomer (lightbox)",
        "Appuyez sur les miniatures"
      ]
    },
    {
      icon: "⌨️",
      title: "Clavier",
      items: [
        "Flèches ← → pour naviguer",
        "Touche I pour les infos",
        "Espace pour play/pause",
        "Esc pour quitter"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-blue-900">
          <strong>Astuce :</strong> Vous pouvez combiner plusieurs méthodes de navigation pour une expérience optimale !
        </p>
      </div>

      {methods.map((method, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <span className="text-2xl mr-2">{method.icon}</span>
            {method.title}
          </h3>
          <ul className="space-y-2">
            {method.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Onglet Clavier
function KeyboardTab() {
  const shortcuts = [
    { key: "←", action: "Photo précédente", context: "Toutes les vues" },
    { key: "→", action: "Photo suivante", context: "Toutes les vues" },
    { key: "I", action: "Afficher/masquer les infos", context: "Plein écran" },
    { key: "Espace", action: "Play/Pause", context: "Diaporama" },
    { key: "Esc", action: "Quitter", context: "Diaporama, Lightbox" },
    { key: "1-9", action: "Aller à la photo N", context: "Bientôt disponible" }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
        <p className="text-purple-900">
          <strong>Navigation rapide :</strong> Utilisez votre clavier pour une navigation ultra-rapide !
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Touche</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Contexte</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {shortcuts.map((shortcut, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <kbd className="px-3 py-1.5 bg-gray-900 text-white rounded font-mono text-sm">
                    {shortcut.key}
                  </kbd>
                </td>
                <td className="px-4 py-3 text-gray-700">{shortcut.action}</td>
                <td className="px-4 py-3 text-gray-500 text-sm">{shortcut.context}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Onglet Fonctionnalités
function FeaturesTab() {
  const views = [
    {
      name: "Vue Slides",
      url: "/portfolio",
      features: ["Transitions fluides", "Navigation multiple", "Pagination", "Compteur"],
      icon: "📊"
    },
    {
      name: "Plein Écran",
      url: "/portfolio-fullscreen",
      features: ["Immersion totale", "Toggle infos", "Métadonnées", "Miniatures"],
      icon: "🖼️"
    },
    {
      name: "Grille",
      url: "/galerie",
      features: ["Vue d'ensemble", "Filtres", "Lightbox", "Hover effects"],
      icon: "📐"
    },
    {
      name: "Diaporama",
      url: "/slideshow",
      features: ["Auto-play", "Vitesse réglable", "Progression", "Contrôles"],
      icon: "▶️"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
        <p className="text-green-900">
          <strong>4 modes de visualisation</strong> pour s'adapter à tous vos besoins !
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {views.map((view, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">{view.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{view.name}</h3>
                <a href={view.url} className="text-xs text-blue-600 hover:underline">
                  {view.url}
                </a>
              </div>
            </div>
            <ul className="space-y-1">
              {view.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Onglet Astuces
function TipsTab() {
  const tips = [
    {
      icon: "🎨",
      title: "Meilleure Expérience",
      description: "Utilisez le mode plein écran pour une immersion totale dans les photos."
    },
    {
      icon: "⚡",
      title: "Navigation Rapide",
      description: "Le clavier est le moyen le plus rapide de naviguer entre les photos."
    },
    {
      icon: "🔍",
      title: "Filtres",
      description: "Dans la vue grille, utilisez les filtres pour trouver rapidement une catégorie."
    },
    {
      icon: "📱",
      title: "Mobile",
      description: "Sur mobile, glissez horizontalement pour naviguer entre les photos."
    },
    {
      icon: "🎬",
      title: "Diaporama",
      description: "Parfait pour les présentations : réglez la vitesse selon vos besoins."
    },
    {
      icon: "💾",
      title: "Favoris",
      description: "Bientôt : Sauvegardez vos photos préférées pour y accéder rapidement !"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-yellow-900">
          <strong>Pro Tips :</strong> Découvrez comment tirer le meilleur parti du portfolio !
        </p>
      </div>

      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-3xl mr-4 flex-shrink-0">{tip.icon}</span>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg">
        <h4 className="font-semibold mb-2">🎓 Besoin d'aide ?</h4>
        <p className="text-sm text-gray-300 mb-3">
          Consultez la documentation complète pour plus d'informations.
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="/GUIDE_PORTFOLIO.md" className="text-xs px-3 py-1 bg-white/20 rounded hover:bg-white/30 transition">
            Guide Utilisateur
          </a>
          <a href="/PORTFOLIO.md" className="text-xs px-3 py-1 bg-white/20 rounded hover:bg-white/30 transition">
            Doc Technique
          </a>
        </div>
      </div>
    </div>
  );
}
