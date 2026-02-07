# Portfolio DeuxyProd

## 📸 Présentation

Portfolio photographique interactif développé avec Next.js et Swiper, présentant une collection de photos en noir et blanc de haute qualité.

## 🎨 Fonctionnalités

### Version Standard (`/portfolio`)
- **Navigation fluide** : Système de slides avec transitions en fondu
- **Interface moderne** : Design épuré avec overlays et gradients
- **Navigation multiple** :
  - Flèches gauche/droite
  - Clavier (← →)
  - Molette de la souris
  - Pagination cliquable
- **Informations détaillées** : Titre, description, date, localisation pour chaque photo
- **Compteur de slides** : Affichage de la position actuelle
- **Responsive** : Adapté à tous les écrans

### Version Fullscreen (`/portfolio-fullscreen`)
- **Expérience immersive** : Mode plein écran sans distraction
- **Toggle d'informations** : Touche "I" pour afficher/masquer les détails
- **Métadonnées enrichies** :
  - Tags thématiques
  - Informations techniques (appareil, localisation)
  - Watermark photographe
- **Transitions élégantes** : Animations fluides entre les slides
- **Navigation intuitive** : Miniatures en bas de page

## 🖼️ Photos Incluses

1. **Studio Session** (11 Janvier 2024)
   - Création musicale en studio
   - Tags: Studio, Musique, Production

2. **Street Portrait** (06 Janvier 2024)
   - Portrait urbain authentique
   - Tags: Portrait, Street, Urbain

3. **Urban Lifestyle** (18 Mars 2024)
   - Culture de la rue
   - Tags: Lifestyle, Culture, Street

## 🚀 Utilisation

### Accès au Portfolio

1. **Depuis la page d'accueil** : Slide dédié avec bouton "Voir le Portfolio"
2. **Menu de navigation** : Lien "Portfolio" dans le header
3. **URL directe** :
   - `/portfolio` - Version standard
   - `/portfolio-fullscreen` - Version plein écran

### Commandes Clavier

#### Version Standard
- `←` / `→` : Navigation entre les slides
- Molette de souris : Changement de slide

#### Version Fullscreen
- `←` / `→` : Navigation entre les slides
- `I` : Toggle affichage des informations
- Clic sur les miniatures : Navigation directe

## 🛠️ Technologies

- **Next.js 14** : Framework React
- **Swiper 11** : Bibliothèque de slides
- **Tailwind CSS** : Styling
- **Next/Image** : Optimisation des images

## 📁 Structure des Fichiers

```
deuxyprod/
├── pages/
│   ├── portfolio.js              # Version standard avec Swiper
│   └── portfolio-fullscreen.js   # Version fullscreen personnalisée
├── components/
│   ├── Layout.js                 # Layout avec navigation
│   └── PhotoSlider.js            # Composant de slide réutilisable
├── photo/
│   ├── 20240111-IMG_9907.jpg    # Studio Session
│   ├── 20240106-IMG_9743.jpg    # Street Portrait
│   └── 20240318-IMG_0949.jpg    # Urban Lifestyle
└── PORTFOLIO.md                  # Cette documentation
```

## 🎯 Personnalisation

### Ajouter des Photos

1. Placez vos images dans le dossier `/photo/`
2. Ajoutez les métadonnées dans le tableau `photos` :

```javascript
{
  src: "/photo/votre-image.jpg",
  title: "Titre de la Photo",
  date: "JJ Mois AAAA",
  description: "Description détaillée",
  location: "Lieu de prise de vue",
  camera: "Appareil utilisé",
  tags: ["Tag1", "Tag2", "Tag3"]
}
```

### Modifier les Styles

Les styles sont personnalisables via :
- Classes Tailwind CSS dans les composants
- Balises `<style jsx global>` pour les styles Swiper
- Fichier `styles/globals.css` pour les styles globaux

## 🌟 Améliorations Futures

- [ ] Lightbox pour agrandir les photos
- [ ] Filtres par tags
- [ ] Mode diaporama automatique
- [ ] Partage sur réseaux sociaux
- [ ] Téléchargement des photos (avec autorisation)
- [ ] Galerie en grille alternative
- [ ] Commentaires et likes
- [ ] Intégration avec un CMS

## 📱 Responsive Design

Le portfolio est entièrement responsive :
- **Mobile** : Navigation tactile optimisée
- **Tablette** : Layout adapté
- **Desktop** : Expérience plein écran

## 🎨 Design System

### Couleurs
- **Fond** : Noir (#000000)
- **Texte principal** : Blanc (#FFFFFF)
- **Texte secondaire** : Gris (#9CA3AF)
- **Accents** : Blanc avec opacité variable

### Typographie
- **Titres** : Bold, 48-60px
- **Descriptions** : Light, 20-24px
- **Métadonnées** : Regular, 12-14px

### Animations
- **Transitions** : 800ms ease
- **Hover** : 300ms ease
- **Fade** : 700ms ease

## 📄 Licence

© 2024 DeuxyProd - Tous droits réservés
Photographe : @ledrevm

---

**Note** : Ce portfolio est conçu pour mettre en valeur des photographies professionnelles avec une expérience utilisateur optimale.
