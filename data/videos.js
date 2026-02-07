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
  // Ajoutez d'autres playlists ici
  // {
  //   id: 2,
  //   title: "Nouvelle Playlist",
  //   description: "Description de la playlist",
  //   playlistId: "VOTRE_PLAYLIST_ID",
  //   thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  //   category: "video",
  //   videos: []
  // }
];

export const featuredVideos = [
  {
    id: "HaC_CaTa-UU",
    title: "Création Artistique Principale",
    description: "Découvrez notre dernière création artistique",
    thumbnail: "https://img.youtube.com/vi/HaC_CaTa-UU/maxresdefault.jpg",
    category: "musique"
  },
  // Ajoutez d'autres vidéos en vedette ici
  // {
  //   id: "VIDEO_ID",
  //   title: "Titre de la vidéo",
  //   description: "Description",
  //   thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  //   category: "video"
  // }
];

// Informations de la chaîne YouTube
export const channelInfo = {
  name: "@ledrevm",
  url: "https://www.youtube.com/@ledrevm",
  description: "Chaîne officielle de DeuxyProd"
};

// Catégories disponibles
export const categories = [
  { id: "all", label: "Tout" },
  { id: "musique", label: "Musique" },
  { id: "video", label: "Vidéo" },
  { id: "clip", label: "Clip" },
  { id: "live", label: "Live" }
];
