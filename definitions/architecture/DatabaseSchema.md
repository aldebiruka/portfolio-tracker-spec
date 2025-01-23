# Schéma de Base de Données

## Tables Principales

### users
- id (PK) UUID
- email VARCHAR(255) UNIQUE
- provider VARCHAR(50)
- provider_id VARCHAR(255)
- role VARCHAR(20)
- first_name VARCHAR(100)
- last_name VARCHAR(100)
- created_at TIMESTAMP
- updated_at TIMESTAMP

### portfolios
- id (PK) UUID
- user_id (FK) UUID
- name VARCHAR(100)
- description TEXT
- currency VARCHAR(3)
- created_at TIMESTAMP
- updated_at TIMESTAMP

### positions
- id (PK) UUID
- portfolio_id (FK) UUID
- symbol VARCHAR(20)
- quantity DECIMAL(19,4)
- average_price DECIMAL(19,4)
- current_price DECIMAL(19,4)
- category VARCHAR(50)
- region VARCHAR(50)
- created_at TIMESTAMP
- updated_at TIMESTAMP

### transactions
- id (PK) UUID
- position_id (FK) UUID
- type VARCHAR(20)
- quantity DECIMAL(19,4)
- price DECIMAL(19,4)
- fees DECIMAL(19,4)
- date TIMESTAMP
- created_at TIMESTAMP
- updated_at TIMESTAMP

### watchlists
- id (PK) UUID
- user_id (FK) UUID
- name VARCHAR(100)
- description TEXT
- created_at TIMESTAMP
- updated_at TIMESTAMP

### watchlist_symbols
- watchlist_id (PK, FK) UUID
- symbol (PK) VARCHAR(20)
- added_at TIMESTAMP

### alerts
- id (PK) UUID
- user_id (FK) UUID
- type VARCHAR(50)
- target_type VARCHAR(50)
- target_id VARCHAR(255)
- condition VARCHAR(50)
- value DECIMAL(19,4)
- status VARCHAR(20)
- notification_channels VARCHAR(255)
- last_triggered TIMESTAMP
- created_at TIMESTAMP
- updated_at TIMESTAMP

## Index Optimisés
- users_email_idx (users.email)
- portfolios_user_id_idx (portfolios.user_id)
- positions_portfolio_id_idx (positions.portfolio_id)
- positions_symbol_idx (positions.symbol)
- transactions_position_id_idx (transactions.position_id)
- transactions_date_idx (transactions.date)
- watchlists_user_id_idx (watchlists.user_id)
- alerts_user_id_idx (alerts.user_id)
- alerts_status_idx (alerts.status)

## Contraintes
- FK_portfolio_user: portfolios.user_id -> users.id
- FK_position_portfolio: positions.portfolio_id -> portfolios.id
- FK_transaction_position: transactions.position_id -> positions.id
- FK_watchlist_user: watchlists.user_id -> users.id
- FK_alert_user: alerts.user_id -> users.id
- UQ_user_email: UNIQUE(users.email)
- UQ_portfolio_name_per_user: UNIQUE(user_id, name) ON portfolios
- UQ_watchlist_name_per_user: UNIQUE(user_id, name) ON watchlists

## Triggers
- update_position_on_transaction: Mise à jour automatique des positions après transaction
- update_timestamp: Mise à jour automatique des updated_at
- check_watchlist_limit: Vérification de la limite de symboles par watchlist

## Relations et Contraintes
[Diagramme ER détaillé]

## Indexes
[Liste des index optimisés] 