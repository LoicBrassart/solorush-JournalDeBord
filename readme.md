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
  - Créer des databases (projets): `CREATE DATABASE project_name;` ou `CREATE DATABASE project_name OWNER thisIsMe;`
  - Créer des tables (entités): `CREATE TABLE article(id integer not null generated always as identity primary key, title text not null unique);`
- ✅ lier le backend à la bdd
  - packages `pg` (dependency) & `@types/pg` (devDependency)
  - environnement (`dotenv`)
    - créer un .env qui contient toutes les infos sensibles (postgres: host, port, user, password, db ; api: port)
    - ⚠️ ajouter le .env au .gitignore !
  - créer la connexion
    - créer un `Pool` de connexions à PGSQL (import depuis `pg`)
    - appeler les variables d'environnement via `process.env.xxxx`
  - créer une première requête
    - créer une route dédiée (ex: GET /logs)
    - demander au serveur SQL d'exécuter une requête (`db.query`)
- ✅ lier le frontend au backend
  - mon composant a besoin de faire qqc "au lancement" (effect). Il doit:
    - appeler une API (`fetch`)
    - nettoyer le resultat (`.json()`)
    - stocker le resultat et redeclencher un affichage (state)
  - a l'affichage, pour chaque donnée en state j'affiche un fragment de TSX (`.map()`)
  - [Bonus] créer un type TS custom pour avoir l'autocomplétion sur les sous-propriétés de mon state

- créer un PBacklog
- créer un SBacklog
- créer une maquette
