import React from "react";

export default function PhotoInfo({ photo, variant = "overlay" }) {
  if (variant === "overlay") {
    return (
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
        <div className="max-w-4xl">
          {/* Badge de date */}
          <div className="inline-block mb-3">
            <div className="text-xs uppercase tracking-widest text-gray-400 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
              {photo.date}
            </div>
          </div>
          
          {/* Titre */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {photo.title}
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-3 font-light">
            {photo.description}
          </p>
          
          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            {/* Localisation */}
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{photo.location}</span>
            </div>

            {/* Appareil */}
            {photo.camera && (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{photo.camera}</span>
              </div>
            )}

            {/* ISO */}
            {photo.iso && (
              <div className="flex items-center">
                <span className="font-mono">ISO {photo.iso}</span>
              </div>
            )}

            {/* Ouverture */}
            {photo.aperture && (
              <div className="flex items-center">
                <span className="font-mono">{photo.aperture}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className="space-y-4 text-white">
        {/* En-tête */}
        <div>
          <div className="text-sm text-gray-400 mb-2">{photo.date}</div>
          <h2 className="text-3xl font-bold mb-3">{photo.title}</h2>
          <p className="text-gray-300 mb-4">{photo.description}</p>
        </div>

        {/* Tags */}
        {photo.tags && photo.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {photo.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Métadonnées détaillées */}
        <div className="space-y-2 text-sm pt-4 border-t border-white/10">
          <MetadataRow
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            }
            label="Localisation"
            value={photo.location}
          />

          {photo.camera && (
            <MetadataRow
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
              }
              label="Appareil"
              value={photo.camera}
            />
          )}

          {photo.category && (
            <MetadataRow
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              }
              label="Catégorie"
              value={photo.category}
            />
          )}

          {(photo.iso || photo.aperture) && (
            <MetadataRow
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              label="Réglages"
              value={`${photo.iso ? `ISO ${photo.iso}` : ''} ${photo.aperture || ''}`}
            />
          )}
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{photo.date}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{photo.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{photo.description}</p>
        
        {photo.tags && photo.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {photo.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}

// Composant helper pour les lignes de métadonnées
function MetadataRow({ icon, label, value }) {
  return (
    <div className="flex items-start text-gray-400">
      <div className="mt-0.5 mr-2">{icon}</div>
      <div className="flex-1">
        <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
        <div className="text-sm text-gray-300">{value}</div>
      </div>
    </div>
  );
}
