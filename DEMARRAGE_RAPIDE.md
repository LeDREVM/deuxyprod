# 🚀 Démarrage Rapide - Portfolio DeuxyProd

## ⚡ En 3 Minutes

### 1️⃣ Lancer le Projet

```bash
npm run dev
```

Ouvrez votre navigateur : **http://localhost:3000**

---

### 2️⃣ Accéder au Portfolio

**4 façons d'y accéder :**

1. **Page d'accueil** → Slide 3 → Bouton "Voir le Portfolio"
2. **Menu** → Cliquez sur "Portfolio"
3. **Menu** → Cliquez sur "Galerie"
4. **URL directe** :
   - `/portfolio` - Vue slides
   - `/portfolio-fullscreen` - Plein écran
   - `/galerie` - Vue grille
   - `/slideshow` - Diaporama

---

### 3️⃣ Naviguer

**Souris :**
- Cliquez sur les flèches ← →
- Utilisez la molette
- Cliquez sur les points de pagination

**Clavier :**
- `←` `→` : Navigation
- `I` : Toggle infos (plein écran)
- `Espace` : Play/Pause (diaporama)

**Mobile :**
- Glissez gauche/droite

---

## 📸 Ajouter Vos Photos

### Étape 1 : Ajouter le Fichier

Placez votre photo dans `/photo/` :

```
/photo/
├── 20240111-IMG_9907.jpg
├── 20240106-IMG_9743.jpg
├── 20240318-IMG_0949.jpg
└── votre-photo.jpg  ← ICI
```

### Étape 2 : Éditer la Configuration

Ouvrez `/data/photos.js` et ajoutez :

```javascript
{
  id: 4,  // Incrémentez l'ID
  src: "/photo/votre-photo.jpg",
  title: "Titre de la Photo",
  date: "01 Mars 2024",
  description: "Description de la photo",
  location: "Lieu",
  category: "portrait",  // studio, portrait, ou lifestyle
  camera: "Appareil",
  iso: "400",
  aperture: "f/2.8",
  tags: ["Tag1", "Tag2"],
  featured: true,
  orientation: "portrait"
}
```

### Étape 3 : Recharger

Sauvegardez et rechargez la page. C'est tout ! 🎉

---

## 🎨 Les 4 Vues

### 1. Vue Slides (`/portfolio`)
**Idéal pour :** Présentations professionnelles  
**Navigation :** Flèches, clavier, molette

### 2. Plein Écran (`/portfolio-fullscreen`)
**Idéal pour :** Apprécier les détails  
**Touche "I" :** Afficher/masquer les infos

### 3. Grille (`/galerie`)
**Idéal pour :** Explorer rapidement  
**Filtres :** Tout, Studio, Portrait, Lifestyle

### 4. Diaporama (`/slideshow`)
**Idéal pour :** Présentation automatique  
**Vitesses :** 3s, 5s, 8s

---

## 🎯 Raccourcis Clavier

| Touche | Action |
|--------|--------|
| `←` | Photo précédente |
| `→` | Photo suivante |
| `I` | Toggle infos |
| `Espace` | Play/Pause |
| `Esc` | Quitter |

---

## 🔧 Personnalisation Rapide

### Changer les Couleurs

Éditez `/styles/globals.css` :

```css
.bg-black {
  background-color: #votre-couleur;
}
```

### Modifier la Vitesse des Transitions

Dans `/pages/portfolio.js`, ligne ~52 :

```javascript
speed={800}  // Durée en ms
```

### Ajouter une Catégorie

Dans `/data/photos.js` :

```javascript
{ id: "nouvelle", label: "Nouvelle", icon: "🎭" }
```

---

## 📱 Tester sur Mobile

```bash
# Trouvez votre IP locale
ipconfig  # Windows
ifconfig  # Mac/Linux

# Ouvrez sur votre téléphone
http://[votre-ip]:3000
```

---

## 🚀 Déployer

### Vercel (Recommandé)

```bash
npm i -g vercel
vercel
```

### Netlify

1. Connectez votre repo GitHub
2. Build : `npm run build`
3. Publish : `.next`

---

## 🐛 Problèmes Courants

### Images ne s'affichent pas
✅ Vérifiez que les images sont dans `/photo/`  
✅ Vérifiez le chemin dans `photos.js`

### Navigation ne fonctionne pas
✅ Rechargez avec `Ctrl+F5`  
✅ Vérifiez la console (F12)

### Erreur de build
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📚 Documentation Complète

- **Guide Utilisateur :** `GUIDE_PORTFOLIO.md`
- **Documentation Technique :** `PORTFOLIO.md`
- **Vue d'ensemble :** `README_PORTFOLIO.md`
- **Liste des fichiers :** `FICHIERS_CREES.md`

---

## 💡 Astuces

1. **Meilleure expérience :** Mode plein écran
2. **Navigation rapide :** Utilisez le clavier
3. **Mobile :** Glissez horizontalement
4. **Filtres :** Vue grille pour explorer
5. **Diaporama :** Parfait pour les présentations

---

## 📞 Besoin d'Aide ?

- 📧 Email : longvichy@gmail.com
- 📸 Instagram : @ledrevm
- 📚 Documentation : Voir les fichiers `.md`

---

## ✨ C'est Parti !

Votre portfolio est prêt à l'emploi. Lancez simplement :

```bash
npm run dev
```

Et explorez les 4 modes de visualisation ! 🎉

---

**© 2024 DeuxyProd - Tous droits réservés**  
**Photographe :** @ledrevm
