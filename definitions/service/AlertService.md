# Service Alertes

## Endpoints

### Gestion des alertes
- `GET /api/alerts` - Liste des alertes de l'utilisateur
- `POST /api/alerts` - Création d'une alerte
- `PUT /api/alerts/{id}` - Mise à jour d'une alerte
- `DELETE /api/alerts/{id}` - Suppression d'une alerte
- `GET /api/alerts/history` - Historique des alertes déclenchées

### Configuration des notifications
- `GET /api/alerts/settings` - Préférences de notification
- `PUT /api/alerts/settings` - Mise à jour des préférences
- `POST /api/alerts/{id}/test` - Tester une notification

## Règles métiers
- Validation des seuils d'alerte
- Gestion des canaux de notification
- Agrégation des alertes similaires
- Prévention du spam

## Règles de sécurité
- Authentification requise
- Vérification des droits d'accès
- Rate limiting sur les notifications
- Protection contre les abus

## Gestion des erreurs
- 400: Configuration invalide
- 401: Non authentifié
- 403: Non autorisé
- 404: Alerte non trouvée
- 429: Trop de notifications 