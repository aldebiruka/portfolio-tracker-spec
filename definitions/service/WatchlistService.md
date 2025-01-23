# Service Watchlist

## Endpoints

### Gestion des watchlists
- `GET /api/watchlists` - Liste des watchlists de l'utilisateur
- `POST /api/watchlists` - Création d'une watchlist
- `PUT /api/watchlists/{id}` - Mise à jour d'une watchlist
- `DELETE /api/watchlists/{id}` - Suppression d'une watchlist

### Gestion des symboles
- `POST /api/watchlists/{id}/symbols` - Ajout d'un symbole
- `DELETE /api/watchlists/{id}/symbols/{symbol}` - Retrait d'un symbole
- `GET /api/watchlists/{id}/quotes` - Prix en temps réel des symboles
- `GET /api/watchlists/{id}/analysis` - Analyse des symboles surveillés

## Règles métiers
- Validation des symboles ajoutés
- Mise à jour en temps réel des données
- Limitation du nombre de symboles
- Gestion des doublons

## Règles de sécurité
- Authentification requise
- Vérification des droits d'accès
- Rate limiting sur les requêtes de données
- Protection contre les abus

## Gestion des erreurs
- 400: Données invalides
- 401: Non authentifié
- 403: Non autorisé
- 404: Watchlist non trouvée
- 429: Trop de requêtes 