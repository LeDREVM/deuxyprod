import React from "react";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">DeuxyProd</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/directeur-artistique"
                  className={`hover:text-gray-300 ${
                    title === "Directeur Artistique" ? "font-bold" : ""
                  }`}
                >
                  Directeur Artistique
                </Link>
              </li>
              <li>
                <Link
                  href="/entretien"
                  className={`hover:text-gray-300 ${
                    title === "Espaces Verts & Bâtiment" ? "font-bold" : ""
                  }`}
                >
                  Espaces Verts & Bâtiment
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={`hover:text-gray-300 ${
                    title === "Portfolio" ? "font-bold" : ""
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className={`hover:text-gray-300 ${
                    title === "Galerie" ? "font-bold" : ""
                  }`}
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/creations"
                  className={`hover:text-gray-300 ${
                    title === "Créations" ? "font-bold" : ""
                  }`}
                >
                  Créations
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">{children}</main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">DeuxyProd</h2>
              <p>Créativité et Excellence</p>
            </div>
            <div>
              <p>
                &copy; {new Date().getFullYear()} DeuxyProd. Tous droits
                réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
