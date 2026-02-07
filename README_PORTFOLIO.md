# 🎨 Portfolio DeuxyProd - Documentation Complète

## 📋 Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Fonctionnalités](#fonctionnalités)
3. [Structure du Projet](#structure-du-projet)
4. [Installation](#installation)
5. [Utilisation](#utilisation)
6. [Pages Disponibles](#pages-disponibles)
7. [Personnalisation](#personnalisation)
8. [Déploiement](#déploiement)

---

## 🎯 Vue d'ensemble

Portfolio photographique moderne et interactif développé avec **Next.js 14**, **Swiper** et **Tailwind CSS**. 

Le portfolio présente une collection de photographies en noir et blanc avec **4 modes de visualisation différents** pour une expérience utilisateur optimale.

### 🌟 Points Forts

- ✨ **4 modes de visualisation** (Slides, Plein Écran, Grille, Diaporama)
- 🎨 **Design moderne** et épuré
- 📱 **100% Responsive** (Mobile, Tablette, Desktop)
- ⚡ **Performance optimisée** avec Next.js Image
- 🎬 **Animations fluides** et transitions élégantes
- ⌨️ **Navigation au clavier** complète
- 🔍 **Filtres par catégorie**
- 🖼️ **Lightbox intégré**
- 📊 **Métadonnées complètes** pour chaque photo

---

## 🚀 Fonctionnalités

### Navigation
- Navigation par flèches (← →)
- Navigation au clavier
- Navigation par molette de souris
- Pagination cliquable
- Miniatures de navigation

### Affichage
- Transitions en fondu
- Effet de zoom subtil
- Overlays avec informations
- Mode plein écran
- Lightbox pour agrandissement

### Filtres & Recherche
- Filtrage par catégorie
- Tags thématiques
- Vue d'ensemble en grille

### Diaporama
- Lecture automatique
- Contrôle de vitesse (3s, 5s, 8s)
- Play/Pause
- Barre de progression
- Masquage automatique des contrôles

---

## 📁 Structure du Projet

```
deuxyprod/
│
├── pages/                          # Pages Next.js
│   ├── index.js                   # Page d'accueil (avec slide portfolio)
│   ├── portfolio.js               # Vue slides avec Swiper ⭐
│   ├── portfolio-fullscreen.js    # Vue plein écran ⭐
│   ├── portfolio-index.js         # Page d'accueil portfolio ⭐
│   ├── galerie.js                 # Vue grille avec filtres ⭐
│   ├── slideshow.js               # Diaporama automatique ⭐
│   ├── directeur-artistique.js    # Page service
│   └── entretien.js               # Page service
│
├── components/                     # Composants React
│   ├── Layout.js                  # Layout principal avec navigation
│   ├── PhotoSlider.js             # Composant slide photo ⭐
│   ├── PhotoInfo.js               # Composant infos photo ⭐
│   └── PortfolioNav.js            # Navigation entre vues ⭐
│
├── data/                           # Données
│   └── photos.js                  # Configuration des photos ⭐
│
├── photo/                          # Dossier des photos
│   ├── 20240111-IMG_9907.jpg     # Studio Session
│   ├── 20240106-IMG_9743.jpg     # Street Portrait
│   └── 20240318-IMG_0949.jpg     # Urban Lifestyle
│
├── styles/                         # Styles
│   └── globals.css                # Styles globaux + animations ⭐
│
├── public/                         # Fichiers publics
│   └── images/                    # Images publiques
│
├── PORTFOLIO.md                    # Documentation technique ⭐
├── GUIDE_PORTFOLIO.md              # Guide d'utilisation ⭐
└── README_PORTFOLIO.md             # Ce fichier ⭐

⭐ = Fichiers créés pour le portfolio
```

---

## 💻 Installation

### Prérequis

- Node.js 16+ 
- npm ou yarn

### Étapes

```bash
# 1. Cloner le projet (si nécessaire)
git clone [url-du-repo]
cd deuxyprod

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:3000
```

### Dépendances Principales

```json
{
  "next": "^14.0.4",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "swiper": "^11.0.5",
  "tailwindcss": "^3.3.0"
}
```

---

## 📖 Utilisation

### Accéder au Portfolio

**4 points d'entrée :**

1. **Page d'accueil** → Slide 3 → Bouton "Voir le Portfolio"
2. **Menu de navigation** → Lien "Portfolio"
3. **Menu de navigation** → Lien "Galerie"
4. **URL directe** :
   - `/portfolio-index` - Page d'accueil portfolio
   - `/portfolio` - Vue slides
   - `/portfolio-fullscreen` - Vue plein écran
   - `/galerie` - Vue grille
   - `/slideshow` - Diaporama

### Navigation Clavier

| Touche | Action |
|--------|--------|
| `←` | Photo précédente |
| `→` | Photo suivante |
| `I` | Toggle infos (mode plein écran) |
| `Espace` | Play/Pause (diaporama) |
| `Esc` | Quitter (diaporama) |

---

## 🎨 Pages Disponibles

### 1. `/portfolio-index` - Page d'Accueil Portfolio

**Contenu :**
- Présentation du portfolio
- Statistiques (3 photos, 3 catégories, 4 vues)
- Sélecteur de mode de visualisation
- Aperçu des 3 photos
- Liens vers toutes les vues

**Utilisation :** Point d'entrée principal pour découvrir le portfolio

---

### 2. `/portfolio` - Vue Slides

**Fonctionnalités :**
- Swiper.js avec effet fade
- Navigation : flèches, clavier, molette
- Pagination cliquable
- Compteur de slides
- Informations détaillées par photo
- Overlays avec gradient

**Navigation :**
- Flèches latérales
- Touches ← →
- Molette de souris
- Points de pagination

**Idéal pour :** Présentations professionnelles

---

### 3. `/portfolio-fullscreen` - Mode Plein Écran

**Fonctionnalités :**
- Expérience immersive
- Toggle infos avec touche "I"
- Métadonnées complètes (ISO, ouverture, appareil)
- Tags thématiques
- Miniatures de navigation
- Transitions élégantes

**Commandes :**
- `←` / `→` : Navigation
- `I` : Afficher/masquer infos
- Clic miniatures : Navigation directe

**Idéal pour :** Apprécier les détails des photos

---

### 4. `/galerie` - Vue Grille

**Fonctionnalités :**
- Grille responsive (1-3 colonnes)
- Filtres par catégorie
- Lightbox intégré
- Informations au survol
- Navigation dans le lightbox

**Catégories :**
- Tout
- Studio
- Portrait
- Lifestyle

**Utilisation :**
1. Sélectionner une catégorie
2. Cliquer sur une photo
3. Naviguer dans le lightbox
4. Fermer avec X ou clic extérieur

**Idéal pour :** Explorer rapidement la collection

---

### 5. `/slideshow` - Diaporama

**Fonctionnalités :**
- Lecture automatique
- 3 vitesses (3s, 5s, 8s)
- Play/Pause
- Barre de progression
- Masquage auto des contrôles
- Informations complètes

**Contrôles :**
- Play/Pause
- Vitesse réglable
- Navigation manuelle
- Miniatures

**Commandes Clavier :**
- `Espace` : Play/Pause
- `←` / `→` : Navigation
- `Esc` : Quitter

**Idéal pour :** Présentation automatique

---

## 🔧 Personnalisation

### Ajouter une Photo

**1. Ajouter le fichier**
```
/photo/nouvelle-photo.jpg
```

**2. Éditer `/data/photos.js`**
```javascript
{
  id: 4,
  src: "/photo/nouvelle-photo.jpg",
  title: "Titre",
  date: "01 Mars 2024",
  description: "Description",
  location: "Lieu",
  category: "portrait", // studio, portrait, lifestyle
  camera: "Appareil",
  iso: "400",
  aperture: "f/2.8",
  tags: ["Tag1", "Tag2"],
  featured: true,
  orientation: "portrait" // portrait ou landscape
}
```

**3. Sauvegarder et recharger**

### Modifier les Couleurs

**Fichier :** `/styles/globals.css`

```css
/* Exemple : Changer la couleur principale */
.bg-black {
  background-color: #votre-couleur;
}
```

### Ajouter une Catégorie

**Fichier :** `/data/photos.js`

```javascript
export const categories = [
  // ... catégories existantes
  { id: "nouvelle", label: "Nouvelle", icon: "🎭" }
];
```

### Modifier la Vitesse des Transitions

**Fichier :** `/pages/portfolio.js`

```javascript
speed={800}  // Durée en millisecondes
```

---

## 🚀 Déploiement

### Build de Production

```bash
# Créer le build
npm run build

# Tester le build
npm start
```

### Déployer sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Production
vercel --prod
```

### Déployer sur Netlify

1. Connecter le repo GitHub
2. Build command : `npm run build`
3. Publish directory : `.next`
4. Déployer

### Export Statique

```bash
npm run export
```

Les fichiers seront dans `/out/`

---

## 📊 Statistiques du Projet

- **Pages créées :** 5
- **Composants créés :** 4
- **Lignes de code :** ~2000+
- **Photos incluses :** 3
- **Modes de visualisation :** 4
- **Animations CSS :** 8+

---

## 🎯 Fonctionnalités Futures

- [ ] Mode diaporama avec musique
- [ ] Partage sur réseaux sociaux
- [ ] Téléchargement des photos
- [ ] Commentaires et likes
- [ ] Intégration Instagram API
- [ ] Recherche par tags
- [ ] Vue mosaïque
- [ ] Effets de parallaxe
- [ ] Mode sombre/clair
- [ ] Favoris utilisateur
- [ ] Galerie en plein écran avec zoom
- [ ] Comparaison de photos côte à côte

---

## 🐛 Résolution de Problèmes

### Images ne s'affichent pas

**Solution :**
```bash
# Vérifier que les images sont dans /photo/
# Vérifier next.config.js
images: {
  unoptimized: true
}
```

### Erreur Swiper

**Solution :**
```bash
npm install swiper@latest
rm -rf .next
npm run dev
```

### Build échoue

**Solution :**
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📚 Documentation

- **PORTFOLIO.md** - Documentation technique détaillée
- **GUIDE_PORTFOLIO.md** - Guide d'utilisation complet
- **README_PORTFOLIO.md** - Ce fichier (vue d'ensemble)

---

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

---

## 📄 Licence

© 2024 DeuxyProd - Tous droits réservés

**Photographe :** @ledrevm

---

## 📞 Contact

- **Email :** contact@deuxyprod.com
- **Instagram :** @ledrevm
- **Site Web :** [URL du site]

---

## 🙏 Remerciements

- **Next.js** - Framework React
- **Swiper** - Bibliothèque de slides
- **Tailwind CSS** - Framework CSS
- **Vercel** - Hébergement

---

## 📝 Changelog

### Version 1.0.0 (Février 2024)

**Ajouté :**
- ✅ Vue slides avec Swiper
- ✅ Vue plein écran
- ✅ Vue grille avec filtres
- ✅ Diaporama automatique
- ✅ Page d'accueil portfolio
- ✅ Navigation entre vues
- ✅ Composants réutilisables
- ✅ Système de données centralisé
- ✅ Animations CSS personnalisées
- ✅ Documentation complète

---

**Développé avec ❤️ par DeuxyProd**
