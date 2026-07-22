export const categories = ['Food', 'Travel', 'Bills', 'Shopping', 'Health', 'Salary', 'Freelance', 'Other'];

export const starterTransactions = [
  { id: crypto.randomUUID(), title: 'Paycheck', amount: 3200, type: 'income', category: 'Salary', date: '2026-07-01' },
  { id: crypto.randomUUID(), title: 'Groceries', amount: 142.35, type: 'expense', category: 'Food', date: '2026-07-03' },
  { id: crypto.randomUUID(), title: 'Utilities', amount: 96.8, type: 'expense', category: 'Bills', date: '2026-07-08' },
  { id: crypto.randomUUID(), title: 'Design gig', amount: 680, type: 'income', category: 'Freelance', date: '2026-07-13' },
  { id: crypto.randomUUID(), title: 'Train pass', amount: 58, type: 'expense', category: 'Travel', date: '2026-07-17' },
];
