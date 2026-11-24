# Initialisation

Quel que soit le projet:

- ✅ créer un readme
- ✅ initialiser un frontend
  - `npm create vite@latest frontend`
    - React
    - Typesrcipt
    - ESLint
    - Installer et demarrer: Y
  - nettoyer le sous-dossier créé
    - supprimer frontend/src/\*.css
    - supprimer les appels au css dans frontend/src/\*.tsx
    - vider le fichier frontend/src/App.tsx
    - supprimer dossier frontend/src/assets
    - supprimer frontend/public/icons.svg
- ✅ initialiser un backend
  - `git clone git@github.com:LoicBrassart/dwwm-ts-backend-express-template.git backend`
    - supprimer le .git à l'interieur
  - créer le .env
  - nettoyer le sous-dossier
    - retirer la route GET/pokemon
    - créer une route GET/ simple
- ✅ envoyer les sous-dossier sur GHub
  - git remote add origin git@github.com:LoicBrassart/solorush-JournalDeBord.git
  - git push -u origin main
- ✅ utiliser le git workflow (main < dev < features)

On choisit le sujet, puis:

- ✅ initialiser une bdd
  - Créer des users:
    - superuser (tous les droits): `CREATE ROLE thisIsMe WITH LOGIN SUPERUSER PASSWORD 'myP@ssw0rd';`
    - user classique: `CREATE ROLE thisIsMe WITH LOGIN PASSWORD 'myP@ssw0rd';`
  - Créer des databases (projets): `CREATE DATABASE projetc_name;`
  - Créer des tables (entités): `CREATE TABLE table_name( id integer not null generated always as identity primary key, name text not null unique);`

- ✅ lier le backend à la bdd
  - packages `pg` & `@types/pg`
  - environnement (`dotenv`)
  - créer la connexion
  - créer une première requête

- lier le frontend au backend

- créer un PBacklog
- créer un SBacklog
- créer une maquette
