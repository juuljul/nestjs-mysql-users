# nestjs-mysql-users



Projet créé avec le framework __NestJS__ et le système de gestion de base de données __MySQL__. Possibilité de créer, récupérer, mettre à jour, supprimer des users, de les relier à une fiche d'identité (relation one-to-one).



## Utilisation

Cloner le projet

Pour lancer l'application:

```
yarn start:dev
```

Dans app.module.ts, remplir les champs username, password, database.

Créer la base de données correspondante dans MySQL.

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

Pour créer une fiche d'identité d'un user avec un certain id
http://localhost:3000/users/id/identies, méthode POST avec un body

```
{
    "firstName":"...",
    "lastName":"...",
    "dateOfBirth":"...",
    "cityOfBirth":"..."
}
```

Pour lire les fiches d'identité dans MySQL

```
SELECT * from user_identities;
```

