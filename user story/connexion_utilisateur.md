# Connexion utilisateur via Google/Facebook

## En tant qu'utilisateur
Je veux pouvoir me connecter à l'application via mon compte Google ou Facebook
Afin d'accéder de manière sécurisée à mes portfolios

## Étapes
1. Accéder à la page de connexion
2. Choisir le mode de connexion :
   - Se connecter avec Google
   - Se connecter avec Facebook
3. Autoriser l'accès à l'application :
   - Accepter les permissions demandées
   - Confirmer l'utilisation des informations du profil
4. Validation de la connexion :
   - Redirection vers l'application
   - Création automatique du compte si première connexion
   - Récupération des informations de profil (email, nom, prénom)
5. Accès à l'application :
   - Redirection vers le tableau de bord
   - Affichage des portfolios existants
   - Session maintenue active

## Règles métiers
- Authentification déléguée à Google/Facebook
- Pas de mot de passe local à gérer
- Création automatique du compte utilisateur à la première connexion
- Conservation du lien entre compte local et compte Google/Facebook
- Mise à jour automatique des informations de profil
- Session sécurisée avec token JWT 