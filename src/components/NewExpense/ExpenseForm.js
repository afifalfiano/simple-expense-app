import React, { useState } from 'react';

import './ExpenseForm.css';
import './NewExpense.css';

const ExpenseForm = ({onSaveExpenseData, onCancelForm}) => {
  // const [enteredTitle, setTitleChange] = useState('');
  // const [enteredAmount, setAmountChange] = useState('');
  // const [enteredDate, setDateChange] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle : '',
    enteredAmount : '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    // setTitleChange(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    setUserInput((previousState) => {
      return {...previousState, enteredTitle: event.target.value}
    })
  }

  const amountChangeHandler = (event) => {
    // setAmountChange(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    });
  }

  const dateChangeHandler = (event) => {
    // setDateChange(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    });
  }

  const handlerSubmit = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }

    onSaveExpenseData(ExpenseData);
    setUserInput({
      enteredAmount: '',
      enteredTitle: '',
      enteredDate: ''
    })
    onCancelForm(false);

  }

  const handlerCancel = () => {
    setUserInput({
      enteredAmount: '',
      enteredTitle: '',
      enteredDate: ''
    })

    onCancelForm(false);
  }
  return (
    <form onSubmit={handlerSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"  onChange={amountChangeHandler} value={userInput.enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate}/>
        </div>
      </div>
        <div className="new-expense__actions">
          <button onClick={handlerCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
    </form>
  );
};

export default ExpenseForm;