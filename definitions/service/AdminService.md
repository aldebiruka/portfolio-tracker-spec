# Service Administration

## Endpoints

### Gestion des utilisateurs
- `GET /api/admin/users` - Liste des utilisateurs
- `GET /api/admin/users/{id}` - Détails d'un utilisateur
- `PUT /api/admin/users/{id}/role` - Modification du rôle
- `PUT /api/admin/users/{id}/status` - Activation/désactivation
- `DELETE /api/admin/users/{id}` - Suppression d'un utilisateur

### Surveillance système
- `GET /api/admin/logs` - Logs système
- `GET /api/admin/activity` - Journal d'activité
- `GET /api/admin/metrics` - Métriques système
- `GET /api/admin/alerts` - Alertes système

### Configuration
- `GET /api/admin/settings` - Paramètres système
- `PUT /api/admin/settings` - Mise à jour des paramètres
- `POST /api/admin/maintenance` - Mode maintenance
- `POST /api/admin/cache/clear` - Nettoyage du cache

## Règles métiers
- Accès restreint aux administrateurs
- Journalisation des actions
- Validation des opérations sensibles
- Protection des administrateurs
- La suppression d'un utilisateur archive ses données
- Vérification des portfolios avant suppression

## Règles de sécurité
- Double authentification obligatoire
- IP restreintes pour l'accès admin
- Session plus courte que les utilisateurs normaux
- Audit complet des actions

## Gestion des erreurs
- 400: Données invalides
- 401: Non authentifié
- 403: Non autorisé
- 404: Ressource non trouvée
- 409: Conflit d'opération 