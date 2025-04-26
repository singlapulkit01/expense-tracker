import React, { useState, useEffect } from 'react';
import { getExpenses, deleteExpense } from '../services/expenseService';
import { Link } from 'react-router-dom';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = () => {
    getExpenses().then(res => setExpenses(res.data));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = (id) => {
    deleteExpense(id).then(() => fetchExpenses());
  };

  return (
    <div>
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp._id}>
              <td>${exp.amount}</td>
              <td>{exp.category}</td>
              <td>{exp.description}</td>
              <td>{new Date(exp.date).toLocaleDateString()}</td>
              <td>
                <Link to={`/edit/${exp._id}`}>Edit</Link> | 
                <button onClick={() => handleDelete(exp._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
