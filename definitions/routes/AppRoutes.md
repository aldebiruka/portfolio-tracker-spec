# Routes de l'Application

## Routes Publiques
- `/` - Page d'accueil
- `/login` - Page de connexion (OAuth2 Google/Facebook)
- `/about` - À propos de l'application
- `/contact` - Formulaire de contact
- `/terms` - Conditions d'utilisation
- `/privacy` - Politique de confidentialité

## Routes Utilisateur (authentification requise)
- `/dashboard` - Tableau de bord utilisateur
- `/portfolios` - Liste des portfolios attribués
- `/portfolios/:id` - Détail d'un portfolio
  - `/portfolios/:id/positions` - Positions du portfolio
  - `/portfolios/:id/transactions` - Transactions du portfolio
  - `/portfolios/:id/performance` - Performance du portfolio
  - `/portfolios/:id/diversification` - Analyse de la diversification
- `/watchlists` - Listes de surveillance
  - `/watchlists/:id` - Détail d'une watchlist
- `/alerts` - Gestion des alertes
  - `/alerts/price` - Alertes de prix
  - `/alerts/portfolio` - Alertes de portfolio
- `/profile` - Profil utilisateur
  - `/profile/settings` - Paramètres du compte
  - `/profile/notifications` - Préférences de notification

## Routes Administrateur
- `/admin` - Tableau de bord administrateur
- `/admin/users` - Gestion des utilisateurs
  - `/admin/users/:id` - Détail d'un utilisateur
  - `/admin/users/new` - Création d'utilisateur
- `/admin/portfolios` - Gestion des portfolios
  - `/admin/portfolios/new` - Création de portfolio
  - `/admin/portfolios/:id/assign` - Attribution de portfolio
- `/admin/system` - Paramètres système
  - `/admin/system/logs` - Logs système
  - `/admin/system/metrics` - Métriques
  - `/admin/system/settings` - Configuration
- `/admin/reports` - Rapports d'administration

## Règles de routage
- Redirection vers /login si non authentifié
- Vérification du rôle pour les routes admin
- Gestion des routes 404
- Protection des routes sensibles
- Conservation de l'historique de navigation 