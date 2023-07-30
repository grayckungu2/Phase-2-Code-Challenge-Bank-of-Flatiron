import React, { useState } from 'react';

const AddTransactionForm = ({ onAdd }) => {
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(newTransaction);
    setNewTransaction({ description: '', amount: '' });
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newTransaction.description}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={newTransaction.date}
          onChange={handleInputChange}
          required
          />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={newTransaction.category}
          onChange={handleInputChange}
          required
        />  
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransactionForm;