import { useExpenses } from '../../context/ExpenseContext.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import './TransactionItem.css';

function TransactionItem({ transaction }) {
  const { deleteTransaction, setEditingTransaction } = useExpenses();
  return (
    <article className={`transaction-item ${transaction.type}`}>
      <div>
        <h3>{transaction.title}</h3>
        <p>{transaction.category} • {new Date(transaction.date).toLocaleDateString()}</p>
      </div>
      <strong>{transaction.type === 'expense' ? '-' : '+'}{formatCurrency(transaction.amount)}</strong>
      <div className="actions">
        <button onClick={() => setEditingTransaction(transaction)}>Edit</button>
        <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
      </div>
    </article>
  );
}
export default TransactionItem;
