# User (Utilisateur)

## Attributs
- id: Identifiant unique
- email: Adresse email (unique)
- provider: Fournisseur d'authentification (Google/Facebook)
- providerId: Identifiant unique du fournisseur
- role: Rôle de l'utilisateur (USER/ADMIN)
- firstName: Prénom
- lastName: Nom
- createdAt: Date de création
- updatedAt: Date de dernière mise à jour

## Relations
- Possède plusieurs Portfolio (ONE-TO-MANY)
- Possède plusieurs Watchlists (ONE-TO-MANY)
- Possède plusieurs Alerts (ONE-TO-MANY)

## Règles métiers
- L'email doit être unique et valide
- On délègue l'authentification à Google ou Facebook
- Synchronisation automatique des informations de profil
- Le prénom et le nom sont obligatoires
- Seul un administrateur peut créer d'autres administrateurs
- Un administrateur a accès à toutes les fonctionnalités
- un administrateur peut créer des portfolios pour un utilisateur
- un administrateur peut créer des retraits pour un utilisateur
- un administrateur peut créer des depots pour un utilisateur

