// Configuration des vidéos et playlists YouTube
// Pour ajouter de nouvelles vidéos, ajoutez-les simplement à ce fichier

export const playlists = [
  {
    id: 1,
    title: "Créations Artistiques",
    description: "Collection de créations musicales et visuelles",
    playlistId: "PLniFU1EmwtN8TvGH_T_6uRaoZFUJPCpHe",
    thumbnail: "https://img.youtube.com/vi/HaC_CaTa-UU/maxresdefault.jpg",
    category: "musique",
    videos: [
      {
        id: "HaC_CaTa-UU",
        title: "Création Artistique #1",
        description: "Première création de la série"
      }
    ]
  },
  {
    id: 2,
    title: "NO TIME - TIITII NBA x DJ SKAYLONE",
    description: "NO TIME feat DJ SKAYLONE - Bouyon 2026",
    playlistId: "PLniFU1EmwtN8TvGH_T_6uRaoZFUJPCpHe",
    thumbnail: "https://img.youtube.com/vi/qvmxC0Izumo/maxresdefault.jpg",
    category: "musique",
    videos: [
      {
        id: "qvmxC0Izumo",
        title: "NO TIME - TIITII NBA x DJ SKAYLONE",
        description: "NO TIME feat DJ SKAYLONE - Bouyon 2026"
      }
    ]
  },
];

export const featuredVideos = [
  {
    id: "HaC_CaTa-UU",
    title: "Création Artistique Principale",
    description: "Découvrez notre dernière création artistique",
    thumbnail: "https://img.youtube.com/vi/HaC_CaTa-UU/maxresdefault.jpg",
    category: "musique"
  },
  {
    id: "qvmxC0Izumo",
    title: "NO TIME - TIITII NBA x DJ SKAYLONE",
    description: "NO TIME feat DJ SKAYLONE - Bouyon 2026",
    thumbnail: "https://img.youtube.com/vi/qvmxC0Izumo/maxresdefault.jpg",
    category: "musique"
  },
];

// Informations de la chaîne YouTube
export const channelInfo = {
  name: "@ledrevm",
  url: "https://www.youtube.com/@ledrevm",
  description: "Chaîne officielle de OfVision"
};

// Catégories disponibles
export const categories = [
  { id: "all", label: "Tout" },
  { id: "musique", label: "Musique" },
  { id: "video", label: "Vidéo" },
  { id: "clip", label: "Clip" },
  { id: "live", label: "Live" }
];
