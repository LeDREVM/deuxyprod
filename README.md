# DeuxyProd

Site web pour DeuxyProd présentant les services de direction artistique et d'entretien d'espaces verts et bâtiment.

## Technologies utilisées

- React
- Next.js
- Swiper
- Tailwind CSS

## Installation

1. Clonez ce dépôt
2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

## Déploiement sur Hostinger

### Préparation du build

1. Créez une version de production optimisée :

```bash
npm run build
# ou
yarn build
```

2. Cette commande va générer un dossier `out` contenant les fichiers statiques du site.

### Déploiement sur Hostinger

1. Connectez-vous à votre compte Hostinger
2. Accédez à votre hébergement web
3. Utilisez le gestionnaire de fichiers ou FTP pour télécharger le contenu du dossier `out` à la racine de votre hébergement (généralement le dossier `public_html`)
4. Assurez-vous que tous les fichiers et dossiers sont correctement transférés

### Configuration supplémentaire (si nécessaire)

Si vous utilisez des routes dynamiques ou des API, vous devrez peut-être configurer des redirections dans le fichier `.htaccess`. Voici un exemple de configuration :

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Structure des dossiers

- `pages/` : Contient les pages principales du site
- `components/` : Composants réutilisables
- `public/` : Fichiers statiques (images, favicon, etc.)
- `styles/` : Fichiers CSS globaux

## Maintenance

Pour mettre à jour le site, modifiez les fichiers nécessaires, puis répétez le processus de build et de déploiement.
