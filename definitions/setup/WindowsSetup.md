# Setup Initial sur Windows 11 (PowerShell)

## 1. Création de la structure
```powershell
# Créer le dossier principal
New-Item -ItemType Directory -Path "portfolio-tracker"
Set-Location portfolio-tracker

# Créer les sous-projets
New-Item -ItemType Directory -Path "portfolio-tracker-api"
New-Item -ItemType Directory -Path "portfolio-tracker-web"

# Structure Backend
Set-Location portfolio-tracker-api
git init
git remote add origin git@github.com:your-org/portfolio-tracker-api.git

# Créer l'arborescence backend
New-Item -ItemType Directory -Path "app"
New-Item -ItemType Directory -Path "app/core"
New-Item -ItemType Directory -Path "app/models"
New-Item -ItemType Directory -Path "app/schemas"
New-Item -ItemType Directory -Path "app/api/v1/endpoints" -Force
New-Item -ItemType Directory -Path "app/services"
New-Item -ItemType Directory -Path "app/utils"
New-Item -ItemType Directory -Path "tests"
New-Item -ItemType Directory -Path "alembic/versions" -Force

# Créer les fichiers backend
New-Item -ItemType File -Path "app/__init__.py"
New-Item -ItemType File -Path "app/main.py"
New-Item -ItemType File -Path "requirements.txt"
New-Item -ItemType File -Path "requirements-dev.txt"
New-Item -ItemType File -Path "Dockerfile"
New-Item -ItemType File -Path ".env.example"
New-Item -ItemType File -Path "README.md"

# Structure Frontend
Set-Location ..
Set-Location portfolio-tracker-web
git init
git remote add origin git@github.com:your-org/portfolio-tracker-web.git

# Créer l'arborescence frontend
New-Item -ItemType Directory -Path "src"
New-Item -ItemType Directory -Path "src/assets"
New-Item -ItemType Directory -Path "src/components/common" -Force
New-Item -ItemType Directory -Path "src/components/layout" -Force
New-Item -ItemType Directory -Path "src/components/features" -Force
New-Item -ItemType Directory -Path "src/pages"
New-Item -ItemType Directory -Path "src/stores"
New-Item -ItemType Directory -Path "src/services"
New-Item -ItemType Directory -Path "src/types"
New-Item -ItemType Directory -Path "src/utils"
New-Item -ItemType Directory -Path "public"

# Créer les fichiers frontend
New-Item -ItemType File -Path "src/main.tsx"
New-Item -ItemType File -Path "src/App.tsx"
New-Item -ItemType File -Path "package.json"
New-Item -ItemType File -Path "tsconfig.json"
New-Item -ItemType File -Path "vite.config.ts"
New-Item -ItemType File -Path ".env.example"
New-Item -ItemType File -Path "Dockerfile"
New-Item -ItemType File -Path "README.md"
```

## 2. Docker Setup
```powershell
# Revenir à la racine du projet
Set-Location ..
New-Item -ItemType File -Path "docker-compose.yml"

# Démarrer Docker
docker-compose up -d

# Vérifier les logs
docker-compose logs -f

# Exécuter des commandes dans les conteneurs
docker-compose exec api alembic upgrade head
docker-compose exec web npm test
```

## 3. Git Initial Commit
```powershell
# Backend
Set-Location portfolio-tracker-api
git add .
git commit -m "Initial project structure"
git push -u origin main

# Frontend
Set-Location ..
Set-Location portfolio-tracker-web
git add .
git commit -m "Initial project structure"
git push -u origin main
```

## Notes importantes pour Windows
1. Assurez-vous que Git est installé et configuré
2. Docker Desktop pour Windows doit être installé et en cours d'exécution
3. WSL2 doit être activé pour Docker
4. PowerShell doit être exécuté en tant qu'administrateur si nécessaire 