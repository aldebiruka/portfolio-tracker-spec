vue dédiée à l'historique des transactions d'une position spécifique.



```tsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type PositionTransaction = {
  id: string;
  type: 'ACHAT' | 'VENTE';
  quantity: number;
  price: number;
  fees: number;
  date: Date;
  total: number;
};

type PositionHistoryProps = {
  positionId: string;
  symbol: string;
};

const PositionTransactionHistory = ({ positionId, symbol }: PositionHistoryProps) => {
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [transactions, setTransactions] = useState<PositionTransaction[]>([]);

  // Calcul des métriques de la position
  const metrics = {
    totalInvesti: transactions.reduce((sum, t) => 
      t.type === 'ACHAT' ? sum + t.total : sum - t.total, 0),
    quantiteTotale: transactions.reduce((sum, t) => 
      t.type === 'ACHAT' ? sum + t.quantity : sum - t.quantity, 0),
    prixMoyen: 0, // Calculé ci-dessous
    totalFrais: transactions.reduce((sum, t) => sum + t.fees, 0)
  };
  
  metrics.prixMoyen = metrics.quantiteTotale ? metrics.totalInvesti / metrics.quantiteTotale : 0;

  // Données pour le graphique
  const chartData = transactions.map(t => ({
    date: t.date.toLocaleDateString(),
    prix: t.price,
    type: t.type,
    quantite: t.quantity
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Historique des Transactions - {symbol}</CardTitle>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CalendarIcon className="h-4 w-4" />
                Période
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="end">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Résumé de la position */}
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Quantité totale</div>
            <div className="text-xl font-semibold">{metrics.quantiteTotale}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Prix moyen</div>
            <div className="text-xl font-semibold">{metrics.prixMoyen.toFixed(2)}€</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Total investi</div>
            <div className="text-xl font-semibold">{metrics.totalInvesti.toFixed(2)}€</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Total des frais</div>
            <div className="text-xl font-semibold">{metrics.totalFrais.toFixed(2)}€</div>
          </div>
        </div>

        {/* Graphique d'évolution */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" />
              <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="prix" fill="#82ca9d" name="Prix" />
              <Bar yAxisId="right" dataKey="quantite" fill="#8884d8" name="Quantité" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tableau des transactions */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Quantité</th>
                <th className="px-6 py-3">Prix</th>
                <th className="px-6 py-3">Frais</th>
                <th className="px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{transaction.date.toLocaleDateString()}</td>
                  <td className={`px-6 py-4 ${
                    transaction.type === 'ACHAT' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4">{transaction.quantity}</td>
                  <td className="px-6 py-4">{transaction.price}€</td>
                  <td className="px-6 py-4">{transaction.fees}€</td>
                  <td className="px-6 py-4">{transaction.total}€</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PositionTransactionHistory;

```

Cette vue contient :

1. En-tête avec :
- Titre avec le symbole de la position
- Sélecteur de période

2. Résumé des métriques :
- Quantité totale détenue
- Prix moyen d'achat
- Total investi
- Total des frais

3. Graphique montrant :
- L'évolution du prix d'achat/vente
- Les quantités par transaction
- Double axe Y pour prix et quantités

4. Tableau détaillé des transactions avec :
- Date
- Type (ACHAT/VENTE)
- Quantité
- Prix unitaire
- Frais
- Montant total

Pour utiliser ce composant :

```typescript
<PositionTransactionHistory 
  positionId="123"
  symbol="AAPL"
/>
```
