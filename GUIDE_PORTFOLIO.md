# 📸 Guide d'Utilisation du Portfolio DeuxyProd

## 🚀 Démarrage Rapide

### Lancer le Projet

```bash
# Installer les dépendances (si ce n'est pas déjà fait)
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir dans le navigateur
# http://localhost:3000
```

## 🎨 Les Différentes Vues du Portfolio

### 1. Page d'Accueil du Portfolio
**URL:** `/portfolio-index`

Page d'accueil présentant :
- Vue d'ensemble du portfolio
- Statistiques (nombre de photos, catégories, vues)
- Sélecteur de mode de visualisation
- Aperçu des photos

**Idéal pour :** Découvrir le portfolio et choisir son mode de visualisation préféré.

---

### 2. Vue Slides (Swiper)
**URL:** `/portfolio`

**Fonctionnalités :**
- ✨ Transitions en fondu élégantes
- 🖱️ Navigation par flèches, clavier (← →) ou molette
- 📱 Pagination cliquable
- 📊 Compteur de slides
- 🎯 Informations détaillées pour chaque photo

**Navigation :**
- Cliquez sur les flèches latérales
- Utilisez les touches ← et → du clavier
- Faites défiler avec la molette de la souris
- Cliquez sur les points de pagination

**Idéal pour :** Une présentation fluide et professionnelle, parfait pour les présentations.

---

### 3. Mode Plein Écran
**URL:** `/portfolio-fullscreen`

**Fonctionnalités :**
- 🖼️ Expérience immersive sans distraction
- ⌨️ Touche "I" pour afficher/masquer les informations
- 🏷️ Tags thématiques
- 📷 Métadonnées techniques complètes
- 🎨 Miniatures de navigation

**Commandes Clavier :**
- `←` / `→` : Navigation entre les photos
- `I` : Toggle affichage des informations

**Navigation :**
- Flèches latérales
- Miniatures en bas (quand les infos sont masquées)
- Clavier

**Idéal pour :** Une expérience de visualisation immersive, parfait pour apprécier les détails.

---

### 4. Vue Grille (Galerie)
**URL:** `/galerie`

**Fonctionnalités :**
- 🎯 Filtres par catégorie (Tout, Studio, Portrait, Lifestyle)
- 🔍 Lightbox pour agrandir les photos
- 🖼️ Vue d'ensemble de toutes les photos
- 📱 Design responsive en grille
- ℹ️ Informations au survol

**Utilisation :**
1. Sélectionnez une catégorie en haut
2. Cliquez sur une photo pour l'agrandir
3. Naviguez dans le lightbox avec les flèches
4. Fermez avec le bouton X ou en cliquant à l'extérieur

**Idéal pour :** Explorer rapidement toute la collection et filtrer par thème.

---

## 📂 Ajouter de Nouvelles Photos

### Méthode Simple

1. **Ajoutez votre photo** dans le dossier `/photo/`
   ```
   /photo/
   ├── 20240111-IMG_9907.jpg
   ├── 20240106-IMG_9743.jpg
   ├── 20240318-IMG_0949.jpg
   └── votre-nouvelle-photo.jpg  ← Ici
   ```

2. **Éditez le fichier** `/data/photos.js`
   ```javascript
   {
     id: 4,  // Incrémentez l'ID
     src: "/photo/votre-nouvelle-photo.jpg",
     title: "Titre de Votre Photo",
     date: "01 Février 2024",
     description: "Description détaillée de la photo",
     location: "Lieu de prise de vue",
     category: "portrait",  // studio, portrait, ou lifestyle
     camera: "Appareil utilisé",
     iso: "400",
     aperture: "f/2.8",
     tags: ["Tag1", "Tag2", "Tag3"],
     featured: true,  // Afficher sur la page d'accueil
     orientation: "portrait"  // portrait ou landscape
   }
   ```

3. **Sauvegardez** et rechargez la page !

### Catégories Disponibles
- `studio` : Photos de studio, musique, production
- `portrait` : Portraits, photos de personnes
- `lifestyle` : Lifestyle urbain, culture de rue

### Conseils pour les Photos
- **Format recommandé :** JPEG
- **Résolution :** Minimum 1920px sur le côté le plus long
- **Poids :** Optimisez vos images (< 5MB recommandé)
- **Style :** Noir et blanc pour cohérence avec le portfolio actuel

---

## 🎨 Personnalisation

### Modifier les Couleurs

Éditez `/styles/globals.css` :

```css
/* Exemple : Changer la couleur d'accent */
.bg-black {
  background-color: #votre-couleur;
}
```

### Modifier les Animations

Les animations sont définies dans `/styles/globals.css` :
- `fadeInUp` : Apparition depuis le bas
- `fadeIn` : Fondu simple
- `slideInRight` : Glissement depuis la droite
- `zoomIn` : Zoom avant

### Ajouter une Nouvelle Catégorie

1. Dans `/data/photos.js`, ajoutez à `categories` :
   ```javascript
   { id: "nouvelle", label: "Nouvelle Catégorie", icon: "🎭" }
   ```

2. Utilisez cette catégorie dans vos photos :
   ```javascript
   category: "nouvelle"
   ```

---

## 🔧 Configuration Avancée

### Modifier les Transitions Swiper

Dans `/pages/portfolio.js`, ligne ~52 :

```javascript
speed={800}  // Durée de la transition en ms
```

### Désactiver la Navigation par Molette

Dans `/pages/portfolio.js`, supprimez :

```javascript
mousewheel={{
  forceToAxis: true,
}}
```

### Changer le Nombre de Photos par Ligne (Galerie)

Dans `/pages/galerie.js`, ligne ~86 :

```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                              ↑ Changez ce nombre
```

---

## 📱 Responsive Design

Le portfolio est optimisé pour :
- 📱 **Mobile** : < 768px - Navigation tactile
- 💻 **Tablette** : 768px - 1024px - Layout adapté
- 🖥️ **Desktop** : > 1024px - Expérience complète

### Tester sur Mobile

```bash
# Dans le terminal
npm run dev

# Ouvrez sur votre téléphone
# http://[votre-ip-locale]:3000
```

---

## 🚀 Déploiement

### Build de Production

```bash
# Créer le build
npm run build

# Exporter en statique (si nécessaire)
npm run export
```

### Déployer sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Déployer sur Netlify

1. Connectez votre repo GitHub
2. Build command : `npm run build`
3. Publish directory : `.next`

---

## 🐛 Résolution de Problèmes

### Les images ne s'affichent pas

**Solution :** Vérifiez que :
- Les images sont bien dans `/photo/`
- Le chemin dans `photos.js` est correct : `/photo/nom-fichier.jpg`
- Next.js a `images: { unoptimized: true }` dans `next.config.js`

### La navigation ne fonctionne pas

**Solution :** 
- Vérifiez la console du navigateur (F12)
- Assurez-vous que Swiper est installé : `npm install swiper`
- Rechargez la page avec Ctrl+F5

### Erreur de build

**Solution :**
```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📊 Structure des Fichiers

```
deuxyprod/
├── pages/
│   ├── portfolio.js              # Vue slides avec Swiper
│   ├── portfolio-fullscreen.js   # Vue plein écran
│   ├── portfolio-index.js        # Page d'accueil portfolio
│   └── galerie.js                # Vue grille avec filtres
├── components/
│   ├── Layout.js                 # Layout principal
│   ├── PhotoSlider.js            # Composant slide
│   ├── PhotoInfo.js              # Composant infos photo
│   └── PortfolioNav.js           # Navigation entre vues
├── data/
│   └── photos.js                 # Configuration des photos
├── photo/
│   └── *.jpg                     # Vos photos
├── styles/
│   └── globals.css               # Styles globaux
└── public/
    └── images/                   # Images publiques
```

---

## 💡 Astuces & Bonnes Pratiques

### Optimiser les Images

Avant d'ajouter des photos :

```bash
# Installer ImageMagick
# Puis optimiser :
convert input.jpg -quality 85 -resize 2000x2000\> output.jpg
```

### Nommer les Fichiers

Convention recommandée :
```
YYYYMMDD-NOM-DESCRIPTIF.jpg
20240318-portrait-studio.jpg
```

### Sauvegarder Régulièrement

```bash
git add .
git commit -m "Ajout de nouvelles photos"
git push
```

### Tester sur Plusieurs Navigateurs

- ✅ Chrome / Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (iOS / Android)

---

## 📞 Support

Pour toute question ou problème :
- 📧 Email : contact@deuxyprod.com
- 📸 Instagram : @ledrevm
- 📝 Documentation complète : `PORTFOLIO.md`

---

## 🎉 Fonctionnalités à Venir

- [ ] Mode diaporama automatique
- [ ] Partage sur réseaux sociaux
- [ ] Téléchargement des photos
- [ ] Commentaires et likes
- [ ] Intégration Instagram
- [ ] Recherche par tags
- [ ] Galerie en mosaïque
- [ ] Effets de parallaxe

---

**© 2024 DeuxyProd - Tous droits réservés**
Photographe : @ledrevm
