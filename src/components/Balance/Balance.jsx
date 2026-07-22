import { calculateTotals } from '../../utils/calculateTotals.js';
import { formatCurrency } from '../../utils/formatCurrency.js';
import './Balance.css';

function Balance({ transactions }) {
  const totals = calculateTotals(transactions);
  return (
    <article className="balance-card">
      <span>Total balance</span>
      <strong>{formatCurrency(totals.balance)}</strong>
      <p>{totals.balance >= 0 ? 'You are in the green.' : 'Time to reduce spending.'}</p>
    </article>
  );
}
export default Balance;
