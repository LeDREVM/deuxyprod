// Configuration des créateurs DeuxyProd
// Pour modifier les informations, éditez simplement ce fichier

export const creators = [
  {
    id: 1,
    name: "MonsieurR",
    title: "Directeur Artistique & Producteur",
    aka: "Monsieur R",
    photo: "/images/monsieurr.jpg",
    bio: "Artiste engagé et visionnaire, MonsieurR apporte une dimension unique à chaque projet. Fort d'une expérience riche dans le milieu du rap français et de la production musicale, il allie créativité artistique et conscience sociale.",
    bioExtended: "Sa vision artistique transcende les frontières du conventionnel pour créer des œuvres qui marquent les esprits et portent un message fort. Il excelle dans la création d'identités visuelles percutantes et la direction de projets culturels d'envergure.",
    specialties: [
      "Production Musicale",
      "Direction Artistique",
      "Identité Visuelle",
      "Projets Culturels",
      "Rap & Hip-Hop"
    ],
    achievements: [
      "Plus de 20 ans d'expérience dans le rap français",
      "Fondateur de DeuxyProd",
      "Producteur de nombreux projets musicaux",
      "Directeur artistique pour événements culturels"
    ],
    socials: {
      instagram: "https://instagram.com/monsieurr",
      email: "longvichy@gmail.com",
      website: null
    },
    featured: true
  },
  {
    id: 2,
    name: "LeDREVM",
    title: "Photographe & Directeur Artistique",
    aka: "@ledrevm",
    photo: "/photo/20240106-IMG_9743.jpg",
    bio: "Photographe passionné spécialisé dans la photographie urbaine et le portrait. LeDREVM capture l'essence de la culture street et musicale à travers son objectif, créant des visuels authentiques et percutants.",
    bioExtended: "Son approche artistique mêle sensibilité documentaire et esthétique contemporaine. Chaque cliché raconte une histoire, chaque projet devient une expérience visuelle immersive. Il excelle dans la création de contenus visuels pour artistes et marques.",
    specialties: [
      "Photographie Urbaine",
      "Portrait Artistique",
      "Direction Photo",
      "Identité Visuelle",
      "Culture Hip-Hop"
    ],
    achievements: [
      "Photographe officiel de nombreux artistes",
      "Spécialiste de la photographie argentique",
      "Créateur de contenus visuels pour marques",
      "Expert en culture urbaine et street art"
    ],
    socials: {
      instagram: "https://instagram.com/ledrevm",
      email: "longvichy@gmail.com",
      website: null
    },
    featured: true
  }
];

// Métadonnées de l'équipe
export const teamMeta = {
  name: "OfVision",
  tagline: "Deux visions, une créativité",
  description: "Une équipe créative composée de deux talents complémentaires : MonsieurR et LeDREVM. Ensemble, ils forment un duo artistique unique qui allie production musicale, photographie et direction artistique.",
  email: "longvichy@gmail.com",
  founded: "2015"
};

// Fonctions utilitaires
export const getCreatorById = (id) => {
  return creators.find(creator => creator.id === id);
};

export const getCreatorByName = (name) => {
  return creators.find(creator => 
    creator.name.toLowerCase() === name.toLowerCase() ||
    creator.aka.toLowerCase() === name.toLowerCase()
  );
};

export const getFeaturedCreators = () => {
  return creators.filter(creator => creator.featured);
};

export const getAllSpecialties = () => {
  const allSpecialties = creators.flatMap(creator => creator.specialties);
  return [...new Set(allSpecialties)].sort();
};
