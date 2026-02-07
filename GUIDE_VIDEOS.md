# 📹 Guide d'Ajout de Vidéos YouTube

## 🎯 Comment Ajouter des Vidéos et Playlists

### 📍 Fichier à Modifier

Toutes les vidéos et playlists sont configurées dans :
```
data/videos.js
```

---

## 🎬 Ajouter une Vidéo en Vedette

### 1. Trouver l'ID de la Vidéo YouTube

Dans l'URL YouTube :
```
https://www.youtube.com/watch?v=HaC_CaTa-UU
                                 ^^^^^^^^^^^^
                                 C'est l'ID !
```

### 2. Ajouter dans `featuredVideos`

```javascript
export const featuredVideos = [
  {
    id: "HaC_CaTa-UU",                    // ID de la vidéo
    title: "Titre de la Vidéo",           // Titre affiché
    description: "Description courte",     // Description
    thumbnail: "https://img.youtube.com/vi/HaC_CaTa-UU/maxresdefault.jpg",
    category: "musique"                    // Catégorie
  },
  // Ajoutez votre nouvelle vidéo ici
  {
    id: "NOUVEAU_VIDEO_ID",
    title: "Ma Nouvelle Vidéo",
    description: "Description de ma vidéo",
    thumbnail: "https://img.youtube.com/vi/NOUVEAU_VIDEO_ID/maxresdefault.jpg",
    category: "clip"
  }
];
```

---

## 📋 Ajouter une Playlist

### 1. Trouver l'ID de la Playlist

Dans l'URL YouTube :
```
https://www.youtube.com/playlist?list=PLniFU1EmwtN8TvGH_T_6uRaoZFUJPCpHe
                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                       C'est l'ID de la playlist !
```

### 2. Ajouter dans `playlists`

```javascript
export const playlists = [
  {
    id: 1,                                // ID unique (numéro)
    title: "Nom de la Playlist",          // Titre
    description: "Description",            // Description
    playlistId: "PLniFU1EmwtN8TvGH_T_6uRaoZFUJPCpHe", // ID YouTube
    thumbnail: "https://img.youtube.com/vi/PREMIERE_VIDEO_ID/maxresdefault.jpg",
    category: "musique",
    videos: []                             // Optionnel
  },
  // Ajoutez votre nouvelle playlist ici
  {
    id: 2,
    title: "Ma Nouvelle Playlist",
    description: "Collection de vidéos",
    playlistId: "VOTRE_PLAYLIST_ID",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
    category: "video",
    videos: []
  }
];
```

---

## 🏷️ Catégories Disponibles

```javascript
- "musique"  // Créations musicales
- "video"    // Vidéos diverses
- "clip"     // Clips musicaux
- "live"     // Performances live
```

---

## 🖼️ Thumbnails (Miniatures)

YouTube génère automatiquement des miniatures :

### Qualités disponibles :
```javascript
// Haute qualité (1280x720)
`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`

// Qualité moyenne (480x360)
`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`

// Qualité standard (320x180)
`https://img.youtube.com/vi/${VIDEO_ID}/mqdefault.jpg`
```

**Recommandé** : Utilisez `maxresdefault.jpg` pour la meilleure qualité.

---

## 📝 Exemple Complet

```javascript
// data/videos.js

export const playlists = [
  {
    id: 1,
    title: "Créations Artistiques 2026",
    description: "Nos meilleures créations de l'année",
    playlistId: "PLniFU1EmwtN8TvGH_T_6uRaoZFUJPCpHe",
    thumbnail: "https://img.youtube.com/vi/HaC_CaTa-UU/maxresdefault.jpg",
    category: "musique",
    videos: []
  },
  {
    id: 2,
    title: "Clips Officiels",
    description: "Collection de clips musicaux",
    playlistId: "PL_VOTRE_AUTRE_PLAYLIST",
    thumbnail: "https://img.youtube.com/vi/AUTRE_VIDEO/maxresdefault.jpg",
    category: "clip",
    videos: []
  }
];

export const featuredVideos = [
  {
    id: "HaC_CaTa-UU",
    title: "Dernière Création",
    description: "Notre création la plus récente",
    thumbnail: "https://img.youtube.com/vi/HaC_CaTa-UU/maxresdefault.jpg",
    category: "musique"
  },
  {
    id: "AUTRE_VIDEO_ID",
    title: "Clip du Moment",
    description: "Le clip qui cartonne",
    thumbnail: "https://img.youtube.com/vi/AUTRE_VIDEO_ID/maxresdefault.jpg",
    category: "clip"
  }
];
```

---

## 🔄 Après Modification

1. **Sauvegardez** le fichier `data/videos.js`
2. **Rechargez** la page `/creations` dans votre navigateur
3. Les nouvelles vidéos apparaissent automatiquement !

---

## 🎨 Personnalisation

### Modifier la Chaîne YouTube

Dans `data/videos.js` :

```javascript
export const channelInfo = {
  name: "@ledrevm",                        // Nom de la chaîne
  url: "https://www.youtube.com/@ledrevm", // URL de la chaîne
  description: "Chaîne officielle de DeuxyProd"
};
```

### Ajouter des Catégories

```javascript
export const categories = [
  { id: "all", label: "Tout" },
  { id: "musique", label: "Musique" },
  { id: "video", label: "Vidéo" },
  { id: "clip", label: "Clip" },
  { id: "live", label: "Live" },
  // Ajoutez vos catégories
  { id: "tutorial", label: "Tutoriels" },
  { id: "behind", label: "Coulisses" }
];
```

---

## 🚀 Fonctionnalités

### ✅ Ce qui est Disponible

- ✅ **Lecteur intégré** : Regardez les vidéos sans quitter le site
- ✅ **Modal fullscreen** : Expérience immersive
- ✅ **Liens YouTube** : Accès direct à YouTube
- ✅ **Playlists complètes** : Lecteur de playlist intégré
- ✅ **Responsive** : Fonctionne sur mobile et desktop
- ✅ **Thumbnails automatiques** : Miniatures générées par YouTube

---

## 💡 Astuces

### 🎯 Trouver l'ID d'une Vidéo Rapidement

1. Ouvrez la vidéo sur YouTube
2. Regardez l'URL dans la barre d'adresse
3. Copiez ce qui vient après `watch?v=`

### 🎯 Trouver l'ID d'une Playlist

1. Ouvrez la playlist sur YouTube
2. Regardez l'URL
3. Copiez ce qui vient après `list=`

### 🎯 Vérifier si une Miniature Existe

Collez l'URL de la miniature dans votre navigateur :
```
https://img.youtube.com/vi/VOTRE_VIDEO_ID/maxresdefault.jpg
```

Si elle ne charge pas, utilisez `hqdefault.jpg` à la place.

---

## 📞 Support

Pour toute question sur l'ajout de vidéos, consultez la documentation YouTube :
- [YouTube API - Thumbnails](https://developers.google.com/youtube/v3/docs/thumbnails)
- [YouTube Embed Player](https://developers.google.com/youtube/player_parameters)

---

**Créé le** : 7 février 2026  
**Dernière mise à jour** : 7 février 2026
