# 📸 Guide Rapide - Ajouter des Photos au Portfolio

## ⚡ En 3 Étapes

### Étape 1️⃣ : Placer la Photo

**Mettez votre photo dans :** `/public/photo/`

```
deuxyprod/
└── public/
    └── photo/
        ├── 20240111-IMG_9907.jpg
        ├── 20240106-IMG_9743.jpg
        ├── 20240318-IMG_0949.jpg
        └── ma-nouvelle-photo.jpg  ← ICI
```

**⚠️ ATTENTION :**
- ❌ **PAS** dans `/photo/` (ancien dossier)
- ✅ **OUI** dans `/public/photo/`

---

### Étape 2️⃣ : Ajouter la Configuration

**Ouvrez :** `/data/photos.js`

**Ajoutez à la fin du tableau `photos` :**

```javascript
export const photos = [
  // ... photos existantes ...
  
  // Votre nouvelle photo
  {
    id: 4,                              // Incrémentez le dernier ID
    src: "/photo/ma-nouvelle-photo.jpg", // Chemin commence par /photo/
    title: "Titre de Ma Photo",
    date: "07 Février 2024",
    description: "Description de la photo",
    location: "Lieu de prise de vue",
    category: "portrait",               // studio, portrait, ou lifestyle
    camera: "Appareil argentique",
    iso: "400",
    aperture: "f/2.8",
    tags: ["Tag1", "Tag2", "Tag3"],
    featured: true,
    orientation: "portrait"             // portrait ou landscape
  }
];
```

---

### Étape 3️⃣ : Recharger

**Dans le navigateur :**
- Rechargez la page (F5 ou Ctrl+F5)
- Votre photo apparaît ! 🎉

---

## 📋 Catégories Disponibles

Choisissez une catégorie pour votre photo :

| Catégorie | Description | Exemple |
|-----------|-------------|---------|
| `studio` | Photos de studio, musique, production | Session d'enregistrement |
| `portrait` | Portraits, photos de personnes | Portrait urbain |
| `lifestyle` | Lifestyle urbain, culture de rue | Scène de vie urbaine |

---

## 🎨 Conseils pour les Photos

### Format et Qualité
- **Format :** JPEG ou PNG
- **Résolution :** Minimum 1920px sur le côté le plus long
- **Poids :** < 5MB recommandé (optimisez vos images)
- **Style :** Noir et blanc pour cohérence

### Nommage des Fichiers
**Convention recommandée :**
```
YYYYMMDD-description.jpg
20240207-portrait-studio.jpg
```

**Évitez :**
- ❌ Espaces : `ma photo.jpg`
- ❌ Caractères spéciaux : `photo@#$.jpg`
- ❌ Accents : `café.jpg`

**Préférez :**
- ✅ Tirets : `ma-photo.jpg`
- ✅ Underscores : `ma_photo.jpg`
- ✅ CamelCase : `maPhoto.jpg`

---

## 🔍 Vérification Rapide

### Checklist avant de recharger :

- [ ] Photo placée dans `/public/photo/`
- [ ] Nom du fichier sans espaces ni caractères spéciaux
- [ ] Configuration ajoutée dans `/data/photos.js`
- [ ] ID incrémenté (pas de doublon)
- [ ] Chemin `src` commence par `/photo/`
- [ ] Catégorie valide (studio, portrait, ou lifestyle)
- [ ] Tags ajoutés (au moins 1)

---

## 🐛 Problèmes Courants

### La photo ne s'affiche pas

**Vérifiez :**

1. **Emplacement du fichier**
   ```bash
   # Doit être ici :
   /public/photo/ma-photo.jpg
   
   # PAS ici :
   /photo/ma-photo.jpg
   ```

2. **Chemin dans photos.js**
   ```javascript
   // Correct :
   src: "/photo/ma-photo.jpg"
   
   // Incorrect :
   src: "photo/ma-photo.jpg"      // Manque le /
   src: "/public/photo/ma-photo.jpg"  // Trop long
   ```

3. **Nom du fichier**
   - Respectez les majuscules/minuscules
   - `Photo.jpg` ≠ `photo.jpg`

4. **Syntaxe JSON**
   ```javascript
   // Correct :
   {
     id: 4,
     src: "/photo/image.jpg",
     title: "Titre"
   }
   
   // Incorrect (virgule manquante) :
   {
     id: 4
     src: "/photo/image.jpg"
   }
   ```

### Erreur dans la console

**Si vous voyez :** `GET /photo/image.jpg 404`

**Solution :**
- Le fichier n'est pas dans `/public/photo/`
- Déplacez-le au bon endroit

---

## 📂 Structure Complète

```
deuxyprod/
│
├── public/                    ← Fichiers accessibles publiquement
│   ├── photo/                ← ⭐ VOS PHOTOS ICI
│   │   ├── 20240111-IMG_9907.jpg
│   │   ├── 20240106-IMG_9743.jpg
│   │   ├── 20240318-IMG_0949.jpg
│   │   └── ma-nouvelle-photo.jpg  ← Nouvelle photo
│   │
│   └── images/               ← Autres images (logos, etc.)
│       ├── directeur-artistique.jpg
│       └── entretien-espaces-verts.jpg
│
├── data/
│   └── photos.js            ← ⭐ CONFIGURATION ICI
│
└── photo/                   ← ⚠️ NE PAS UTILISER (ancien)
```

---

## 🎯 Exemple Complet

### 1. Fichier Photo
**Emplacement :** `/public/photo/20240207-concert.jpg`

### 2. Configuration
**Fichier :** `/data/photos.js`

```javascript
export const photos = [
  // Photos existantes...
  {
    id: 1,
    src: "/photo/20240111-IMG_9907.jpg",
    title: "Studio Session",
    // ...
  },
  {
    id: 2,
    src: "/photo/20240106-IMG_9743.jpg",
    title: "Street Portrait",
    // ...
  },
  {
    id: 3,
    src: "/photo/20240318-IMG_0949.jpg",
    title: "Urban Lifestyle",
    // ...
  },
  
  // Nouvelle photo
  {
    id: 4,
    src: "/photo/20240207-concert.jpg",
    title: "Concert Live",
    date: "07 Février 2024",
    description: "Performance live lors d'un concert urbain",
    location: "Salle de concert",
    category: "studio",
    camera: "Appareil argentique",
    iso: "800",
    aperture: "f/1.8",
    tags: ["Concert", "Live", "Musique"],
    featured: true,
    orientation: "landscape"
  }
];
```

### 3. Résultat
- ✅ Photo visible sur `/portfolio`
- ✅ Photo visible sur `/galerie`
- ✅ Photo visible sur `/slideshow`
- ✅ Photo visible sur `/portfolio-fullscreen`

---

## 🚀 Commandes Utiles

### Vérifier que le fichier existe
```bash
# Windows PowerShell
Test-Path "public\photo\ma-photo.jpg"

# Doit afficher : True
```

### Lister toutes les photos
```bash
# Windows PowerShell
Get-ChildItem "public\photo\*.jpg"
```

### Copier une photo
```bash
# Windows PowerShell
Copy-Item "chemin\source\photo.jpg" "public\photo\"
```

---

## 📊 Où Apparaissent les Photos ?

Une fois ajoutée, votre photo apparaît automatiquement sur :

| Page | URL | Description |
|------|-----|-------------|
| **Portfolio Slides** | `/portfolio` | Navigation par slides |
| **Plein Écran** | `/portfolio-fullscreen` | Vue immersive |
| **Galerie** | `/galerie` | Grille avec filtres |
| **Diaporama** | `/slideshow` | Lecture automatique |
| **Page d'accueil** | `/portfolio-index` | Si `featured: true` |

---

## 💡 Astuces

### Optimiser les Photos Avant de les Ajouter

**En ligne :**
- TinyJPG : https://tinyjpg.com/
- Squoosh : https://squoosh.app/

**Ligne de commande (ImageMagick) :**
```bash
# Redimensionner et optimiser
convert input.jpg -quality 85 -resize 2000x2000> output.jpg
```

### Organiser par Date
```
/public/photo/
├── 20240111-IMG_9907.jpg
├── 20240206-IMG_9743.jpg
├── 20240318-IMG_0949.jpg
└── 20240207-concert.jpg  ← Format YYYYMMDD
```

### Sauvegarder Régulièrement
```bash
git add public/photo/
git add data/photos.js
git commit -m "Ajout nouvelle photo: Concert Live"
git push
```

---

## 📞 Besoin d'Aide ?

**Documentation complète :**
- `GUIDE_PORTFOLIO.md` - Guide utilisateur complet
- `README_PORTFOLIO.md` - Vue d'ensemble
- `DEMARRAGE_RAPIDE.md` - Démarrage en 3 minutes

**Support :**
- 📧 Email : contact@deuxyprod.com
- 📸 Instagram : @ledrevm

---

## ✅ Résumé Ultra-Rapide

1. **Photo** → `/public/photo/ma-photo.jpg`
2. **Config** → `/data/photos.js` (ajouter l'objet)
3. **Recharger** → F5 dans le navigateur

**C'est tout ! 🎉**

---

**© 2024 DeuxyProd - Tous droits réservés**  
**Photographe :** @ledrevm
