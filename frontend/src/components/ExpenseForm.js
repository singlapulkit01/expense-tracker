import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createExpense, updateExpense, getExpenses } from '../services/expenseService';

function ExpenseForm() {
  const [expense, setExpense] = useState({ amount: '', category: '', description: '', date: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getExpenses().then(res => {
        const found = res.data.find(exp => exp._id === id);
        if (found) setExpense(found);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateExpense(id, expense).then(() => navigate('/'));
    } else {
      createExpense(expense).then(() => navigate('/'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={expense.category} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={expense.description} onChange={handleChange} />
      <input type="date" name="date" value={expense.date.split('T')[0]} onChange={handleChange} required />
      <button type="submit">{id ? "Update" : "Add"} Expense</button>
    </form>
  );
}

export default ExpenseForm;
