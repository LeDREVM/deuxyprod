import React from "react";
import Image from "next/image";

export default function PhotoSlider({ photo, isActive }) {
  return (
    <div className={`relative w-full h-full transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      {/* Image avec effet de zoom subtil */}
      <div className="relative w-full h-full overflow-hidden">
        <div className={`relative w-full h-full transform transition-transform duration-[8000ms] ${isActive ? 'scale-105' : 'scale-100'}`}>
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            className="object-contain"
            quality={95}
          />
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

      {/* Métadonnées de la photo */}
      <div className={`absolute bottom-0 left-0 right-0 p-12 text-white z-10 transform transition-all duration-1000 ${
        isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="max-w-4xl">
          {/* Badge de date */}
          <div className="inline-block mb-4">
            <div className="text-xs uppercase tracking-widest text-gray-400 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              {photo.date}
            </div>
          </div>
          
          {/* Titre avec animation */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            {photo.title}
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-3 font-light">
            {photo.description}
          </p>
          
          {/* Localisation */}
          <div className="flex items-center text-sm text-gray-400 uppercase tracking-wide">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {photo.location}
          </div>
        </div>
      </div>

      {/* Watermark discret */}
      <div className="absolute top-8 right-8 text-white/30 text-sm font-light tracking-widest">
        @ledrevm
      </div>
    </div>
  );
}
