# Gestion des transactions

## En tant qu'utilisateur connecté via Google/Facebook
Je veux pouvoir gérer les transactions de mes positions
Afin de maintenir un historique précis de mes opérations

## Étapes
1. Après authentification OAuth2
2. Sélectionner une position dans un portfolio
3. Ajouter une nouvelle transaction :
   - Type (Achat/Vente)
   - Date de l'opération
   - Quantité
   - Prix unitaire
   - Frais de transaction
4. Modifier une transaction existante :
   - Correction des données
   - Ajout de commentaires
   - Justification des modifications
5. Consulter l'historique :
   - Liste chronologique
   - Filtres par période
   - Filtres par type
6. Générer des rapports :
   - Export CSV/PDF
   - Synthèse mensuelle/annuelle
   - Documents fiscaux

## Règles métiers
- Validation des données saisies
- Impact automatique sur la position
- Conservation de l'historique des modifications
- Calcul des impacts fiscaux
- Impossibilité de supprimer une transaction validée 