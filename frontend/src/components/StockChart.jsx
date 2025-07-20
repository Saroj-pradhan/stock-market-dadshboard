// ChartComponent.tsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useContext } from 'react';
import { ContextApp } from '../context/ContextApp';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'white', // <-- legend text color
      },
    },
    title: {
      display: true,
      text: 'Stock Price Over Time',
      color: 'white', // <-- title color
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white', // <-- x-axis tick color
      },
      grid: {
        color: 'gray', // optional: grid line color
      },
    },
    y: {
      ticks: {
        color: 'white', // <-- y-axis tick color
      },
      grid: {
        color: 'gray', // optional: grid line color
      },
    },
  },
};

const StockChart = () => {
  const [ , , presenteddata ] = useContext(ContextApp);

  // Safety check
  if (!presenteddata || !presenteddata.historicalData) return <div>Loading chart...</div>;

  const labels = presenteddata.historicalData.map(dt => dt.date);
  const prices = presenteddata.historicalData.map(dt => dt.price);

  const data = {
    labels,
    datasets: [
      {
        label: presenteddata.symbol || 'Stock',
        data: prices,
        borderColor: 'lightgreen',
        backgroundColor: 'green',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default StockChart;

