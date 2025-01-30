# Spécifications Frontend - Portfolio Tracker

## 1. Architecture Technique
- **Framework**: React + TypeScript
- **State Management**: Zustand
- **UI**: Material-UI
- **Graphiques**: Recharts
- **Build**: Vite
- **Tests**: Jest + React Testing Library
- **Sécurité**: 
  - OAuth2 (Google/Facebook)
  - JWT avec refresh token
  - Protection CSRF
  - Rate limiting côté client

## 2. Structure de l'Application

### Layout Global
```typescript
interface Layout {
  header: {
    logo: Component;
    mainNav: Component;
    search: Component;
    notifications: Component;
    userMenu: Component;
  };
  sidebar?: Component;
  main: Component;
  footer: Component;
}
```

### Navigation Principale
- Non authentifié :
  - Accueil
  - À propos
  - Contact
  - Connexion
- Authentifié (User) :
  - Dashboard
  - Portfolios
  - Watchlists
  - Alertes
  - Profil
- Authentifié (Admin) :
  - Section Admin
  - Gestion Utilisateurs
  - Rapports Système

## 3. Routes et Pages

### Pages Publiques
- `/`: Landing page
- `/login`: Connexion OAuth2
- `/about`: À propos
- `/contact`: Contact
- `/terms`: CGU
- `/privacy`: Confidentialité

### Pages Utilisateur (auth requise)
- `/dashboard`: Tableau de bord
- `/portfolios`: Liste portfolios
  - `/:id`: Détail portfolio
  - `/:id/positions`: Positions
  - `/:id/transactions`: Transactions
  - `/:id/performance`: Performance
  - `/:id/diversification`: Diversification
- `/watchlists`: Listes de surveillance
- `/alerts`: Gestion alertes
- `/profile`: Profil utilisateur

### Pages Admin
- `/admin`: Dashboard admin
- `/admin/users`: Gestion utilisateurs
- `/admin/portfolios`: Gestion portfolios
- `/admin/system`: Paramètres système

## 4. Composants Principaux

### Composants Communs
```typescript
// Header
const Header = () => (
  <AppBar>
    <Logo />
    <MainNav />
    <Search />
    <NotificationCenter />
    <UserMenu />
  </AppBar>
);

// Sidebar
const Sidebar = () => (
  <Drawer>
    <ContextualNav />
    <QuickActions />
  </Drawer>
);
```

### Composants Métier
```typescript
// Portfolio Card
interface PortfolioCardProps {
  id: string;
  name: string;
  value: number;
  performance: number;
  currency: string;
  positions: number;
}

// Position Table
interface PositionTableProps {
  positions: Position[];
  onSort: (field: string) => void;
  onFilter: (filters: Filter[]) => void;
}

// Transaction History
interface TransactionHistoryProps {
  transactions: Transaction[];
  dateRange: DateRange;
  filters: Filter[];
}
```

## 5. États Globaux (Zustand)

```typescript
interface RootStore {
  auth: AuthStore;
  portfolios: PortfolioStore;
  market: MarketDataStore;
  ui: UIStore;
}

interface UIStore {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  notifications: Notification[];
  modals: {
    [key: string]: boolean;
  };
}
```

## 6. Intégrations Temps Réel

### WebSocket (via Redis Pub/Sub)
```typescript
const channels = {
  portfolio: `portfolio:updates:${portfolioId}`,
  prices: `price:updates:${symbols.join(',')}`,
  notifications: `notifications:user:${userId}`
};
```

### Notifications Push
- Prix atteints
- Alertes portfolio
- Notifications système
- Messages admin

## 7. Sécurité Frontend
- Sessions : 30min timeout
- JWT : stockage sécurisé
- CORS : domaines whitelist
- Rate limiting : quotas par route
- XSS : Content Security Policy
