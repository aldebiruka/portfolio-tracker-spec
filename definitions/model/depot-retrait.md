# depot-retrait

## Attributs
- id: Identifiant unique
- type: "depot" ou "retrait"
- value: Valeur du depot
- date: Date du depot
- createdAt: Date de création

## Relations
- Appartient à un Portfolio (MANY-TO-ONE)

## Règles métiers
- La valeur doit être positive
- La date ne peut pas être dans le futur 
- la valeur du depot s'ajoute au cash disponible du portfolio

