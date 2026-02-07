# 👥 Guide des Créateurs - DeuxyProd

## 📸 Section Créateurs Ajoutée !

Une nouvelle section a été créée sur la page **Direction Artistique** présentant les deux créateurs de DeuxyProd :

1. **MonsieurR** - Directeur Artistique & Producteur
2. **LeDREVM** - Photographe & Directeur Artistique

---

## 🎨 Ce Qui a Été Créé

### 1. Composant CreatorCard
**Fichier :** `components/CreatorCard.js`

Composant réutilisable pour afficher les informations d'un créateur :
- Photo de profil (ronde avec bordure)
- Nom et titre
- Biographie (courte et étendue)
- Spécialités (badges)
- Réseaux sociaux (Instagram, Email)
- Design responsive et élégant

### 2. Fichier de Données
**Fichier :** `data/creators.js`

Configuration centralisée des créateurs avec :
- Informations complètes (nom, titre, bio, photo)
- Spécialités
- Réalisations
- Réseaux sociaux
- Fonctions utilitaires

### 3. Page Mise à Jour
**Fichier :** `pages/directeur-artistique.js`

La page a été enrichie avec :
- Section "Nos Créateurs"
- Cartes des deux créateurs
- Section CTA (Call-to-Action)
- Design moderne et professionnel

---

## 📸 Ajouter les Photos des Créateurs

### Étape 1 : Préparer les Photos

**Format recommandé :**
- Format : JPG ou PNG
- Dimensions : 800x800px minimum (carré)
- Poids : < 2MB
- Style : Portrait professionnel

**Nommage suggéré :**
- `monsieurr.jpg` pour MonsieurR
- `ledrevm.jpg` pour LeDREVM

### Étape 2 : Placer les Photos

Placez les photos dans le dossier `/public/images/` :

```
/public/images/
├── directeur-artistique.jpg
├── entretien-espaces-verts.jpg
├── monsieurr.jpg          ← Nouvelle photo
└── ledrevm.jpg            ← Nouvelle photo
```

### Étape 3 : Mettre à Jour la Configuration

Ouvrez `/data/creators.js` et modifiez les chemins des photos :

**Pour MonsieurR :**
```javascript
{
  id: 1,
  name: "MonsieurR",
  photo: "/images/monsieurr.jpg",  // ← Changez null en chemin
  // ... reste des infos
}
```

**Pour LeDREVM :**
```javascript
{
  id: 2,
  name: "LeDREVM",
  photo: "/images/ledrevm.jpg",  // ← Changez le chemin si nécessaire
  // ... reste des infos
}
```

### Étape 4 : Recharger la Page

Sauvegardez et rechargez la page :
```
http://localhost:3000/directeur-artistique
```

---

## ✏️ Modifier les Informations des Créateurs

### Fichier à Éditer
`data/creators.js`

### Informations Modifiables

#### Nom et Titre
```javascript
name: "MonsieurR",
title: "Directeur Artistique & Producteur",
aka: "Monsieur R",
```

#### Biographie
```javascript
bio: "Courte biographie (2-3 lignes)",
bioExtended: "Biographie détaillée (3-4 lignes)",
```

#### Spécialités
```javascript
specialties: [
  "Production Musicale",
  "Direction Artistique",
  "Identité Visuelle",
  "Projets Culturels",
  "Rap & Hip-Hop"
],
```

#### Réalisations
```javascript
achievements: [
  "Plus de 20 ans d'expérience",
  "Fondateur de DeuxyProd",
  "Producteur de nombreux projets",
  "Directeur artistique pour événements"
],
```

#### Réseaux Sociaux
```javascript
socials: {
  instagram: "https://instagram.com/monsieurr",
  email: "monsieurr@deuxyprod.com",
  website: "https://monsieurr.com"  // Optionnel
},
```

---

## 🎨 Personnalisation du Design

### Modifier les Couleurs

**Fichier :** `components/CreatorCard.js`

**Couleur des badges de spécialités :**
```javascript
// Ligne ~60
className="px-4 py-2 bg-black text-white rounded-full"
// Changez bg-black en bg-votre-couleur
```

**Bordure de la photo :**
```javascript
// Ligne ~9
className="... border-4 border-gray-200 ..."
// Changez border-gray-200 en border-votre-couleur
```

### Modifier la Disposition

**Alterner les côtés :**
```javascript
// Dans directeur-artistique.js, ligne ~95
<CreatorCard 
  creator={creator} 
  reverse={index % 2 !== 0}  // Alterne gauche/droite
/>
```

**Toujours à gauche :**
```javascript
<CreatorCard 
  creator={creator} 
  reverse={false}  // Toujours photo à gauche
/>
```

---

## 📱 Aperçu de la Section

### Desktop
- Photo circulaire à gauche (ou droite en alternance)
- Informations à droite (ou gauche)
- Badges de spécialités
- Liens vers réseaux sociaux

### Mobile
- Photo en haut (centrée)
- Informations en dessous
- Layout vertical adapté

---

## 🔧 Ajouter un Troisième Créateur

### Étape 1 : Ajouter dans `data/creators.js`

```javascript
{
  id: 3,
  name: "Nouveau Créateur",
  title: "Titre/Fonction",
  aka: "Pseudo",
  photo: "/images/nouveau-createur.jpg",
  bio: "Biographie courte",
  bioExtended: "Biographie détaillée",
  specialties: [
    "Spécialité 1",
    "Spécialité 2",
    "Spécialité 3"
  ],
  achievements: [
    "Réalisation 1",
    "Réalisation 2"
  ],
  socials: {
    instagram: "https://instagram.com/pseudo",
    email: "email@deuxyprod.com"
  },
  featured: true
}
```

### Étape 2 : Ajouter la Photo

Placez la photo dans `/public/images/nouveau-createur.jpg`

### Étape 3 : Recharger

La carte apparaîtra automatiquement sur la page !

---

## 🌟 Fonctionnalités de la Section

### Cartes Créateurs
- ✅ Photo de profil circulaire
- ✅ Nom et titre
- ✅ Biographie complète
- ✅ Badges de spécialités
- ✅ Liens réseaux sociaux
- ✅ Design responsive
- ✅ Alternance gauche/droite

### Effets Visuels
- ✅ Hover sur les cartes (ombre)
- ✅ Hover sur les liens sociaux
- ✅ Transitions fluides
- ✅ Design moderne

### Responsive
- ✅ Desktop : disposition horizontale
- ✅ Tablette : adaptation automatique
- ✅ Mobile : disposition verticale

---

## 📊 Structure de la Page

```
Page Direction Artistique
│
├── Section Services (existante)
│   ├── Image
│   └── Description des services
│
├── Section Créateurs (nouvelle) ⭐
│   ├── Titre et introduction
│   ├── Carte MonsieurR
│   └── Carte LeDREVM
│
└── Section CTA (nouvelle) ⭐
    ├── Titre et description
    └── Boutons d'action
```

---

## 🎯 Exemples de Modifications Courantes

### Changer l'Email de Contact

**Fichier :** `data/creators.js`

```javascript
socials: {
  email: "nouveau-email@deuxyprod.com"
}
```

### Ajouter un Site Web

```javascript
socials: {
  instagram: "...",
  email: "...",
  website: "https://monsite.com"
}
```

Puis dans `CreatorCard.js`, ajoutez le lien :
```javascript
{creator.socials.website && (
  <a href={creator.socials.website} target="_blank">
    <svg>...</svg>
    <span>Site Web</span>
  </a>
)}
```

### Modifier les Spécialités

```javascript
specialties: [
  "Nouvelle Spécialité 1",
  "Nouvelle Spécialité 2",
  "Nouvelle Spécialité 3"
]
```

---

## 🐛 Résolution de Problèmes

### La Photo ne S'affiche Pas

**Vérifiez :**
1. Le fichier est dans `/public/images/`
2. Le chemin dans `creators.js` est correct
3. Le nom du fichier correspond exactement
4. Rechargez avec Ctrl+F5

**Si photo = null :**
Une initiale sera affichée en placeholder

### Les Informations ne se Mettent Pas à Jour

```bash
# Arrêtez le serveur (Ctrl+C)
# Relancez
npm run dev
```

### Erreur d'Import

Vérifiez que l'import est correct dans `directeur-artistique.js` :
```javascript
import { creators } from "../data/creators";
```

---

## 📞 Contact

Pour toute question sur la section créateurs :
- 📧 Email : contact@deuxyprod.com
- 📸 Instagram : @ledrevm

---

## ✨ Résumé

**Fichiers créés :**
- ✅ `components/CreatorCard.js` - Composant de carte créateur
- ✅ `data/creators.js` - Configuration des créateurs
- ✅ `GUIDE_CREATEURS.md` - Ce guide

**Fichiers modifiés :**
- ✅ `pages/directeur-artistique.js` - Ajout de la section créateurs

**Pour ajouter les photos :**
1. Placez les photos dans `/public/images/`
2. Modifiez les chemins dans `/data/creators.js`
3. Rechargez la page

**C'est tout ! 🎉**

---

**© 2024 DeuxyProd - Tous droits réservés**
