# Architecture State Management avec Zustand

## Structure des Stores

### 1. AuthStore
```typescript
interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: OAuthCredentials) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}
```

### 2. PortfolioStore
```typescript
interface PortfolioStore {
  portfolios: Portfolio[];
  selectedPortfolio: Portfolio | null;
  isLoading: boolean;
  error: string | null;
  fetchPortfolios: () => Promise<void>;
  selectPortfolio: (id: string) => void;
  updatePortfolio: (id: string, data: Partial<Portfolio>) => Promise<void>;
}
```

### 3. MarketDataStore
```typescript
interface MarketDataStore {
  quotes: Record<string, Quote>;
  subscriptions: string[];
  subscribe: (symbol: string) => void;
  unsubscribe: (symbol: string) => void;
  updateQuote: (symbol: string, quote: Quote) => void;
}
```

### 4. AlertStore
```typescript
interface AlertStore {
  alerts: Alert[];
  notifications: Notification[];
  addAlert: (alert: Alert) => void;
  removeAlert: (id: string) => void;
  pushNotification: (notification: Notification) => void;
}
```

## Utilisation

### 1. Création des Stores
```typescript
import create from 'zustand';

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    // Implémentation
    set({ user, isAuthenticated: true });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));
```

### 2. Utilisation dans les Composants
```typescript
function Portfolio() {
  const { selectedPortfolio, selectPortfolio } = usePortfolioStore();
  const { quotes } = useMarketDataStore();

  return (
    // JSX utilisant selectedPortfolio et quotes
  );
}
```

### 3. Middleware et Persistance
```typescript
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      // store implementation
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);
```

## Intégration avec l'API

### 1. Gestion des Requêtes
```typescript
const fetchPortfolios = async () => {
  set({ isLoading: true });
  try {
    const data = await api.get('/portfolios');
    set({ portfolios: data, isLoading: false });
  } catch (error) {
    set({ error: error.message, isLoading: false });
  }
};
```

### 2. WebSocket et Temps Réel
```typescript
const subscribeToMarketData = (symbol: string) => {
  set((state) => ({
    subscriptions: [...state.subscriptions, symbol]
  }));
  websocket.subscribe(symbol);
};
```

## Avantages de cette Architecture
1. Séparation claire des responsabilités
2. Mise à jour simple et directe de l'état
3. Intégration facile avec TypeScript
4. Performance optimale avec des mises à jour sélectives
5. Facilité de test et de débogage 