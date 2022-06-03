import React from 'react';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className='expenses'>
      {props.items.map((item, index) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
