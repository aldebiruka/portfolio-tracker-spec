# Service Dividendes

## Endpoints

### Gestion des dividendes
- `GET /api/dividends/{id}` - Détails d'un dividende
- `POST /api/dividends` - Enregistrement d'un nouveau dividende
  - Paramètres requis:
    - portfolioId: UUID
    - positionId: UUID
    - amount: decimal
    - currency: string
    - exDate: date
    - paymentDate: date
    - taxAmount: decimal
    - type: CASH/STOCK/SPECIAL
- `PUT /api/dividends/{id}` - Mise à jour d'un dividende
  - Paramètres modifiables:
    - amount: decimal
    - taxAmount: decimal
    - paymentDate: date
- `DELETE /api/dividends/{id}` - Suppression d'un dividende

### Recherche et analyse
- `GET /api/dividends/portfolio/{portfolioId}` - Dividendes d'un portfolio
  - Paramètres optionnels:
    - startDate: date
    - endDate: date
    - type: string
    - position: UUID
    - status: ANNOUNCED/PENDING/PAID
    - limit: integer
    - offset: integer
- `GET /api/dividends/position/{positionId}` - Dividendes d'une position
  - Mêmes paramètres optionnels
- `GET /api/dividends/calendar` - Calendrier des dividendes à venir
  - Paramètres:
    - portfolioId: UUID (optionnel)
    - startDate: date
    - endDate: date
- `GET /api/dividends/yield` - Rendement en dividendes
  - Par position
  - Par portfolio
  - Historique sur période

### Rapports et analyses
- `GET /api/dividends/report/monthly` - Rapport mensuel
  - Paramètres:
    - year: integer
    - month: integer
    - portfolioId: UUID (optionnel)
- `GET /api/dividends/report/yearly` - Rapport annuel
  - Paramètres:
    - year: integer
    - portfolioId: UUID (optionnel)
- `GET /api/dividends/analysis/trends` - Analyse des tendances
  - Évolution du rendement
  - Croissance des dividendes
  - Saisonnalité

### Alertes et notifications
- `POST /api/dividends/alerts` - Configuration des alertes
  - Types d'alertes:
    - Annonce de dividende
    - Modification de dividende
    - Date de détachement proche
    - Paiement reçu
- `GET /api/dividends/alerts` - Liste des alertes configurées

## Règles métiers
- Validation des dividendes
  - Montant > 0
  - Dates cohérentes (ex-date < payment date)
  - Devise valide
  - Position active dans le portfolio
- Impact sur le portfolio
  - Mise à jour automatique du cash disponible
  - Recalcul du rendement en dividendes
  - Mise à jour des statistiques
- Gestion fiscale
  - Calcul automatique des retenues à la source
  - Support des conventions fiscales
  - Tracking des crédits d'impôt
- Conversion des devises
  - Utilisation du taux de change à la date de paiement
  - Conservation de l'historique des taux
- Réinvestissement automatique
  - Support des plans de réinvestissement (DRIP)
  - Création automatique des transactions

## Règles de sécurité
- Authentification requise
  - JWT Token valide
  - Vérification des droits d'accès
- Contrôle des accès
  - Propriétaire du portfolio
  - Administrateur système
- Validation des données
  - Protection contre les doublons
  - Vérification des montants

## Gestion des erreurs
- 400: Données invalides
  - Format incorrect
  - Dates invalides
- 401: Non authentifié
- 403: Non autorisé
  - Droits insuffisants
- 404: Dividende non trouvé
- 409: Conflit
  - Doublon détecté
- 422: Données incohérentes
  - Position invalide
  - Montants incorrects

## Événements émis
- `dividend.announced` - Nouveau dividende annoncé
- `dividend.modified` - Dividende modifié
- `dividend.paid` - Dividende payé
- `dividend.cancelled` - Dividende annulé
- `cash.updated` - Mise à jour du cash suite au paiement
- `portfolio.updated` - Mise à jour des statistiques du portfolio

## Intégrations
- MarketDataService: Récupération des annonces de dividendes
- PortfolioService: Mise à jour du cash et des statistiques
- AlertService: Gestion des notifications
- TransactionService: Création des transactions de réinvestissement
- BilanService: Intégration dans les calculs de performance
