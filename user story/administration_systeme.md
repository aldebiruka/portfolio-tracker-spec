# Administration du système

## En tant qu'administrateur
Je veux pouvoir gérer l'ensemble du système et des utilisateurs
Afin d'assurer le bon fonctionnement de l'application

## Étapes
1. Après authentification OAuth2 en tant qu'admin
2. Accéder au tableau de bord d'administration
3. Gérer les utilisateurs :
   - Voir la liste des utilisateurs
   - Consulter les détails d'un utilisateur
   - Désactiver/réactiver un compte
   - Supprimer un compte utilisateur
   - Gérer les rôles (USER/ADMIN)
4. Gérer les portfolios :
   - Créer des portfolios
   - Supprimer des portfolios
   - Attribuer des portfolios aux utilisateurs
   - Retirer des portfolios aux utilisateurs
5. Surveiller l'activité :
   - Logs de connexion
   - Actions importantes
   - Alertes système
6. Gérer les paramètres système :
   - Configuration des limites (watchlists, alertes)
   - Paramètres de sécurité
   - Intégrations (Google/Facebook)
7. Générer des rapports :
   - Statistiques d'utilisation
   - Rapports d'incidents
   - Métriques de performance

## Règles métiers
- Accès restreint aux administrateurs
- Traçabilité complète des actions d'administration
- Double validation pour les actions critiques
- Archivage des données lors de la suppression d'un utilisateur
- Vérification des impacts avant suppression de portfolio
- Impossibilité de supprimer le dernier administrateur
- Notification des actions sensibles aux autres administrateurs 