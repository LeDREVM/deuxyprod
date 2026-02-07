# 🎨 Portfolio DeuxyProd

> Portfolio photographique moderne et interactif avec 4 modes de visualisation

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![Swiper](https://img.shields.io/badge/Swiper-11-6332f6)](https://swiperjs.com/)

---

## 📸 Aperçu

Portfolio photographique professionnel présentant une collection de photos en noir et blanc avec une expérience utilisateur optimale. Développé avec Next.js, le portfolio offre 4 modes de visualisation différents pour s'adapter à tous les besoins.

### ✨ Caractéristiques Principales

- 🎬 **4 modes de visualisation** (Slides, Plein Écran, Grille, Diaporama)
- 🎨 **Design moderne** et épuré
- 📱 **100% Responsive** (Mobile, Tablette, Desktop)
- ⚡ **Performance optimisée** avec Next.js Image
- 🎯 **Navigation intuitive** (souris, clavier, tactile)
- 🔍 **Système de filtres** par catégorie
- 🖼️ **Lightbox intégré**
- 📊 **Métadonnées complètes** pour chaque photo

---

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir dans le navigateur
http://localhost:3000
```

---

## 🎯 Les 4 Modes de Visualisation

### 1. 📊 Vue Slides (`/portfolio`)
Navigation fluide par slides avec Swiper.js
- Transitions en fondu élégantes
- Navigation multiple (flèches, clavier, molette)
- Pagination cliquable

### 2. 🖼️ Mode Plein Écran (`/portfolio-fullscreen`)
Expérience immersive sans distraction
- Toggle infos avec touche "I"
- Métadonnées complètes
- Miniatures de navigation

### 3. 📐 Vue Grille (`/galerie`)
Exploration rapide avec filtres
- Grille responsive
- Filtres par catégorie
- Lightbox intégré

### 4. ▶️ Diaporama (`/slideshow`)
Présentation automatique
- Lecture automatique
- Contrôle de vitesse (3s, 5s, 8s)
- Barre de progression

---

## 📂 Structure du Projet

```
deuxyprod/
├── pages/                      # Pages Next.js
│   ├── portfolio.js           # Vue slides
│   ├── portfolio-fullscreen.js # Plein écran
│   ├── galerie.js             # Vue grille
│   ├── slideshow.js           # Diaporama
│   └── portfolio-index.js     # Page d'accueil
├── components/                 # Composants React
│   ├── PhotoSlider.js         # Composant slide
│   ├── PhotoInfo.js           # Infos photo
│   ├── PortfolioNav.js        # Navigation
│   └── HelpModal.js           # Modal d'aide
├── data/                       # Données
│   └── photos.js              # Configuration photos
├── photo/                      # Dossier photos
└── styles/                     # Styles CSS
```

---

## 📸 Ajouter des Photos

### 1. Ajouter le fichier
Placez votre photo dans `/photo/`

### 2. Éditer la configuration
Ouvrez `/data/photos.js` et ajoutez :

```javascript
{
  id: 4,
  src: "/photo/votre-photo.jpg",
  title: "Titre",
  date: "01 Mars 2024",
  description: "Description",
  location: "Lieu",
  category: "portrait",
  camera: "Appareil",
  iso: "400",
  aperture: "f/2.8",
  tags: ["Tag1", "Tag2"],
  featured: true,
  orientation: "portrait"
}
```

### 3. Recharger
Sauvegardez et rechargez la page !

---

## ⌨️ Navigation Clavier

| Touche | Action | Contexte |
|--------|--------|----------|
| `←` `→` | Navigation | Toutes les vues |
| `I` | Toggle infos | Plein écran |
| `Espace` | Play/Pause | Diaporama |
| `Esc` | Quitter | Diaporama, Lightbox |

---

## 🎨 Personnalisation

### Couleurs
Éditez `/styles/globals.css`

### Transitions
Modifiez la vitesse dans `/pages/portfolio.js`

### Catégories
Ajoutez des catégories dans `/data/photos.js`

---

## 📱 Responsive Design

Le portfolio s'adapte automatiquement :
- 📱 **Mobile** : < 768px
- 💻 **Tablette** : 768-1024px
- 🖥️ **Desktop** : > 1024px

---

## 🚀 Déploiement

### Build de Production
```bash
npm run build
npm start
```

### Déployer sur Vercel
```bash
npm i -g vercel
vercel
```

### Déployer sur Netlify
1. Connectez votre repo GitHub
2. Build command : `npm run build`
3. Publish directory : `.next`

---

## 📚 Documentation

- **[DEMARRAGE_RAPIDE.md](DEMARRAGE_RAPIDE.md)** - Lancez-vous en 3 minutes
- **[GUIDE_PORTFOLIO.md](GUIDE_PORTFOLIO.md)** - Guide utilisateur complet
- **[PORTFOLIO.md](PORTFOLIO.md)** - Documentation technique
- **[README_PORTFOLIO.md](README_PORTFOLIO.md)** - Vue d'ensemble
- **[FICHIERS_CREES.md](FICHIERS_CREES.md)** - Liste des fichiers
- **[URLS_PORTFOLIO.txt](URLS_PORTFOLIO.txt)** - URLs disponibles

---

## 🛠️ Technologies

- **[Next.js 14](https://nextjs.org/)** - Framework React
- **[React 18](https://reactjs.org/)** - Bibliothèque UI
- **[Swiper 11](https://swiperjs.com/)** - Système de slides
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Framework CSS
- **[Next/Image](https://nextjs.org/docs/api-reference/next/image)** - Optimisation images

---

## 📊 Statistiques

- **Pages créées** : 5
- **Composants** : 5
- **Photos incluses** : 3
- **Modes de visualisation** : 4
- **Lignes de code** : ~3,800
- **Documentation** : 6 fichiers

---

## 🎯 Fonctionnalités

### Navigation
- ✅ Flèches gauche/droite
- ✅ Clavier (← → I Espace Esc)
- ✅ Molette de souris
- ✅ Tactile (swipe)
- ✅ Pagination cliquable

### Affichage
- ✅ Transitions fluides
- ✅ Overlays élégants
- ✅ Lightbox
- ✅ Mode plein écran
- ✅ Responsive design

### Filtres
- ✅ Par catégorie
- ✅ Par tags
- ✅ Vue d'ensemble

### Diaporama
- ✅ Lecture automatique
- ✅ Contrôle de vitesse
- ✅ Play/Pause
- ✅ Barre de progression

---

## 💡 Astuces

1. **Meilleure expérience** : Utilisez le mode plein écran
2. **Navigation rapide** : Privilégiez le clavier
3. **Explorer** : Utilisez la vue grille avec filtres
4. **Présenter** : Utilisez le diaporama automatique
5. **Mobile** : Glissez horizontalement

---

## 🐛 Résolution de Problèmes

### Images ne s'affichent pas
```bash
# Vérifiez que les images sont dans /photo/
# Vérifiez le chemin dans data/photos.js
```

### Navigation ne fonctionne pas
```bash
# Rechargez avec Ctrl+F5
# Vérifiez la console (F12)
```

### Erreur de build
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

---

## 📄 Licence

© 2024 DeuxyProd - Tous droits réservés

---

## 📞 Contact

- **Email** : contact@deuxyprod.com
- **Instagram** : [@ledrevm](https://instagram.com/ledrevm)
- **Photographe** : @ledrevm

---

## 🎉 Remerciements

- **Next.js** - Framework React performant
- **Swiper** - Bibliothèque de slides élégante
- **Tailwind CSS** - Framework CSS utilitaire
- **Vercel** - Plateforme d'hébergement

---

## 🔗 Liens Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Swiper](https://swiperjs.com/react)
- [Documentation Tailwind](https://tailwindcss.com/docs)

---

## 📝 Changelog

### Version 1.0.0 (Février 2024)

**Ajouté :**
- ✅ 4 modes de visualisation
- ✅ Navigation multi-méthodes
- ✅ Système de filtres
- ✅ Lightbox intégré
- ✅ Diaporama automatique
- ✅ Documentation complète
- ✅ Design responsive
- ✅ Composants réutilisables

---

## 🌟 Fonctionnalités Futures

- [ ] Partage sur réseaux sociaux
- [ ] Téléchargement des photos
- [ ] Commentaires et likes
- [ ] Intégration Instagram API
- [ ] Recherche par tags
- [ ] Mode sombre/clair
- [ ] Favoris utilisateur
- [ ] Vue mosaïque
- [ ] Effets de parallaxe

---

<div align="center">

**Développé avec ❤️ par DeuxyProd**

[Portfolio](http://localhost:3000/portfolio) • [Galerie](http://localhost:3000/galerie) • [Diaporama](http://localhost:3000/slideshow)

</div>
