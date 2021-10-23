import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const onSaveExpenseHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onSaveNewExpenseData(expense);
  }

  const onCancelHandler = (data) => {
    props.show(data);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} onCancelForm={onCancelHandler}/>
    </div>
  );
};

export default NewExpense;