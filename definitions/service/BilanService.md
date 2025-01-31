# Service Bilan

## Endpoints

### 1. Bilan global
- **`GET /api/bilan`**  
  **Description :** Récupère le bilan de l'ensemble des portfolios.  
  **Paramètres optionnels :**  
  - `startDate` (string, format `YYYY-MM-DD`) : Date de début de la période  
  - `endDate` (string, format `YYYY-MM-DD`) : Date de fin de la période  
  **Réponse :**  
  ```json
  {
    "totalInvesti": 10000,
    "totalGains": 500,
    "performance": "5%"
  }
  ```

### 2. Bilan d'un portfolio
- **`GET /api/bilan/{portfolioId}`**  
  **Description :** Récupère le bilan détaillé d’un portfolio spécifique.  
  **Paramètres optionnels :**  
  - `startDate` (string, format `YYYY-MM-DD`)  
  - `endDate` (string, format `YYYY-MM-DD`)  
  **Réponse :**  
  ```json
  {
    "portfolioId": "1234",
    "nom": "Tech Stocks",
    "investi": 5000,
    "gains": 250,
    "performance": "5%"
  }
  ```

### 3. Bilan d'un utilisateur
- **`GET /api/bilan/user/{userId}`**  
  **Description :** Récupère le bilan global de tous les portfolios d’un utilisateur donné.  
  **Paramètres optionnels :**  
  - `startDate` (string, format `YYYY-MM-DD`)  
  - `endDate` (string, format `YYYY-MM-DD`)  
  **Réponse :**  
  ```json
  {
    "userId": "5678",
    "totalInvesti": 20000,
    "totalGains": 1000,
    "performanceGlobale": "5%"
  }
  ```

### 4. Bilan d'un utilisateur pour un portfolio spécifique
- **`GET /api/bilan/user/{userId}/portfolio/{portfolioId}`**  
  **Description :** Récupère le bilan d'un utilisateur pour un de ses portfolios.  
  **Paramètres optionnels :**  
  - `startDate` (string, format `YYYY-MM-DD`)  
  - `endDate` (string, format `YYYY-MM-DD`)  
  **Réponse :**  
  ```json
  {
    "userId": "5678",
    "portfolioId": "1234",
    "nom": "Tech Stocks",
    "investi": 5000,
    "gains": 250,
    "performance": "5%"
  }
  ```

---

## Règles de sécurité
- **Authentification requise** : L’utilisateur doit être connecté avec un token valide.  
- **Vérification des droits d'accès** :  
  - Un utilisateur ne peut voir que ses propres portfolios.  
  - Un administrateur peut consulter les bilans de plusieurs utilisateurs.  
- **Chiffrement des données sensibles** (ex: historique des transactions).  

---

## Gestion des erreurs
| Code | Message | Description |
|------|---------|------------|
| **400** | Données invalides | Format incorrect des paramètres (ex: mauvaise date) |
| **401** | Non authentifié | L’utilisateur n’est pas connecté |
| **403** | Non autorisé | Accès refusé (ex: tentative d’accès à un portfolio non autorisé) |
| **404** | Ressource non trouvée | Portfolio ou utilisateur inexistant |
| **409** | Conflit de version | Conflit lors de la mise à jour d'un bilan |
| **422** | Fonds insuffisants | Solde insuffisant pour une opération |

---

Cette version apporte plus de précisions et structure davantage le service. Dis-moi si tu veux des modifications ou des ajouts ! 😊

## Règles métiers
- Le bilan doit retourner les informations suivantes pour chaque portfolio:
    - nom du portolio
    - devise de référence
    - période analysée
    - total investi sur la période
    - valeur du portfolio en début de période
    - valeur du portforlio en fin de période
    - somme des dividendes reçues pendant la période
    - somme des plus-values sur l'ensemble des transactions pendant la période
    - performance globale et annualisée sur la période en pourcentage
- Bilan global sur une période donnée
- Bilan sur une période donnée par portfolio
- Bilan sur une période donnée par utilisateur
- Le bilan de portfolio peut être généré sous différents formats :
    - **Interface Web** pour un suivi dynamique
    - **Export JSON/CSV** pour intégration avec d’autres outils
- La performance est calculée en fonction des gains et de l’investissement initial.  
- Prise en compte des transactions réalisées au sein du portefeuille.

---