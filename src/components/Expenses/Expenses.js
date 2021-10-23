import Card from "../UI/Card";
import ExpenseList from './ExpenseList';

import ExpenseFilter from './ExpenseFilter'
import { useState } from "react";
import './Expenses.css';

const Expenses = (props) => {
    const {expenses} = props;
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const expenseFilter = expenses.filter((item) => {
        if (item.date.getFullYear().toString() === filteredYear) {
            return item;
        }
    })

    return (
        <div>
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseList items={expenseFilter}/>
        </Card>
        </div>
    )
}

export default Expenses;