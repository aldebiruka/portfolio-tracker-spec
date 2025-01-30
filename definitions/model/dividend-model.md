# Dividend (Dividende)

## Attributs
- id: Identifiant unique (UUID)
- portfolioId: Référence au portfolio (UUID)
- positionId: Référence à la position (UUID)
- type: Type de dividende (CASH/STOCK/SPECIAL)
- amount: Montant du dividende
- currency: Devise du dividende
- exchangeRate: Taux de change utilisé
- amountLocalCurrency: Montant en devise locale du portfolio
- exDate: Date de détachement
- paymentDate: Date de paiement
- taxAmount: Montant des taxes retenues
- status: Statut (ANNOUNCED/PENDING/PAID)
- reinvestment: Flag de réinvestissement automatique
- reinvestmentTransactionId: Référence à la transaction de réinvestissement (optionnel)
- created_at: Date de création
- updated_at: Date de mise à jour

## Relations
- Appartient à un Portfolio (MANY-TO-ONE)
- Appartient à une Position (MANY-TO-ONE)
- Peut être lié à une Transaction de réinvestissement (ONE-TO-ONE, optionnel)

## Règles métiers
- Le montant doit être positif
- La date de paiement doit être postérieure à la date de détachement
- Le montant en devise locale est calculé automatiquement
- Le statut suit une progression logique (ANNOUNCED -> PENDING -> PAID)
- Le réinvestissement automatique génère une transaction d'achat
