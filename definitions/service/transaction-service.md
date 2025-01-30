# Service Transaction

## Endpoints

### Gestion des transactions
- `GET /api/transactions/{id}` - Détails d'une transaction
- `POST /api/transactions` - Création d'une nouvelle transaction
  - Paramètres requis :
    - portfolioId: UUID
    - positionId: UUID
    - type: ACHAT/VENTE
    - quantity: decimal
    - price: decimal
    - fees: decimal
    - date: timestamp
- `PUT /api/transactions/{id}` - Mise à jour d'une transaction existante
  - Paramètres modifiables :
    - quantity: decimal
    - price: decimal
    - fees: decimal
    - date: timestamp
    - comment: string
- `DELETE /api/transactions/{id}` - Suppression d'une transaction
  - Crée automatiquement une entrée dans l'historique
  - Met à jour la position associée

### Analyse des transactions
- `GET /api/transactions/portfolio/{portfolioId}` - Transactions d'un portfolio
  - Paramètres optionnels:
    - startDate: date
    - endDate: date
    - type: ACHAT/VENTE
    - symbol: string
    - limit: integer
    - offset: integer
- `GET /api/transactions/position/{positionId}` - Transactions d'une position
  - Paramètres optionnels identiques
- `GET /api/transactions/search` - Recherche de transactions par critères
  - Critères de recherche:
    - portfolioIds: UUID[]
    - positionIds: UUID[]
    - symbols: string[]
    - types: ACHAT/VENTE[]
    - dateRange: { start: date, end: date }
    - minAmount: decimal
    - maxAmount: decimal
- `GET /api/transactions/period/{start}/{end}` - Transactions sur une période

### Validation des transactions
- `POST /api/transactions/validate` - Validation préalable d'une transaction
  - Vérifie:
    - Solde suffisant pour les achats
    - Quantité suffisante pour les ventes
    - Validité des données (prix, quantités, etc.)
- `POST /api/transactions/{id}/cancel` - Annulation d'une transaction
  - Crée une transaction inverse
  - Conserve l'historique

### Rapports et exports
- `GET /api/transactions/report/monthly` - Rapport mensuel des transactions
  - Paramètres:
    - year: integer
    - month: integer
    - format: PDF/CSV/EXCEL
- `GET /api/transactions/report/yearly` - Rapport annuel des transactions
  - Paramètres:
    - year: integer
    - format: PDF/CSV/EXCEL
- `GET /api/transactions/export/csv` - Export au format CSV
- `GET /api/transactions/export/pdf` - Export au format PDF

## Règles métiers
- Validation des données de transaction
  - Quantité > 0
  - Prix ≥ 0
  - Frais ≥ 0
  - Date ≤ date courante
- Impact automatique sur les positions
  - Mise à jour de la quantité
  - Recalcul du prix moyen
  - Mise à jour de la valeur totale
- Calcul des frais et taxes
  - Application des frais de courtage
  - Calcul des taxes éventuelles
- Conservation de l'historique complet
  - Enregistrement de chaque modification
  - Traçabilité des changements
- Gestion des annulations et corrections
  - Possibilité d'annuler une transaction
  - Conservation de l'historique des annulations

## Règles de sécurité
- Authentification requise
  - JWT Token valide
  - Vérification des droits d'accès
- Vérification des droits d'accès
  - Propriétaire du portfolio
  - Administrateur système
- Double validation pour les transactions importantes
  - Montant > seuil configurable
  - Validation explicite requise
- Traçabilité des modifications
  - Logging des opérations
  - Historique des changements

## Gestion des erreurs
- 400: Données invalides
  - Format incorrect
  - Validation échouée
- 401: Non authentifié
  - Token manquant
  - Token invalide
- 403: Non autorisé
  - Droits insuffisants
  - Portfolio non accessible
- 404: Transaction non trouvée
- 409: Conflit de version
  - Modification concurrente
  - Version obsolète
- 422: Fonds insuffisants
  - Solde insuffisant pour l'achat
  - Quantité insuffisante pour la vente
- 429: Trop de requêtes
  - Rate limiting dépassé

## Événements émis
- `transaction.created` - Nouvelle transaction créée
- `transaction.updated` - Transaction mise à jour
- `transaction.deleted` - Transaction supprimée
- `transaction.cancelled` - Transaction annulée
- `position.updated` - Position mise à jour suite à une transaction
