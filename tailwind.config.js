/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tropical: {
          dark: '#0a0a1a',
          darker: '#050510',
          navy: '#0d1b2a',
          deep: '#1b2838',
          cyan: '#00FFD1',
          magenta: '#FF006E',
          lime: '#39FF14',
          orange: '#FF6B35',
          purple: '#8B5CF6',
          pink: '#FF61D2',
          blue: '#00B4D8',
          gold: '#FFD60A',
        }
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '100%': { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fadeInUp': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeIn': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slideInRight': {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slideInLeft': {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'zoomIn': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'bounceSubtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'tropical-gradient': 'linear-gradient(135deg, #0a0a1a 0%, #0d1b2a 25%, #1b2838 50%, #0d1b2a 75%, #0a0a1a 100%)',
        'glow-cyan': 'radial-gradient(circle, rgba(0,255,209,0.15) 0%, transparent 70%)',
        'glow-magenta': 'radial-gradient(circle, rgba(255,0,110,0.15) 0%, transparent 70%)',
        'glow-lime': 'radial-gradient(circle, rgba(57,255,20,0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0,255,209,0.3), 0 0 30px rgba(0,255,209,0.1)',
        'glow-magenta': '0 0 15px rgba(255,0,110,0.3), 0 0 30px rgba(255,0,110,0.1)',
        'glow-lime': '0 0 15px rgba(57,255,20,0.3), 0 0 30px rgba(57,255,20,0.1)',
        'glow-purple': '0 0 15px rgba(139,92,246,0.3), 0 0 30px rgba(139,92,246,0.1)',
        'glow-orange': '0 0 15px rgba(255,107,53,0.3), 0 0 30px rgba(255,107,53,0.1)',
        'neon': '0 0 5px currentColor, 0 0 20px currentColor',
      },
    },
  },
  plugins: [],
};
