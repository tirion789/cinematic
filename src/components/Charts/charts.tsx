import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const Chart: React.FC = () => {
  const labels = ['Action', 'K drama', 'Sitcom', 'Romantic'];
  const colors = ['white', 'blue', 'blue', 'red'];
  const items = useSelector((state: RootState) => state.profile.items);
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const genres = items.map((obj) => {
    return obj.genre;
  });

  const arrayGenreValue = labels.map((arrays) => {
    return genres.map((genre) => genre.includes(arrays));
  });

  const countArray = arrayGenreValue.map(
    (obj) =>
      obj.filter((valueElement) => {
        return valueElement;
      }).length,
  );

  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Genre statistics',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: countArray,
        backgroundColor: colors,
      },
    ],
  };
  return <Bar height={500} width={300} options={options} data={data} />;
};

export default Chart;
