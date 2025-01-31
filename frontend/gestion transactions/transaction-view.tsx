import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Calendar, CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Types
type Transaction = {
  id: string;
  type: 'ACHAT' | 'VENTE';
  quantity: number;
  price: number;
  fees: number;
  date: Date;
  symbol: string;
  total: number;
};

const TransactionsView = () => {
  // État local
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filters, setFilters] = useState({
    dateRange: {
      from: null,
      to: null
    },
    type: '',
    symbol: '',
  });

  // Formatage de la période sélectionnée
  const formatDateRange = () => {
    if (!filters.dateRange.from && !filters.dateRange.to) return "Sélectionner une période";
    
    const from = filters.dateRange.from ? new Date(filters.dateRange.from).toLocaleDateString() : "";
    const to = filters.dateRange.to ? new Date(filters.dateRange.to).toLocaleDateString() : "";
    return `${from} - ${to}`;
  };

  // Filtres et recherche
  const FilterSection = () => (
    <div className="flex gap-4 mb-6">
      <Input 
        placeholder="Rechercher un symbole" 
        className="w-48"
        onChange={(e) => setFilters({...filters, symbol: e.target.value})}
      />
      
      <Select 
        options={[
          { value: '', label: 'Tous les types' },
          { value: 'ACHAT', label: 'Achats' },
          { value: 'VENTE', label: 'Ventes' }
        ]}
        className="w-36"
        onChange={(value) => setFilters({...filters, type: value})}
      />

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-64 justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDateRange()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Calendar
            mode="range"
            selected={filters.dateRange}
            onSelect={(range) => 
              setFilters({...filters, dateRange: range})
            }
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );

  // Tableau des transactions
  const TransactionsTable = () => (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Type</th>
            <th className="px-6 py-3">Symbole</th>
            <th className="px-6 py-3">Quantité</th>
            <th className="px-6 py-3">Prix</th>
            <th className="px-6 py-3">Frais</th>
            <th className="px-6 py-3">Total</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">{transaction.date.toLocaleDateString()}</td>
              <td className={`px-6 py-4 ${transaction.type === 'ACHAT' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type}
              </td>
              <td className="px-6 py-4">{transaction.symbol}</td>
              <td className="px-6 py-4">{transaction.quantity}</td>
              <td className="px-6 py-4">{transaction.price}€</td>
              <td className="px-6 py-4">{transaction.fees}€</td>
              <td className="px-6 py-4">{transaction.total}€</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Modifier</Button>
                  <Button variant="destructive" size="sm">Supprimer</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Transactions</CardTitle>
          <Button>Nouvelle Transaction</Button>
        </div>
      </CardHeader>
      <CardContent>
        <FilterSection />
        <TransactionsTable />
      </CardContent>
    </Card>
  );
};

export default TransactionsView;
