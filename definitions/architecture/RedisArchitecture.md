# Architecture Redis

## Utilisation Double (Cache + Message Queue)

### Cache
- Sessions utilisateurs
- Données de marché en temps réel
- Résultats de calculs fréquents
- Rate limiting

### Pub/Sub Channels
1. **Notifications**
   - `notifications:user:{user_id}`
   - `notifications:admin`
   - `notifications:system`

2. **Alertes Prix**
   - `price:alerts:{symbol}`
   - `price:updates:{symbol}`

3. **Portfolio Updates**
   - `portfolio:updates:{portfolio_id}`
   - `position:updates:{position_id}`

4. **System Events**
   - `system:maintenance`
   - `system:errors`

## Structure des Messages

### Format Standard
json
{
"type": "MESSAGE_TYPE",
"timestamp": "ISO_TIMESTAMP",
"payload": {},
"metadata": {
"sender": "service_name",
"version": "1.0"
}
}

## Patterns d'Utilisation

### 1. Notifications Temps Réel
Publisher
await redis.publish(f"notifications:user:{user_id}", {
"type": "PRICE_ALERT",
"payload": {
"symbol": "AAPL",
"price": 150.00,
"threshold": 149.00
}
})
Subscriber
async def handle_user_notifications(channel):
async for message in channel.listen():
if message["type"] == "message":
await process_notification(message["data"])


### 2. Cache de Données
Set cache
await redis.setex(
f"market:price:{symbol}",
300, # TTL 5 minutes
json.dumps(price_data)
)
Get cache
cached_data = await redis.get(f"market:price:{symbol}")


## Considérations Techniques

### Performance
- TTL sur les données cachées
- Pattern de clés optimisé
- Pipeline pour les opérations multiples

### Fiabilité
- Retry pattern pour les messages critiques
- Fallback vers DB si nécessaire
- Monitoring des channels

### Scalabilité
- Sharding possible par user_id
- Clustering Redis si nécessaire
- Séparation cache/pub-sub possible