# Déploiement Manuel (FTP/cPanel)

## Étape 1: Build de Production
```bash
npm run build
```

## Étape 2: Exporter le Site (Static)
```bash
# Ajoutez dans next.config.ts:
output: 'export'

# Puis:
npm run build
```

Le dossier `out/` contiendra votre site statique.

## Étape 3: Upload via FTP
1. Connectez-vous à votre hébergement (FileZilla, cPanel, etc.)
2. Uploadez tout le contenu du dossier `out/` vers `public_html/` ou `www/`
3. Assurez-vous que `index.html` est à la racine

## Note:
Pour Next.js avec fonctionnalités serveur, vous aurez besoin d'un hébergement Node.js
ou utilisez Vercel/Netlify (recommandé).
