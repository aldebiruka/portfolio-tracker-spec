# Setup Initial du Projet

## 1. Structure des Repositories

### Backend (portfolio-tracker-api)
```
portfolio-tracker-api/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py         # Configuration application
│   │   ├── security.py       # JWT et OAuth2
│   │   └── database.py       # Configuration DB
│   ├── models/              
│   │   ├── __init__.py
│   │   └── base.py          # Modèle SQLAlchemy de base
│   ├── schemas/             
│   │   └── __init__.py
│   ├── api/
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       └── endpoints/
│   ├── services/
│   │   └── __init__.py
│   └── utils/
│       └── __init__.py
├── tests/
│   ├── __init__.py
│   └── conftest.py
├── alembic/                  # Migrations DB
│   ├── versions/
│   └── env.py
├── .env.example
├── requirements.txt
├── requirements-dev.txt
├── Dockerfile
├── docker-compose.yml
└── README.md
```

### Frontend (portfolio-tracker-web)
```
portfolio-tracker-web/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── features/
│   ├── pages/
│   ├── stores/
│   │   ├── auth.ts
│   │   ├── portfolio.ts
│   │   └── index.ts
│   ├── services/
│   │   ├── api.ts
│   │   └── websocket.ts
│   ├── types/
│   └── utils/
├── public/
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
├── Dockerfile
└── README.md
```

## 2. Configuration Docker

### docker-compose.yml
```yaml
version: '3.8'

services:
  api:
    build: ./portfolio-tracker-api
    ports:
      - "8000:8000"
    volumes:
      - ./portfolio-tracker-api:/app
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/portfolio_db
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      - db
      - redis

  web:
    build: ./portfolio-tracker-web
    ports:
      - "3000:3000"
    volumes:
      - ./portfolio-tracker-web:/app
    environment:
      - VITE_API_URL=http://localhost:8000

  db:
    image: postgres:14-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=portfolio_db
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

## 3. Scripts de Développement

### Backend (requirements.txt)
```
fastapi==0.68.1
uvicorn==0.15.0
sqlalchemy==1.4.23
alembic==1.7.1
psycopg2-binary==2.9.1
python-jose==3.3.0
passlib==1.7.4
python-multipart==0.0.5
redis==4.0.1
pytest==6.2.5
httpx==0.19.0
```

### Frontend (package.json)
```json
{
  "name": "portfolio-tracker-web",
  "version": "0.1.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview",
    "test": "jest"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zustand": "^4.4.1",
    "react-router-dom": "^6.16.0",
    "@material-ui/core": "^5.0.0",
    "recharts": "^2.8.0",
    "axios": "^1.5.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@vitejs/plugin-react": "^4.0.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

## 4. Commandes de Démarrage

```bash
# Cloner les repos
git clone https://github.com/your-org/portfolio-tracker-api.git
git clone https://github.com/your-org/portfolio-tracker-web.git

# Démarrer l'environnement de développement
docker-compose up -d

# Migrations base de données
docker-compose exec api alembic upgrade head

# Logs
docker-compose logs -f

# Tests
docker-compose exec api pytest
docker-compose exec web npm test
``` 