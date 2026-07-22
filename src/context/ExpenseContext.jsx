import { createContext, useContext, useMemo, useState } from 'react';
import { starterTransactions } from '../services/expenseService.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const ExpenseContext = createContext(null);

export function ExpenseProvider({ children }) {
  const [transactions, setTransactions] = useLocalStorage('expense-tracker.transactions', starterTransactions);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [theme, setTheme] = useLocalStorage('expense-tracker.theme', 'light');

  const addTransaction = (transaction) => {
    setTransactions((current) => [{ ...transaction, id: crypto.randomUUID() }, ...current]);
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions((current) => current.map((item) => (item.id === updatedTransaction.id ? updatedTransaction : item)));
    setEditingTransaction(null);
  };

  const deleteTransaction = (id) => {
    setTransactions((current) => current.filter((transaction) => transaction.id !== id));
    if (editingTransaction?.id === id) setEditingTransaction(null);
  };

  const value = useMemo(
    () => ({ transactions, addTransaction, updateTransaction, deleteTransaction, editingTransaction, setEditingTransaction, theme, setTheme }),
    [transactions, editingTransaction, theme],
  );

  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
}

export const useExpenses = () => useContext(ExpenseContext);
