# Endpoints Harmonisés des Services

## Convention de nommage
- URLs en minuscules
- Utilisation de kebab-case pour les mots composés
- Version de l'API en préfixe (/api/v1/...)
- Ressources au pluriel
- Actions en verbes
- Paramètres de filtrage en query string

## Services Principaux

### Authentication (/api/v1/auth)
- `GET /auth/providers` - Liste des fournisseurs d'authentification
- `GET /auth/login/{provider}` - Connexion via provider
- `GET /auth/callback/{provider}` - Callback OAuth2
- `POST /auth/refresh` - Rafraîchissement du token
- `POST /auth/logout` - Déconnexion

### Users (/api/v1/users)
- `GET /users` - Liste des utilisateurs
- `GET /users/{id}` - Détail d'un utilisateur
- `PUT /users/{id}` - Mise à jour d'un utilisateur
- `DELETE /users/{id}` - Suppression d'un utilisateur
- `GET /users/{id}/portfolios` - Portfolios d'un utilisateur
- `GET /users/{id}/watchlists` - Watchlists d'un utilisateur
- `GET /users/{id}/alerts` - Alertes d'un utilisateur

### Portfolios (/api/v1/portfolios)
- `GET /portfolios` - Liste des portfolios
- `POST /portfolios` - Création d'un portfolio
- `GET /portfolios/{id}` - Détail d'un portfolio
- `PUT /portfolios/{id}` - Mise à jour d'un portfolio
- `DELETE /portfolios/{id}` - Suppression d'un portfolio
- `GET /portfolios/{id}/positions` - Positions d'un portfolio
- `GET /portfolios/{id}/transactions` - Transactions d'un portfolio
- `GET /portfolios/{id}/dividends` - Dividendes d'un portfolio
- `GET /portfolios/{id}/cash-flows` - Mouvements de trésorerie
- `GET /portfolios/{id}/performance` - Performance du portfolio

### Positions (/api/v1/positions)
- `GET /positions` - Liste des positions
- `POST /positions` - Création d'une position
- `GET /positions/{id}` - Détail d'une position
- `PUT /positions/{id}` - Mise à jour d'une position
- `DELETE /positions/{id}` - Suppression d'une position
- `GET /positions/{id}/transactions` - Transactions d'une position
- `GET /positions/{id}/dividends` - Dividendes d'une position
- `GET /positions/{id}/performance` - Performance d'une position

### Transactions (/api/v1/transactions)
- `GET /transactions` - Liste des transactions
- `POST /transactions` - Création d'une transaction
- `GET /transactions/{id}` - Détail d'une transaction
- `PUT /transactions/{id}` - Mise à jour d'une transaction
- `DELETE /transactions/{id}` - Suppression d'une transaction
- `POST /transactions/{id}/cancel` - Annulation d'une transaction
- `GET /transactions/{id}/history` - Historique des modifications

### Dividends (/api/v1/dividends)
- `GET /dividends` - Liste des dividendes
- `POST /dividends` - Création d'un dividende
- `GET /dividends/{id}` - Détail d'un dividende
- `PUT /dividends/{id}` - Mise à jour d'un dividende
- `DELETE /dividends/{id}` - Suppression d'un dividende
- `GET /dividends/calendar` - Calendrier des dividendes
- `GET /dividends/stats` - Statistiques des dividendes

### Market Data (/api/v1/market)
- `GET /market/search` - Recherche d'actifs
- `GET /market/quotes/{symbol}` - Prix en temps réel
- `GET /market/history/{symbol}` - Historique des prix
- `GET /market/dividends/{symbol}` - Historique des dividendes
- `GET /market/categories` - Liste des catégories
- `GET /market/regions` - Liste des régions

### Watchlists (/api/v1/watchlists)
- `GET /watchlists` - Liste des watchlists
- `POST /watchlists` - Création d'une watchlist
- `GET /watchlists/{id}` - Détail d'une watchlist
- `PUT /watchlists/{id}` - Mise à jour d'une watchlist
- `DELETE /watchlists/{id}` - Suppression d'une watchlist
- `POST /watchlists/{id}/symbols` - Ajout de symboles
- `DELETE /watchlists/{id}/symbols/{symbol}` - Retrait d'un symbole

### Alerts (/api/v1/alerts)
- `GET /alerts` - Liste des alertes
- `POST /alerts` - Création d'une alerte
- `GET /alerts/{id}` - Détail d'une alerte
- `PUT /alerts/{id}` - Mise à jour d'une alerte
- `DELETE /alerts/{id}` - Suppression d'une alerte
- `PUT /alerts/{id}/status` - Changement de statut
- `GET /alerts/history` - Historique des déclenchements

### Reports (/api/v1/reports)
- `GET /reports/portfolios` - Rapport des portfolios
- `GET /reports/transactions` - Rapport des transactions
- `GET /reports/dividends` - Rapport des dividendes
- `GET /reports/performance` - Rapport de performance
- `POST /reports/export` - Export des données

## Paramètres de Filtrage Standards
Pour tous les endpoints GET listant des ressources :
- `page`: Numéro de page (défaut: 1)
- `limit`: Éléments par page (défaut: 20)
- `sort`: Champ de tri
- `order`: Ordre de tri (asc/desc)
- `startDate`: Date de début
- `endDate`: Date de fin
- `status`: Statut
- `type`: Type
- `search`: Terme de recherche

## Formats de Réponse Standards
```json
{
  "data": [],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 0
  },
  "links": {
    "self": "",
    "first": "",
    "prev": null,
    "next": null,
    "last": ""
  }
}
```

## Codes HTTP
- 200: Succès
- 201: Création réussie
- 204: Suppression réussie
- 400: Requête invalide
- 401: Non authentifié
- 403: Non autorisé
- 404: Ressource non trouvée
- 422: Erreur de validation
- 429: Trop de requêtes
