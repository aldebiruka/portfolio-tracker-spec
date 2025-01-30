# Position

## Attributs
- id: Identifiant unique
- symbol: Symbole de l'actif
- quantity: Quantité détenue
- averagePrice: Prix moyen d'achat
- currentPrice: Prix actuel
- totalValue: Valeur totale
- weight: poids dans le portefeuille (%)
- profitLoss: Plus/moins-value
- category: Catégorie de l'actif (Finance, IT, Energy, Healthcare, etc.)
- feeling: typologie de l'investisseur (rendement, croissance, défensif, ou bad stock)
- region: Région géographique (USA, Europe, France, Chine, Asie, etc.)
- createdAt: Date de création
- updatedAt: Date de dernière mise à jour

## Relations
- Appartient à un Portfolio (MANY-TO-ONE)
- Associée à plusieurs Transaction (ONE-TO-MANY)

## Règles métiers
- La quantité doit être positive
- Le symbol doit être valide
- Le prix moyen est calculé automatiquement
- Le poids est calculé automatiquement
- La valeur totale est mise à jour en temps réel
- La catégorie doit être une valeur de la liste prédéfinie
- La région doit être une valeur de la liste prédéfinie
- Le sentiment doit être une valeur de la liste prédéfinie
- Les catégories et régions permettent l'analyse de la diversification du portfolio 