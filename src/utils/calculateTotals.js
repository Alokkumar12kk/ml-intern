export function calculateTotals(transactions) {
  return transactions.reduce(
    (totals, transaction) => {
      const amount = Number(transaction.amount);
      if (transaction.type === 'income') totals.income += amount;
      if (transaction.type === 'expense') totals.expense += amount;
      totals.balance = totals.income - totals.expense;
      return totals;
    },
    { income: 0, expense: 0, balance: 0 },
  );
}

export function categoryTotals(transactions) {
  return transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((totals, transaction) => {
      totals[transaction.category] = (totals[transaction.category] || 0) + Number(transaction.amount);
      return totals;
    }, {});
}

export function monthlyExpenseTotals(transactions) {
  return transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((months, transaction) => {
      const label = new Date(transaction.date).toLocaleString('en-US', { month: 'short' });
      months[label] = (months[label] || 0) + Number(transaction.amount);
      return months;
    }, {});
}
