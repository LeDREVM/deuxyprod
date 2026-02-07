import React from "react";

export default function PhotoInfo({ photo, variant = "overlay" }) {
  if (variant === "overlay") {
    return (
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-2">
            <span className="text-[10px] uppercase tracking-widest text-tropical-cyan/60 bg-tropical-cyan/5 px-2.5 py-1 rounded-full border border-tropical-cyan/10">
              {photo.date}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 glow-text-cyan">{photo.title}</h2>
          <p className="text-gray-400 text-sm mb-2">{photo.description}</p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span>📍 {photo.location}</span>
            {photo.camera && <span>📷 {photo.camera}</span>}
            {photo.iso && <span className="font-mono">ISO {photo.iso}</span>}
            {photo.aperture && <span className="font-mono">{photo.aperture}</span>}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className="space-y-4 text-white">
        <div>
          <div className="text-[10px] text-tropical-cyan/60 uppercase tracking-widest mb-1">{photo.date}</div>
          <h2 className="text-2xl font-bold mb-2 glow-text-cyan">{photo.title}</h2>
          <p className="text-gray-400 text-sm">{photo.description}</p>
        </div>

        {photo.tags && photo.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {photo.tags.map((tag, i) => (
              <span key={i} className="text-[10px] px-2.5 py-1 border border-tropical-cyan/10 rounded-full text-tropical-cyan/50">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-2 text-xs pt-3 border-t border-tropical-cyan/10">
          <div className="flex items-center gap-2 text-gray-500">📍 {photo.location}</div>
          {photo.camera && <div className="flex items-center gap-2 text-gray-500">📷 {photo.camera}</div>}
          {photo.category && <div className="flex items-center gap-2 text-gray-500">🏷️ {photo.category}</div>}
          {(photo.iso || photo.aperture) && (
            <div className="flex items-center gap-2 text-gray-500">
              ⚙️ {photo.iso ? `ISO ${photo.iso}` : ''} {photo.aperture || ''}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="p-4">
        <div className="text-[10px] text-tropical-cyan/60 uppercase tracking-widest mb-1">{photo.date}</div>
        <h3 className="text-sm font-bold text-white mb-1">{photo.title}</h3>
        <p className="text-xs text-gray-500 mb-2">{photo.description}</p>
        {photo.tags && photo.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {photo.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 border border-tropical-cyan/10 rounded-full text-tropical-cyan/50">
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
