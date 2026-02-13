# Déploiement avec GitHub + Vercel

## Étape 1: Créer un repo GitHub
1. Allez sur: https://github.com/new
2. Nom: AsYouAre
3. Créez le repo (public ou privé)

## Étape 2: Connecter votre projet local
```bash
git remote add origin https://github.com/VOTRE_USERNAME/AsYouAre.git
git branch -M main
git push -u origin main
```

## Étape 3: Déployer sur Vercel
1. https://vercel.com
2. "Import Project"
3. Sélectionnez votre repo GitHub
4. Vercel détecte Next.js automatiquement
5. Cliquez "Deploy"

## Étape 4: Connecter votre domaine
1. Dans Vercel → Settings → Domains
2. Ajoutez: asyouare.club et www.asyouare.club
3. Suivez les instructions DNS

Fait!
