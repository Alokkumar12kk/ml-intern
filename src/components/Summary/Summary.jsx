import { calculateTotals } from '../../utils/calculateTotals.js';
import { formatCurrency } from '../../utils/formatCurrency.js';
import './Summary.css';

function Summary({ transactions }) {
  const totals = calculateTotals(transactions);
  return (
    <section className="summary-grid">
      <article><span>Income</span><strong>{formatCurrency(totals.income)}</strong></article>
      <article><span>Expenses</span><strong>{formatCurrency(totals.expense)}</strong></article>
    </section>
  );
}
export default Summary;
