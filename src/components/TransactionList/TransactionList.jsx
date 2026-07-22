import TransactionItem from '../TransactionItem/TransactionItem.jsx';
import './TransactionList.css';

function TransactionList({ transactions, query, setQuery, filter, setFilter }) {
  return (
    <section className="transaction-list">
      <div className="list-header"><h2>Transactions</h2><span>{transactions.length} shown</span></div>
      <div className="filters">
        <input aria-label="Search transactions" placeholder="Search by name or category" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select aria-label="Filter transactions" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option><option value="income">Income</option><option value="expense">Expenses</option>
        </select>
      </div>
      <div className="items">
        {transactions.map((transaction) => <TransactionItem key={transaction.id} transaction={transaction} />)}
        {!transactions.length && <p className="empty">No matching transactions yet.</p>}
      </div>
    </section>
  );
}
export default TransactionList;
