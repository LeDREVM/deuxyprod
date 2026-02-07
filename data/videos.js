// Configuration des vidéos et playlists YouTube
// Organisé par artiste — Direction Artistique OfVision

export const artists = [
  {
    id: "minut",
    name: "MINUT",
    color: "cyan",
    videos: [
      {
        id: "ae8cI4EWUbM",
        title: "MINUT - Clip 1",
        thumbnail: "https://img.youtube.com/vi/ae8cI4EWUbM/maxresdefault.jpg",
      },
      {
        id: "kY8doMptjN0",
        title: "MINUT - Clip 2",
        thumbnail: "https://img.youtube.com/vi/kY8doMptjN0/maxresdefault.jpg",
      },
      {
        id: "yVIn98aRn6w",
        title: "MINUT - Clip 3",
        thumbnail: "https://img.youtube.com/vi/yVIn98aRn6w/maxresdefault.jpg",
      },
    ],
  },
  {
    id: "tiitii-nba",
    name: "TIITII NBA",
    color: "magenta",
    videos: [
      {
        id: "qvmxC0Izumo",
        title: "NO TIME - TIITII NBA x DJ SKAYLONE",
        thumbnail: "https://img.youtube.com/vi/qvmxC0Izumo/maxresdefault.jpg",
      },
      {
        id: "qzjaFBHJjiM",
        title: "TIITII NBA - Clip 2",
        thumbnail: "https://img.youtube.com/vi/qzjaFBHJjiM/maxresdefault.jpg",
      },
    ],
  },
  {
    id: "saik",
    name: "SAIK",
    color: "lime",
    videos: [
      {
        id: "dhNH_S8Z2E0",
        title: "SAIK - Clip 1",
        thumbnail: "https://img.youtube.com/vi/dhNH_S8Z2E0/maxresdefault.jpg",
      },
      {
        id: "aZ9A8rY23jI",
        title: "SAIK - Clip 2",
        thumbnail: "https://img.youtube.com/vi/aZ9A8rY23jI/maxresdefault.jpg",
      },
    ],
  },
];

export const playlists = [
  {
    id: 1,
    title: "Créations Artistiques",
    description: "Collection complète de créations musicales et visuelles",
    playlistId: "PLniFU1EmwtN8TvGH_T_6uRaoZFUJPCpHe",
    thumbnail: "https://img.youtube.com/vi/HaC_CaTa-UU/maxresdefault.jpg",
    category: "musique",
    videos: [
      {
        id: "HaC_CaTa-UU",
        title: "Création Artistique #1",
        description: "Première création de la série",
      },
    ],
  },
];

// Toutes les vidéos en vedette (une par artiste)
export const featuredVideos = [
  {
    id: "ae8cI4EWUbM",
    title: "MINUT",
    description: "Direction Artistique OfVision",
    thumbnail: "https://img.youtube.com/vi/ae8cI4EWUbM/maxresdefault.jpg",
    category: "musique",
  },
  {
    id: "qvmxC0Izumo",
    title: "NO TIME - TIITII NBA x DJ SKAYLONE",
    description: "Direction Artistique OfVision",
    thumbnail: "https://img.youtube.com/vi/qvmxC0Izumo/maxresdefault.jpg",
    category: "musique",
  },
  {
    id: "dhNH_S8Z2E0",
    title: "SAIK",
    description: "Direction Artistique OfVision",
    thumbnail: "https://img.youtube.com/vi/dhNH_S8Z2E0/maxresdefault.jpg",
    category: "musique",
  },
];

// Informations de la chaîne YouTube
export const channelInfo = {
  name: "@ledrevm",
  url: "https://www.youtube.com/@ledrevm",
  description: "Chaîne officielle de OfVision",
};

// Catégories disponibles
export const categories = [
  { id: "all", label: "Tout" },
  { id: "musique", label: "Musique" },
  { id: "video", label: "Vidéo" },
  { id: "clip", label: "Clip" },
  { id: "live", label: "Live" },
];
