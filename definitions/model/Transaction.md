# Transaction

## Attributs
- id: Identifiant unique
- type: Type de transaction (ACHAT/VENTE)
- symbol: Symbole de l'actif
- quantity: Quantité
- price: Prix unitaire
- fees: Frais de transaction
- date: Date de la transaction
- createdAt: Date de création
- updatedAt: Date de dernière mise à jour

## Relations
- Appartient à un Portfolio (MANY-TO-ONE)
- Associée à une Position (MANY-TO-ONE)

## Règles métiers
- La quantité doit être positive
- Le prix doit être positif
- Les frais doivent être >= 0
- La date ne peut pas être dans le futur 