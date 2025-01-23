# Service Utilisateur

## Endpoints

### Gestion des utilisateurs
- `GET /api/auth/google` - Authentification via Google
- `GET /api/auth/facebook` - Authentification via Facebook
- `GET /api/auth/callback` - Callback OAuth2
- `GET /api/auth/refresh` - Rafraîchissement du token JWT
- `GET /api/users/{id}` - Récupération d'un utilisateur
- `PUT /api/users/{id}` - Mise à jour d'un utilisateur
- `DELETE /api/users/{id}` - Suppression d'un utilisateur

### Gestion des portfolios d'un utilisateur
- `GET /api/users/{id}/portfolios` - Liste des portfolios
- `POST /api/users/{id}/portfolios` - Création d'un portfolio
- `PUT /api/users/{id}/portfolios/{portfolioId}` - Mise à jour d'un portfolio
- `DELETE /api/users/{id}/portfolios/{portfolioId}` - Suppression d'un portfolio

## Règles métiers
- Authentification requise pour toutes les opérations
- Gestion des tokens OAuth2
- Synchronisation des données utilisateur avec Google/Facebook
- Vérification des droits d'accès
- Validation des données entrantes

## Règles de sécurité
- JWT Token obligatoire
- Gestion sécurisée des tokens OAuth2
- Validation des domaines autorisés
- Rate limiting sur les endpoints

## Gestion des erreurs
- 400: Données invalides
- 401: Non authentifié
- 402: Erreur d'authentification OAuth2
- 403: Non autorisé
- 404: Ressource non trouvée
- 429: Trop de requêtes 