# Service Données de Marché

## Endpoints

### Recherche et données de marché
- `GET /api/market/search?q={query}` - Recherche d'actifs
- `GET /api/market/quote/{symbol}` - Prix en temps réel
- `GET /api/market/history/{symbol}` - Historique des prix
- `GET /api/market/info/{symbol}` - Informations détaillées sur un actif
- `GET /api/market/categories` - Liste des catégories disponibles
- `GET /api/market/regions` - Liste des régions disponibles
- `GET /api/market/analysis/category` - Répartition par catégorie
- `GET /api/market/analysis/region` - Répartition par région

## Règles métiers
- Mise en cache des données de marché
- Limitation du nombre de requêtes par utilisateur
- Validation des symboles
- Mise à jour automatique des catégories et régions
- Calcul des statistiques de diversification

## Règles de sécurité
- Authentification requise
- Rate limiting strict
- Validation des sources de données

## Gestion des erreurs
- 400: Symbole invalide
- 404: Actif non trouvé
- 429: Limite de requêtes atteinte
- 503: Service de données indisponible 