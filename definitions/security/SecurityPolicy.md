# Politique de Sécurité

## Authentification
- Délégation OAuth2 (Google/Facebook)
- Gestion des tokens JWT
  - Durée de validité : 1 heure
  - Refresh token : 7 jours
  - Signature avec clé RSA
- Double authentification pour les administrateurs
- Déconnexion automatique après 30 minutes d'inactivité

## Gestion des Sessions
- Sessions sans état (stateless)
- Stockage Redis pour les tokens de révocation
- Limite de 5 sessions simultanées par utilisateur
- Invalidation forcée possible par l'administrateur

## Protection des Données
- Chiffrement TLS 1.3 obligatoire
- Données sensibles chiffrées en base
- Masquage des données sensibles dans les logs
- Sauvegarde chiffrée des données

## CORS (Cross-Origin Resource Sharing)
- Liste blanche des domaines autorisés
- Méthodes HTTP autorisées : GET, POST, PUT, DELETE
- Headers autorisés : Authorization, Content-Type
- Credentials : true pour les domaines autorisés

## Rate Limiting
- API publique : 100 requêtes/heure
- API authentifiée : 1000 requêtes/heure
- API admin : 2000 requêtes/heure
- Blocage temporaire après dépassement

## Protection contre les Attaques
- Protection XSS : Content Security Policy
- Protection CSRF : Tokens par session
- Protection Injection SQL : Requêtes préparées
- Protection DDoS : WAF et rate limiting 