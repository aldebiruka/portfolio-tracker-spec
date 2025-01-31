vue d'un portfolio avec ses positions.

Le composant se décompose en 3 sections principales:

1. Portfolio Overview en haut
- Nom du portfolio
- Valeur totale
- Cash disponible
- Devise de référence
- Performance YTD (en %, vert si positive, rouge si négative)
- Dividendes YTD (en devise du portfolio)
- Mise en page en grid pour une meilleure organisation

2. Graphiques d'allocation en bas:
- Répartition par catégorie (PieChart)
- Ajout d'un deuxième graphique pour la répartition par région
- Possibilité d'ajouter d'autres visualisations (région, feeling)

3. Table des positions au milieu:
- Liste détaillée des positions
- Colonnes: Symbole, Quantité, Prix moyen, Prix actuel, Valeur totale, Poids, P/L
- Formatage des nombres avec toLocaleString()
- Coloration des P/L en vert/rouge
