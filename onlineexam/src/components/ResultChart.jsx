import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ResultChart({ scores }) {
  const data = {
    labels: scores.map((_, i) => `Exam ${i + 1}`),
    datasets: [
      {
        label: 'Scores',
        data: scores,
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold text-center mb-4">Performance Analytics</h2>
      <Bar data={data} />
    </div>
  );
}
export default ResultChart;
