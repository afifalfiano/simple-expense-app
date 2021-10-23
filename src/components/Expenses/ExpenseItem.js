
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import {useState} from 'react';

const ExpenseItem = (props) => {

    const {date, amount, id} = props;
    const [title, setTitle] = useState(props.title);

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;