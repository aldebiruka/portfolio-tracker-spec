# Service Portfolio

## Endpoints

### Gestion des portfolios
- `GET /api/portfolios` - Liste des portfolios de l'utilisateur connecté
- `GET /api/portfolios/{id}` - Détails d'un portfolio
- `POST /api/admin/portfolios` - Création d'un portfolio (admin)
- `DELETE /api/admin/portfolios/{id}` - Suppression d'un portfolio (admin)
- `PUT /api/admin/portfolios/{id}/user/{userId}` - Attribution d'un portfolio à un utilisateur (admin)
- `DELETE /api/admin/portfolios/{id}/user/{userId}` - Retrait d'un portfolio à un utilisateur (admin)

### Gestion des positions
- `GET /api/portfolios/{id}/positions` - Liste des positions
- `POST /api/portfolios/{id}/positions` - Ajout d'une position
- `PUT /api/portfolios/{id}/positions/{positionId}` - Mise à jour d'une position
- `DELETE /api/portfolios/{id}/positions/{positionId}` - Suppression d'une position

### Gestion des transactions
- `GET /api/portfolios/{id}/transactions` - Liste des transactions
- `POST /api/portfolios/{id}/transactions` - Ajout d'une transaction
- `PUT /api/portfolios/{id}/transactions/{transactionId}` - Mise à jour d'une transaction
- `DELETE /api/portfolios/{id}/transactions/{transactionId}` - Suppression d'une transaction

### Gestion des retraits
- `GET /api/portfolios/{id}/retraits` - Liste des retraits
- `POST /api/portfolios/{id}/retraits` - Ajout d'une retrait
- `PUT /api/portfolios/{id}/retraits/{retraitId}` - Mise à jour d'un retrait
- `DELETE /api/portfolios/{id}/retraits/{retraitId}` - Suppression d'un retrait

### Gestion des depots
- `GET /api/portfolios/{id}/depots` - Liste des depots
- `POST /api/portfolios/{id}/depots` - Ajout d'un depot
- `PUT /api/portfolios/{id}/depots/{depotId}` - Mise à jour d'un depot
- `DELETE /api/portfolios/{id}/depots/{depotId}` - Suppression d'un depot

### Gestion de l'historique des transactions
- `GET /api/portfolios/{id}/transactions/{transactionId}/history` - Historique d'une transaction
- `GET /api/portfolios/{id}/transactions/history` - Historique complet des transactions du portfolio
- `POST /api/portfolios/{id}/transactions/{transactionId}/history/comment` - Ajouter un commentaire à l'historique

## Règles métiers
- Seul l'administrateur peut créer/supprimer des portfolios
- Seul l'administrateur peut attribuer/retirer des portfolios aux utilisateurs
- Vérification des droits d'accès au portfolio
- Mise à jour automatique des positions lors d'une transaction
- Validation des données de transaction
- Traçabilité complète des modifications de transactions
- Conservation de l'historique des modifications
- Possibilité d'ajouter des commentaires explicatifs

## Règles de sécurité
- Authentification requise
- Vérification du propriétaire du portfolio
- Rate limiting sur les endpoints
- Accès en lecture seule à l'historique
- Seul le propriétaire du portfolio peut commenter l'historique

## Gestion des erreurs
- 400: Données invalides
- 401: Non authentifié
- 403: Non autorisé
- 404: Ressource non trouvée
- 409: Conflit de version lors de la modification 