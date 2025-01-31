import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

type TransactionFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TransactionData) => void;
};

type TransactionData = {
  type: 'ACHAT' | 'VENTE';
  symbol: string;
  quantity: number;
  price: number;
  fees: number;
  date: string;
};

const TransactionForm = ({ isOpen, onClose, onSubmit }: TransactionFormProps) => {
  const [formData, setFormData] = useState<TransactionData>({
    type: 'ACHAT',
    symbol: '',
    quantity: 0,
    price: 0,
    fees: 0,
    date: new Date().toISOString().split('T')[0]
  });

  const [error, setError] = useState<string>('');

  const validateForm = (): boolean => {
    if (formData.quantity <= 0) {
      setError('La quantité doit être supérieure à 0');
      return false;
    }
    if (formData.price < 0) {
      setError('Le prix doit être positif');
      return false;
    }
    if (formData.fees < 0) {
      setError('Les frais doivent être positifs ou nuls');
      return false;
    }
    if (new Date(formData.date) > new Date()) {
      setError('La date ne peut pas être dans le futur');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      onClose();
    }
  };

  const handleChange = (field: keyof TransactionData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Nouvelle Transaction</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label>Type de transaction</Label>
            <div className="flex gap-4">
              {(['ACHAT', 'VENTE'] as const).map(type => (
                <Button
                  key={type}
                  type="button"
                  variant={formData.type === type ? "default" : "outline"}
                  onClick={() => handleChange('type', type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="symbol">Symbole</Label>
            <Input
              id="symbol"
              value={formData.symbol}
              onChange={e => handleChange('symbol', e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantité</Label>
              <Input
                id="quantity"
                type="number"
                step="0.01"
                value={formData.quantity}
                onChange={e => handleChange('quantity', parseFloat(e.target.value))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Prix unitaire</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={e => handleChange('price', parseFloat(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fees">Frais</Label>
            <Input
              id="fees"
              type="number"
              step="0.01"
              value={formData.fees}
              onChange={e => handleChange('fees', parseFloat(e.target.value))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={e => handleChange('date', e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit">
              Confirmer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionForm;
