# Service Depot-Retrait

## Endpoints

### Gestion des dépôts et retraits
- `GET /api/v1/portfolios/{portfolioId}/depots-retraits` - Liste des dépôts et retraits pour un portfolio
- `POST /api/v1/portfolios/{portfolioId}/depots-retraits` - Création d'un dépôt ou d'un retrait
- `GET /api/v1/portfolios/{portfolioId}/depots-retraits/{depotRetraitId}` - Détails d'un dépôt ou d'un retrait
- `PUT /api/v1/portfolios/{portfolioId}/depots-retraits/{depotRetraitId}` - Mise à jour d'un dépôt ou d'un retrait
- `DELETE /api/v1/portfolios/{portfolioId}/depots-retraits/{depotRetraitId}` - Suppression d'un dépôt ou d'un retrait

### Filtrage et tri
- Les endpoints `GET` supportent les paramètres de filtrage standards :
  - `type`: Filtre par type (`depot` ou `retrait`)
  - `startDate`: Filtre par date de début
  - `endDate`: Filtre par date de fin
  - `sort`: Tri par champ (`date`, `value`, etc.)
  - `order`: Ordre de tri (`asc` ou `desc`)

## Règles métiers

1. **Validation des données** :
   - Le type doit être soit `depot` soit `retrait`.
   - La valeur doit être positive.
   - La date ne peut pas être dans le futur.
   - Le montant du dépôt ou du retrait doit être supérieur à zéro.

2. **Impact sur le portfolio** :
   - Un dépôt augmente le cash disponible du portfolio.
   - Un retrait diminue le cash disponible du portfolio.
   - Le cash du portfolio ne peut pas devenir négatif après un retrait.

3. **Historique** :
   - Tous les dépôts et retraits sont enregistrés et traçables.
   - Les modifications des dépôts et retraits sont enregistrées dans l'historique des transactions.

## Règles de sécurité

1. **Authentification** :
   - Tous les endpoints nécessitent une authentification.
   - Seul l'utilisateur propriétaire du portfolio peut accéder à ses dépôts et retraits.

2. **Autorisation** :
   - Les utilisateurs ne peuvent accéder qu'aux dépôts et retraits de leurs propres portfolios.
   - Les administrateurs peuvent accéder à tous les dépôts et retraits.

3. **Rate Limiting** :
   - Les endpoints sont soumis à une limite de requêtes pour éviter les abus.

## Gestion des erreurs

- **400 Bad Request** : Données invalides (ex: valeur négative, date dans le futur).
- **401 Unauthorized** : Utilisateur non authentifié.
- **403 Forbidden** : L'utilisateur n'a pas les droits pour accéder à cette ressource.
- **404 Not Found** : Le dépôt/retrait ou le portfolio n'existe pas.
- **409 Conflict** : Conflit de version lors de la mise à jour d'un dépôt ou d'un retrait.

## Évènements émis

1. **DepotRetraitCreated** :
   - Émis lorsqu'un nouveau dépôt ou retrait est créé.
   - Contient les détails du mouvement (type, valeur, date, portfolioId).

2. **DepotRetraitUpdated** :
   - Émis lorsqu'un dépôt ou retrait est mis à jour.
   - Contient les anciennes et nouvelles valeurs.

3. **DepotRetraitDeleted** :
   - Émis lorsqu'un dépôt ou retrait est supprimé.
   - Contient les détails du mouvement supprimé.

4. **PortfolioCashUpdated** :
   - Émis lorsque le cash du portfolio est mis à jour après un dépôt ou un retrait.
   - Contient le nouveau montant de cash disponible.

## Intégration avec les services du portfolio

1. **Mise à jour du cash du portfolio** :
   - Lorsqu'un dépôt ou un retrait est effectué, le service `PortfolioService` est notifié pour mettre à jour le cash disponible du portfolio.

2. **Historique des transactions** :
   - Les dépôts et retraits sont enregistrés dans l'historique des transactions du portfolio via le service `TransactionHistory`.

3. **Validation des droits** :
   - Avant toute opération, le service vérifie que l'utilisateur a les droits nécessaires sur le portfolio via le service `PortfolioService`.