# Portfolio

## Attributs
- id: Identifiant unique
- name: Nom du portfolio
- description: Description du portfolio
- currency: Devise de référence
- createdAt: Date de création
- updatedAt: Date de dernière mise à jour

## Relations
- Appartient à un User (MANY-TO-ONE)
- Contient plusieurs Position (ONE-TO-MANY)
- A plusieurs Transaction (ONE-TO-MANY)

## Règles métiers
- Le nom est obligatoire
- La devise de référence doit être une devise valide
- Un utilisateur peut avoir plusieurs portfolios 