// Types
type Portfolio = {
  id: string;
  name: string;
  description: string;
  currency: string;
  value: number;
  cash: number;
  ytdPerformance: number;
  ytdDividends: number;
}

type Position = {
  id: string;
  symbol: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  totalValue: number;
  weight: number;
  profitLoss: number;
  category: string;
  feeling: string;
  region: string;
}

// Store Zustand
import create from 'zustand';

interface PortfolioStore {
  portfolio: Portfolio | null;
  positions: Position[];
  loading: boolean;
  fetchPortfolio: (id: string) => Promise<void>;
  fetchPositions: (portfolioId: string) => Promise<void>;
}

const usePortfolioStore = create<PortfolioStore>((set) => ({
  portfolio: null,
  positions: [],
  loading: false,
  fetchPortfolio: async (id) => {
    set({ loading: true });
    const response = await fetch(`/api/portfolios/${id}`);
    const data = await response.json();
    set({ portfolio: data, loading: false });
  },
  fetchPositions: async (portfolioId) => {
    set({ loading: true });
    const response = await fetch(`/api/portfolios/${portfolioId}/positions`);
    const data = await response.json();
    set({ positions: data, loading: false });
  }
}));

// Composant principal
import React, { useEffect } from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  Card, 
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const PortfolioView = ({ portfolioId }: { portfolioId: string }) => {
  const { portfolio, positions, fetchPortfolio, fetchPositions } = usePortfolioStore();

  useEffect(() => {
    fetchPortfolio(portfolioId);
    fetchPositions(portfolioId);
  }, [portfolioId]);

  // Overview Card
  const PortfolioOverview = () => (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">{portfolio?.name}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="textSecondary" gutterBottom>Valeur totale</Typography>
            <Typography variant="h6">
              {portfolio?.value.toLocaleString()} {portfolio?.currency}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="textSecondary" gutterBottom>Cash disponible</Typography>
            <Typography variant="h6">
              {portfolio?.cash.toLocaleString()} {portfolio?.currency}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="textSecondary" gutterBottom>Performance YTD</Typography>
            <Typography variant="h6" color={portfolio?.ytdPerformance >= 0 ? "success.main" : "error.main"}>
              {portfolio?.ytdPerformance.toFixed(2)}%
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="textSecondary" gutterBottom>Dividendes YTD</Typography>
            <Typography variant="h6">
              {portfolio?.ytdDividends.toLocaleString()} {portfolio?.currency}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  // Positions Table
  const PositionsTable = () => (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Symbole</TableCell>
            <TableCell>Quantité</TableCell>
            <TableCell>Prix moyen</TableCell>
            <TableCell>Prix actuel</TableCell>
            <TableCell>Valeur totale</TableCell>
            <TableCell>Poids (%)</TableCell>
            <TableCell>P/L</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positions.map((position) => (
            <TableRow key={position.id}>
              <TableCell>{position.symbol}</TableCell>
              <TableCell>{position.quantity}</TableCell>
              <TableCell>{position.averagePrice.toLocaleString()}</TableCell>
              <TableCell>{position.currentPrice.toLocaleString()}</TableCell>
              <TableCell>{position.totalValue.toLocaleString()}</TableCell>
              <TableCell>{position.weight.toFixed(2)}%</TableCell>
              <TableCell 
                sx={{ 
                  color: position.profitLoss >= 0 ? 'success.main' : 'error.main'
                }}
              >
                {position.profitLoss.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );

  // Allocation Charts
  const AllocationCharts = () => {
    const categoryData = positions.reduce((acc, pos) => {
      acc[pos.category] = (acc[pos.category] || 0) + pos.weight;
      return acc;
    }, {} as Record<string, number>);

    const regionData = positions.reduce((acc, pos) => {
      acc[pos.region] = (acc[pos.region] || 0) + pos.weight;
      return acc;
    }, {} as Record<string, number>);

    return (
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Allocation du portfolio</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom>Par catégorie</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={Object.entries(categoryData).map(([name, value]) => ({ name, value }))}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, value }) => `${name} (${value.toFixed(1)}%)`}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom>Par région</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={Object.entries(regionData).map(([name, value]) => ({ name, value }))}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, value }) => `${name} (${value.toFixed(1)}%)`}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </Paper>
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <PortfolioOverview />
      </Grid>
      <Grid item xs={12}>
        <PositionsTable />
      </Grid>
      <Grid item xs={12}>
        <AllocationCharts />
      </Grid>
    </Grid>
  );
};

export default PortfolioView;
