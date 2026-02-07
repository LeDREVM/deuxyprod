// Configuration centralisée des photos du portfolio
// Pour ajouter une nouvelle photo, ajoutez simplement un objet dans ce tableau

export const photos = [
  {
    id: 1,
    src: "/photo/20240111-IMG_9907.jpg",
    title: "Studio Session",
    date: "11 Janvier 2024",
    description: "Création musicale en studio - L'art de la production",
    location: "Studio d'enregistrement",
    category: "studio",
    camera: "Appareil argentique",
    iso: "400",
    aperture: "f/2.8",
    tags: ["Studio", "Musique", "Production"],
    featured: true,
    orientation: "landscape"
  },
  {
    id: 2,
    src: "/photo/20240106-IMG_9743.jpg",
    title: "Street Portrait",
    date: "06 Janvier 2024",
    description: "Portrait urbain - L'authenticité dans la rue",
    location: "Environnement urbain",
    category: "portrait",
    camera: "Appareil argentique",
    iso: "800",
    aperture: "f/1.8",
    tags: ["Portrait", "Street", "Urbain"],
    featured: true,
    orientation: "portrait"
  },
  {
    id: 3,
    src: "/photo/20240318-IMG_0949.jpg",
    title: "Urban Lifestyle",
    date: "18 Mars 2024",
    description: "Lifestyle urbain - La culture de la rue",
    location: "Espace public",
    category: "lifestyle",
    camera: "Appareil argentique",
    iso: "400",
    aperture: "f/2.0",
    tags: ["Lifestyle", "Culture", "Street"],
    featured: true,
    orientation: "landscape"
  },
  {
    id: 4,
    src: "/photo/20231029-IMG_8587.jpg",
    title: "Session Octobre",
    date: "29 Octobre 2023",
    description: "Capture artistique - L'essence du moment",
    location: "Extérieur",
    category: "lifestyle",
    camera: "Appareil argentique",
    tags: ["Lifestyle", "Artistique", "Automne"],
    featured: false,
    orientation: "portrait"
  },
  {
    id: 5,
    src: "/photo/20240106-IMG_9753.jpg",
    title: "Street Session",
    date: "06 Janvier 2024",
    description: "Ambiance urbaine - La rue comme toile de fond",
    location: "Environnement urbain",
    category: "portrait",
    camera: "Appareil argentique",
    tags: ["Portrait", "Street", "Urbain"],
    featured: false,
    orientation: "portrait"
  },
  {
    id: 6,
    src: "/photo/20240107-IMG_9789.jpg",
    title: "Urban Vibes",
    date: "07 Janvier 2024",
    description: "L'énergie de la ville capturée",
    location: "Environnement urbain",
    category: "portrait",
    camera: "Appareil argentique",
    tags: ["Portrait", "Urban", "Vibes"],
    featured: false,
    orientation: "portrait"
  },
  {
    id: 7,
    src: "/photo/IMG_8396.JPG",
    title: "Artistic Shot",
    date: "2023",
    description: "Capture artistique - Vision créative",
    location: "Studio",
    category: "studio",
    camera: "Appareil argentique",
    tags: ["Studio", "Artistique", "Création"],
    featured: false,
    orientation: "portrait"
  },
  {
    id: 8,
    src: "/photo/IMG_8400.JPG",
    title: "Creative Portrait",
    date: "2023",
    description: "Portrait créatif - L'art du cadrage",
    location: "Studio",
    category: "studio",
    camera: "Appareil argentique",
    tags: ["Studio", "Portrait", "Créatif"],
    featured: false,
    orientation: "portrait"
  }
];

// Catégories disponibles pour le filtrage
export const categories = [
  { id: "all", label: "Tout", icon: "🎨" },
  { id: "studio", label: "Studio", icon: "🎵" },
  { id: "portrait", label: "Portrait", icon: "👤" },
  { id: "lifestyle", label: "Lifestyle", icon: "🌆" }
];

// Métadonnées du portfolio
export const portfolioMeta = {
  photographer: "@ledrevm",
  title: "DeuxyProd Portfolio",
  description: "Collection de photographies en noir et blanc capturant l'essence de la culture urbaine et musicale",
  copyright: "© 2024 DeuxyProd. Tous droits réservés.",
  contact: {
    email: "longvichy@gmail.com",
    instagram: "@ledrevm"
  }
};

// Fonctions utilitaires
export const getPhotoById = (id) => {
  return photos.find(photo => photo.id === id);
};

export const getPhotosByCategory = (category) => {
  if (category === "all") return photos;
  return photos.filter(photo => photo.category === category);
};

export const getFeaturedPhotos = () => {
  return photos.filter(photo => photo.featured);
};

export const getPhotosByTag = (tag) => {
  return photos.filter(photo => photo.tags.includes(tag));
};

export const getAllTags = () => {
  const allTags = photos.flatMap(photo => photo.tags);
  return [...new Set(allTags)].sort();
};
