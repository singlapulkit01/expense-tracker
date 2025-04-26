import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { getExpenses } from '../services/expenseService';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses().then(res => setExpenses(res.data));
  }, []);

  const categoryData = {};
  const monthlyData = {};

  expenses.forEach(exp => {
    categoryData[exp.category] = (categoryData[exp.category] || 0) + exp.amount;
    const month = new Date(exp.date).toLocaleString('default', { month: 'short' });
    monthlyData[month] = (monthlyData[month] || 0) + exp.amount;
  });

  const pieData = {
    labels: Object.keys(categoryData),
    datasets: [{
      label: 'Expenses by Category',
      data: Object.values(categoryData),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#AA65CC', '#4BC0C0'],
    }],
  };

  const barData = {
    labels: Object.keys(monthlyData),
    datasets: [{
      label: 'Monthly Expenses',
      data: Object.values(monthlyData),
      backgroundColor: '#36A2EB',
    }],
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ width: '40%', margin: 'auto' }}>
        <Pie data={pieData} />
      </div>
      <div style={{ width: '70%', margin: 'auto', marginTop: '50px' }}>
        <Bar data={barData} />
      </div>
    </div>
  );
}

export default Dashboard;
