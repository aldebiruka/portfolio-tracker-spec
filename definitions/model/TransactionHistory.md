# TransactionHistory (Historique des Transactions)

## Attributs
- id: Identifiant unique
- transactionId: Référence à la transaction
- type: Type d'opération (CRÉATION/MODIFICATION/SUPPRESSION)
- oldValues: Anciennes valeurs (en JSON)
- newValues: Nouvelles valeurs (en JSON)
- userId: Utilisateur ayant effectué l'action
- timestamp: Date et heure de l'action
- comment: Commentaire optionnel

## Relations
- Appartient à un Portfolio (MANY-TO-ONE)
- Référence une Transaction (MANY-TO-ONE)
- Associé à un User (MANY-TO-ONE)

## Règles métiers
- Enregistrement automatique à chaque modification de transaction
- Conservation permanente de l'historique (pas de suppression)
- Stockage des valeurs avant/après modification
- Horodatage automatique 