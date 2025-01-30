# Service Bilan

## Endpoints
- `GET /api/bilan` - Bilan de l'ensemble des portfolio
- `GET /api/bilan/{portfolioId}` - Bilan d'un portfolio
- `GET /api/bilan/user/{userId}` - Bilan d'un utilisateur

## Règles métiers
- Le bilan doit retourner les informations suivantes pour chaque portfolio:
    - nom du portolio
    - devise de référence
    - période analysée
    - total investi sur la période
    - valeur du portfolio en début de période
    - valeur du portforlio en fin de période
    - somme des dividendes reçues pendant la période
    - somme des plus-values sur l'ensemble des transactions pendant la période
    - performance globale et annualisée sur la période en pourcentage
- Bilan global sur une période donnée
- Bilan sur une période donnée par portfolio
- Bilan sur une période donnée par utilisateur
- Le bilan de portfolio peut être généré sous différents formats :
    - **Interface Web** pour un suivi dynamique
    - **Export JSON/CSV** pour intégration avec d’autres outils
    
## Règles de sécurité
- Authentification requise
- Vérification des droits d'accès
- Seul l'administrateur a accés au bilan de l'ensemble des portfolio
- un utilisateur ne peut avoir accés qu'au bilan de ses portfolio

## Gestion des erreurs
- 400: Données invalides
- 401: Non authentifié
- 403: Non autorisé
- 404: Ressource non trouvée
- 422: Données invalides