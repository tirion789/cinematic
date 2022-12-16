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
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
      },
    },
  };

  console.log(countArray);

  const data = {
    labels,
    datasets: [
      {
        label: 'Статистика по жанрам',
        data: countArray,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default Chart;
