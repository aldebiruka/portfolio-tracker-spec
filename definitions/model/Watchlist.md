# Watchlist (Liste de surveillance)

## Attributs
- id: Identifiant unique
- userId: Référence à l'utilisateur
- name: Nom de la watchlist
- description: Description optionnelle
- symbols: Liste des symboles surveillés
- createdAt: Date de création
- updatedAt: Date de mise à jour

## Relations
- Appartient à un User (MANY-TO-ONE)
- Peut avoir plusieurs Alerts (ONE-TO-MANY)

## Règles métiers
- Le nom doit être unique pour un utilisateur
- Validation des symboles ajoutés
- Limite maximum de symboles par watchlist
- Mise à jour en temps réel des données de marché 