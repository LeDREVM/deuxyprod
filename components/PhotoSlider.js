import React from "react";

export default function PhotoSlider({ photo, isActive }) {
  return (
    <div className={`relative w-full h-full transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative w-full h-full overflow-hidden">
        <div className={`relative w-full h-full transform transition-transform duration-[8000ms] flex items-center justify-center ${isActive ? 'scale-105' : 'scale-100'}`}>
          <img
            src={photo.src}
            alt={photo.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-tropical-dark/90 via-transparent to-tropical-dark/40 pointer-events-none" />

      <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10 transform transition-all duration-1000 ${
        isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="max-w-3xl">
          <div className="inline-block mb-3">
            <span className="text-[10px] uppercase tracking-widest text-tropical-cyan/60 bg-tropical-cyan/5 px-2.5 py-1 rounded-full border border-tropical-cyan/10">
              {photo.date}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 glow-text-cyan">{photo.title}</h2>
          <p className="text-gray-400 text-sm mb-2">{photo.description}</p>
          <div className="flex items-center text-xs text-gray-500">
            <span>📍 {photo.location}</span>
          </div>
        </div>
      </div>

      <div className="absolute top-6 right-6 text-tropical-cyan/20 text-xs font-light tracking-widest">
        @ledrevm
      </div>
    </div>
  );
}
