# Portfolio

## Attributs
- id: Identifiant unique
- name: Nom du portfolio
- description: Description du portfolio
- currency: Devise de référence
- value: Valeur du portfolio
- cash: liquidites disponibles sur le portfolio
- createdAt: Date de création
- updatedAt: Date de dernière mise à jour

## Relations
- Appartient à un User (MANY-TO-ONE)
- Contient plusieurs Position (ONE-TO-MANY)
- A plusieurs Transaction (ONE-TO-MANY)
- A plusieurs Depot (ONE-TO-MANY)
- A plusieurs Retrait (ONE-TO-MANY)

## Règles métiers
- Le nom est obligatoire
- La devise de référence est obligatoire
- La devise de référence doit être une devise valide
- Un utilisateur peut avoir plusieurs portfolios 
- La valeur du portfolio est égale à la valeur totale des positions plus le cash disponible
- La valeur et le cash ne peuvent être négatifs
- Les dividendes doivent être convertis en la devise de référence et ajoutés au cash disponible
- chaque position génére des dividendes
- Un portfolio peut avoir plusieurs dépot et retrait
- chaque retrait et depot modifie le cash disponible
- un portfolio n'a qu'une seule devise de référence; pas de portfolio multidevises

