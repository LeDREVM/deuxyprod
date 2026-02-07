import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children, title }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Accueil", icon: "🏠" },
    { href: "/directeur-artistique", label: "Direction Artistique", icon: "🎨" },
    { href: "/entretien", label: "Espaces Verts", icon: "🌿" },
    { href: "/portfolio", label: "Portfolio", icon: "📸" },
    { href: "/galerie", label: "Galerie", icon: "🖼️" },
    { href: "/creations", label: "Créations", icon: "🎬" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-tropical-dark relative overflow-x-hidden">
      {/* Tropical Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="tropical-orb tropical-orb-cyan w-[500px] h-[500px] -top-48 -right-48" />
        <div className="tropical-orb tropical-orb-magenta w-[400px] h-[400px] top-1/3 -left-48" />
        <div className="tropical-orb tropical-orb-purple w-[350px] h-[350px] bottom-0 right-1/4" />
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-tropical shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-xl font-bold text-gradient-tropical">
                DeuxyProd
              </span>
              <span className="w-2 h-2 rounded-full bg-tropical-cyan animate-glow-pulse" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                >
                  <span className="mr-1 text-xs">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex flex-col space-y-1.5 p-2 rounded-lg hover:bg-white/5 transition ${
                menuOpen ? "hamburger-open" : ""
              }`}
              aria-label="Menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-tropical border-t border-tropical-cyan/10 px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-tropical-cyan/10 text-tropical-cyan"
                    : "text-gray-400 hover:text-tropical-cyan hover:bg-white/5"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium uppercase tracking-wide">
                  {item.label}
                </span>
                {isActive(item.href) && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-tropical-cyan shadow-glow-cyan" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-20 pb-12 px-4 sm:px-6 max-w-7xl mx-auto min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-tropical-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-gradient-tropical mb-1">
                DeuxyProd
              </h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Créativité & Excellence
              </p>
            </div>

            {/* Quick Nav */}
            <nav className="flex flex-wrap justify-center gap-4">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-gray-500 hover:text-tropical-cyan transition uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-600">
                &copy; {new Date().getFullYear()} DeuxyProd
              </p>
              <p className="text-xs text-gray-700">Tous droits réservés</p>
            </div>
          </div>

          {/* Bottom glow line */}
          <div className="tropical-divider mt-8" />
          <p className="text-center text-[10px] text-gray-700 mt-4 uppercase tracking-widest">
            Made with 🌴 vibes
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        aria-label="Remonter en haut"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}
