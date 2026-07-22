import { useEffect, useState } from 'react';
import { categories } from '../../services/expenseService.js';
import { useExpenses } from '../../context/ExpenseContext.jsx';
import './TransactionForm.css';

const emptyForm = { title: '', amount: '', type: 'expense', category: 'Food', date: new Date().toISOString().slice(0, 10) };

function TransactionForm() {
  const { addTransaction, updateTransaction, editingTransaction, setEditingTransaction } = useExpenses();
  const [form, setForm] = useState(emptyForm);

  useEffect(() => setForm(editingTransaction || emptyForm), [editingTransaction]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const transaction = { ...form, amount: Math.abs(Number(form.amount)) };
    if (!transaction.title || !transaction.amount) return;
    editingTransaction ? updateTransaction(transaction) : addTransaction(transaction);
    setForm(emptyForm);
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2>{editingTransaction ? 'Edit transaction' : 'Add transaction'}</h2>
      <input aria-label="Title" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <div className="form-row">
        <input aria-label="Amount" type="number" min="0" step="0.01" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
        <input aria-label="Date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
      </div>
      <div className="form-row">
        <select aria-label="Type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="expense">Expense</option><option value="income">Income</option>
        </select>
        <select aria-label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
          {categories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </div>
      <button type="submit">{editingTransaction ? 'Save changes' : 'Add transaction'}</button>
      {editingTransaction && <button type="button" className="ghost" onClick={() => setEditingTransaction(null)}>Cancel edit</button>}
    </form>
  );
}
export default TransactionForm;
