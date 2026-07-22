import { useMemo, useState } from 'react';
import Header from './components/Header/Header.jsx';
import Balance from './components/Balance/Balance.jsx';
import Summary from './components/Summary/Summary.jsx';
import TransactionForm from './components/TransactionForm/TransactionForm.jsx';
import TransactionList from './components/TransactionList/TransactionList.jsx';
import ExpenseChart from './components/Charts/ExpenseChart.jsx';
import { useExpenses } from './context/ExpenseContext.jsx';

function App() {
  const { transactions, theme } = useExpenses();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const visibleTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesFilter = filter === 'all' || transaction.type === filter;
      const matchesSearch = `${transaction.title} ${transaction.category}`.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [transactions, filter, query]);

  return (
    <main className={`app ${theme}`}>
      <div className="shell">
        <Header />
        <section className="dashboard-grid">
          <div className="left-column">
            <Balance transactions={transactions} />
            <Summary transactions={transactions} />
            <ExpenseChart transactions={transactions} />
          </div>
          <div className="right-column">
            <TransactionForm />
            <TransactionList
              transactions={visibleTransactions}
              query={query}
              setQuery={setQuery}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
