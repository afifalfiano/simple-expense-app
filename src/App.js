import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import React, { useState } from 'react';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';
import BtnNewExpenses from './components/Expenses/BtnNewExpenses';

const App = () => {
  
  const [expensesEntered, setExpenseData] = useState([
    {
      id: 1,
      title: 'Keyboard Mechanical',
      amount: 50,
      date: new Date(2022, 7, 14)
    },
    {
      id: 2,
      title: 'Chair Gaming',
      amount: 224,
      date: new Date(2022, 7, 14)
    },
    {
      id: 3,
      title: 'Monitor LED',
      amount: 411,
      date: new Date(2019, 7, 14)
    },
    {
      id: 4,
      title: 'Table Gaming',
      amount: 334,
      date: new Date(2020, 7, 14)
    },
  ]);

  // return React.createElement(
  // 'div', {}, React.createElement('h2', {}, 'Lets get started!'),
  // React.createElement('p', {}, 'This is also visible!'),
  // React.createElement(Expenses, {expenses: expenses})
  // )

  const saveNewDataHandler = (expenseData) => {
    // expenses.push(expenseData);
    console.log(expenseData, 'a');
    setExpenseData([...expensesEntered, expenseData]);
    console.log(expensesEntered);
  }


  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>  
      {/* <NewExpense onSaveNewExpenseData={saveNewDataHandler} /> */}
      <BtnNewExpenses saveData={saveNewDataHandler}/>
      <Expenses expenses={expensesEntered}></Expenses>
    </div>
  );
}

export default App;
