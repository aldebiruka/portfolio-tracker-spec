# Service Position

## Endpoints

### Gestion des positions
- `GET /api/positions/{id}` - Détails d'une position
- `GET /api/positions/search` - Recherche de positions par critères
- `GET /api/positions/categories/{category}` - Liste des positions par catégorie
- `GET /api/positions/regions/{region}` - Liste des positions par région

### Analyse des positions
- `GET /api/positions/{id}/performance` - Performance détaillée d'une position
- `GET /api/positions/{id}/history` - Historique des modifications
- `GET /api/positions/analysis/risk` - Analyse des risques par position
- `GET /api/positions/analysis/correlation` - Analyse des corrélations entre positions

## Règles métiers
- Calcul automatique des performances
- Mise à jour en temps réel des valeurs
- Validation des données de marché
- Gestion des devises et conversions

## Règles de sécurité
- Authentification requise
- Vérification des droits d'accès
- Rate limiting sur les endpoints
- Protection contre la manipulation des données

## Gestion des erreurs
- 400: Données invalides
- 401: Non authentifié
- 403: Non autorisé
- 404: Position non trouvée
- 409: Conflit de données 