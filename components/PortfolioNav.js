import React from "react";
import Link from "next/link";

export default function PortfolioNav({ currentView = "portfolio" }) {
  const views = [
    {
      id: "portfolio",
      label: "Slides",
      href: "/portfolio",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      description: "Navigation par slides avec Swiper"
    },
    {
      id: "fullscreen",
      label: "Plein Écran",
      href: "/portfolio-fullscreen",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      ),
      description: "Expérience immersive plein écran"
    },
    {
      id: "galerie",
      label: "Grille",
      href: "/galerie",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      ),
      description: "Vue en grille avec filtres"
    },
    {
      id: "slideshow",
      label: "Diaporama",
      href: "/slideshow",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Lecture automatique avec contrôles"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">
        Choisir une vue
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {views.map((view) => (
          <Link
            key={view.id}
            href={view.href}
            className={`group relative p-4 rounded-lg border-2 transition-all duration-300 ${
              currentView === view.id
                ? 'border-black bg-black text-white'
                : 'border-gray-200 hover:border-black hover:shadow-md'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`mt-1 ${currentView === view.id ? 'text-white' : 'text-gray-600 group-hover:text-black'}`}>
                {view.icon}
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold mb-1 ${
                  currentView === view.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {view.label}
                </h4>
                <p className={`text-sm ${
                  currentView === view.id ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {view.description}
                </p>
              </div>
              {currentView === view.id && (
                <div className="absolute top-2 right-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
