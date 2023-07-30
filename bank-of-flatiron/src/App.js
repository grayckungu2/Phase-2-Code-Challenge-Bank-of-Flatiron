import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import AddTransactionForm from './components/AddTransactionForm';
import SearchBar from './components/SearchBar';
import './style.css';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('none');

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:8001/transactions');
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const addTransaction = async (newTransaction) => {
    try {
      const response = await fetch('http://localhost:8001/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTransaction)
      });
      if (response.ok) {
        fetchTransactions();
      } else {
        console.error('Error adding transaction:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  const handleSort = (type) => {
    

    if (sortType === type) {
      
      setSortType(null);
    } else {
      setSortType(type);
      const sortedTransactions = [...transactions];

    if (type === 'category') {
      sortedTransactions.sort((a, b) => a.category.localeCompare(b.category));
    } else if (type === 'description') {
      sortedTransactions.sort((a, b) => a.description.localeCompare(b.description));
    }

    setTransactions(sortedTransactions);
  }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8001/transactions/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
      } else {
        console.error('Error deleting transaction:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const sortedTransactions = [...transactions];

  if (sortType === 'category') {
    sortedTransactions.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortType === 'description') {
    sortedTransactions.sort((a, b) => a.description.localeCompare(b.description));
  }

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>Bank Of Flatiron [BOF]</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        <button onClick={() => handleSort(null)}>Clear Sort</button>
        <button onClick={() => handleSort('category')}>Sort by Category</button>
        <button onClick={() => handleSort('description')}>Sort by Description</button>
      </div>
      <TransactionTable transactions={filteredTransactions} onDelete={handleDelete}/>
      <AddTransactionForm onAdd={addTransaction} />
    </div>
  );
};

export default App;