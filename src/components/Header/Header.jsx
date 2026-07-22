import { useExpenses } from '../../context/ExpenseContext.jsx';
import './Header.css';

function Header() {
  const { theme, setTheme } = useExpenses();
  return (
    <header className="header">
      <div>
        <p className="eyebrow">Personal finance</p>
        <h1>Expense Tracker</h1>
        <p>Track cash flow, spot spending patterns, and stay on budget.</p>
      </div>
      <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'} mode
      </button>
    </header>
  );
}
export default Header;
