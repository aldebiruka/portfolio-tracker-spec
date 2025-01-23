# Alert (Alerte)

## Attributs
- id: Identifiant unique
- userId: Référence à l'utilisateur
- type: Type d'alerte (PRIX, VARIATION, CONCENTRATION)
- target: Cible de l'alerte (position, catégorie, région)
- condition: Condition de déclenchement (seuil, pourcentage)
- status: Statut (ACTIVE, INACTIVE, TRIGGERED)
- notificationChannels: Canaux de notification (email, push, app)
- lastTriggered: Dernière date de déclenchement
- createdAt: Date de création
- updatedAt: Date de mise à jour

## Relations
- Appartient à un User (MANY-TO-ONE)
- Peut être liée à une Position (MANY-TO-ONE, optionnel)
- Peut être liée à un Portfolio (MANY-TO-ONE, optionnel)

## Règles métiers
- Une alerte doit avoir au moins un canal de notification
- Délai minimum entre deux déclenchements
- Validation des seuils selon le type d'alerte
- Conservation de l'historique des déclenchements 