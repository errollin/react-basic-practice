import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';

import './App.css';
import { DUMMY_EXPENSES } from './data/index';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExepnseHandler = (expense) => {
    setExpenses((prevSatate) => {
      return [expense, ...prevSatate];
    });
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExepnseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
