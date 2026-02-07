import React from "react";
import Image from "next/image";

export default function CreatorCard({ creator, reverse = false }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300`}>
      {/* Photo du créateur */}
      <div className="flex-shrink-0">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
          {creator.photo ? (
            <Image
              src={creator.photo}
              alt={creator.name}
              fill
              className="object-cover"
              quality={95}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
              <span className="text-6xl text-white font-bold">
                {creator.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Informations du créateur */}
      <div className="flex-1">
        {/* Nom et titre */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {creator.name}
          </h3>
          <p className="text-xl text-gray-600 font-medium">
            {creator.title}
          </p>
          {creator.aka && (
            <p className="text-sm text-gray-500 italic mt-1">
              aka {creator.aka}
            </p>
          )}
        </div>

        {/* Bio */}
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            {creator.bio}
          </p>
          {creator.bioExtended && (
            <p className="text-gray-600 leading-relaxed">
              {creator.bioExtended}
            </p>
          )}
        </div>

        {/* Spécialités */}
        {creator.specialties && creator.specialties.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
              Spécialités
            </h4>
            <div className="flex flex-wrap gap-2">
              {creator.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Réseaux sociaux */}
        {creator.socials && (
          <div className="flex items-center space-x-4">
            {creator.socials.instagram && (
              <a
                href={creator.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm group-hover:underline">@{creator.socials.instagram.split('/').pop()}</span>
              </a>
            )}
            {creator.socials.email && (
              <a
                href={`mailto:${creator.socials.email}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm group-hover:underline">Contact</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
