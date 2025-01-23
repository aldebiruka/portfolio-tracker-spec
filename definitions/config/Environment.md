# Configuration Environnement

## Variables d'Environnement

### Application
- APP_NAME=portfolio_tracker
- APP_VERSION=1.0.0
- DEBUG=False
- SECRET_KEY=your-secret-key
- ALLOWED_HOSTS=localhost,api.portfolio-tracker.com

### Base de données
- DB_URL=postgresql://user:password@localhost:5432/portfolio_db
- DB_POOL_SIZE=20
- DB_MAX_OVERFLOW=10

### Redis
- REDIS_URL=redis://localhost:6379
- REDIS_PASSWORD=your-redis-password
- REDIS_DB=0
- REDIS_CACHE_TTL=300

### OAuth2
- OAUTH_GOOGLE_CLIENT_ID=your-google-client-id
- OAUTH_GOOGLE_CLIENT_SECRET=your-google-client-secret
- OAUTH_GOOGLE_REDIRECT_URI=http://localhost:8000/api/auth/google/callback
- OAUTH_FACEBOOK_CLIENT_ID=your-facebook-client-id
- OAUTH_FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
- OAUTH_FACEBOOK_REDIRECT_URI=http://localhost:8000/api/auth/facebook/callback

### JWT
- JWT_SECRET_KEY=your-jwt-secret
- JWT_ALGORITHM=HS256
- JWT_ACCESS_TOKEN_EXPIRE_MINUTES=60
- JWT_REFRESH_TOKEN_EXPIRE_DAYS=7

### Market Data API
- MARKET_API_KEY=your-market-api-key
- MARKET_API_URL=https://api.market-data.com/v1
- MARKET_API_TIMEOUT=30

### Monitoring
- PROMETHEUS_ENABLED=True
- GRAFANA_API_KEY=your-grafana-key

### Logging
- LOG_LEVEL=INFO
- LOG_FORMAT=json
- ELASTIC_APM_SERVER_URL=http://localhost:8200

### Email
- SMTP_HOST=smtp.gmail.com
- SMTP_PORT=587
- SMTP_USER=your-email@gmail.com
- SMTP_PASSWORD=your-app-password

## Profils de Configuration
- development
- staging
- production

## Commandes de lancement
```bash
# Development
export $(cat .env.development | xargs) && uvicorn app.main:app --reload

# Staging
export $(cat .env.staging | xargs) && uvicorn app.main:app

# Production
export $(cat .env.production | xargs) && uvicorn app.main:app --workers 4 