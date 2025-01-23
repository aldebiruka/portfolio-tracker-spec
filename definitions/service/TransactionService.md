# Service Transaction

## Endpoints

### Gestion des transactions
- `GET /api/transactions/{id}` - Détails d'une transaction
- `POST /api/transactions` - Création d'une transaction
- `PUT /api/transactions/{id}` - Mise à jour d'une transaction
- `DELETE /api/transactions/{id}` - Suppression d'une transaction

### Analyse des transactions
- `GET /api/transactions/portfolio/{portfolioId}` - Transactions d'un portfolio
- `GET /api/transactions/position/{positionId}` - Transactions d'une position
- `GET /api/transactions/search` - Recherche de transactions par critères
- `GET /api/transactions/period/{start}/{end}` - Transactions sur une période

### Rapports et exports
- `GET /api/transactions/report/monthly` - Rapport mensuel des transactions
- `GET /api/transactions/report/yearly` - Rapport annuel des transactions
- `GET /api/transactions/export/csv` - Export au format CSV
- `GET /api/transactions/export/pdf` - Export au format PDF

## Règles métiers
- Validation des données de transaction
- Impact automatique sur les positions
- Calcul des frais et taxes
- Conservation de l'historique complet
- Gestion des annulations et corrections

## Règles de sécurité
- Authentification requise
- Vérification des droits d'accès
- Double validation pour les transactions importantes
- Traçabilité des modifications

## Gestion des erreurs
- 400: Données invalides
- 401: Non authentifié
- 403: Non autorisé
- 404: Transaction non trouvée
- 409: Conflit de version
- 422: Fonds insuffisants 