# nestjs-mysql-users



Projet créé avec le framework __NestJS__ et le système de gestion de base de données __MySQL__. Possibilité de créer, récupérer, mettre à jour, supprimer des users, de les relier à une fiche d'identité (relation one-to-one).



## Utilisation

Cloner le projet

Pour lancer l'application:

```
yarn start:dev
```

Dans app.module.ts, remplir les champs username, password, database.

Créer la base de donneées correspondante dans MySQL.

Pour créer un utilisateur, utiliser un outil de requête tel Postman, http://localhost:3000/users, méthode POST, avec un body 

```
{
    "username":"....",
    "password":"...."
}
```
Pour récupérer les utilisateurs, http://localhost:3000/users, méthode GET.

Avec MySQL

```
SELECT * from users;
```
Pour mettre à jour ou effacer un utilisateur via son id,  http://localhost:3000/users/id, méthode PUT ou DELETE.

