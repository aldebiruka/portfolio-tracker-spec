# Gestion d'un portfolio

## En tant qu'utilisateur connecté via Google/Facebook
Je veux pouvoir gérer mes portfolios attribués
Afin de suivre mes investissements

## Étapes
1. Après authentification OAuth2
2. Accéder à la section "Mes Portfolios"
3. Visualiser mes portfolios attribués :
   - Définir un nom
   - Choisir une devise de référence
   - Ajouter une description (optionnel)
4. Ajouter des positions :
   - Rechercher un actif par son symbole
   - Spécifier la quantité
   - Indiquer le prix d'achat
5. Visualiser les performances :
   - Voir la valeur totale
   - Consulter les plus/moins-values
   - Analyser la répartition

## Règles métiers
- Seul l'administrateur peut créer/supprimer des portfolios
- Les utilisateurs peuvent uniquement gérer les portfolios qui leur sont attribués
- Les positions doivent être mises à jour en temps réel
- Calcul automatique des performances 