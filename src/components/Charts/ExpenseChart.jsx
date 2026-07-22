import { Bar, Doughnut } from 'react-chartjs-2';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import { categoryTotals, monthlyExpenseTotals } from '../../utils/calculateTotals.js';
import './ExpenseChart.css';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Legend, Tooltip);

function ExpenseChart({ transactions }) {
  const categories = categoryTotals(transactions);
  const months = monthlyExpenseTotals(transactions);
  const palette = ['#6366f1', '#22c55e', '#f97316', '#e11d48', '#06b6d4', '#a855f7', '#facc15'];
  return (
    <section className="chart-panel">
      <h2>Spending insights</h2>
      <div className="charts">
        <div className="chart-box"><Doughnut options={{ maintainAspectRatio: false }} data={{ labels: Object.keys(categories), datasets: [{ data: Object.values(categories), backgroundColor: palette }] }} /></div>
        <div className="chart-box"><Bar options={{ maintainAspectRatio: false }} data={{ labels: Object.keys(months), datasets: [{ label: 'Monthly expenses', data: Object.values(months), backgroundColor: '#6366f1', borderRadius: 10 }] }} /></div>
      </div>
    </section>
  );
}
export default ExpenseChart;
