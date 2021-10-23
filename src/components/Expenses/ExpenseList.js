

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = (props) => {

    let expenseList = <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
    if (props.items.length > 0) {
        expenseList = props.items.map((item) => {
                    return <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>;
            })
    }

    return (
        <ul className="expenses-list">
            {expenseList}
        </ul>
    )

}


export default ExpenseList;