

import { useState } from "react";
import NewExpense from "../NewExpense/NewExpense";
import './BtnNewExpenses.css';
const BtnNewExpenses = ({saveData}) => {

    const [showForm, setShowForm] = useState(false);
    
    const btnHandlerForm = () => {
        showForm ? setShowForm(false) : setShowForm(true)
        console.log(showForm)
    }
    const handlerShowForm = (show) => {
        console.log(show, 'a');
        setShowForm(show);
    }

    return (
        <div>
            {showForm && <NewExpense onSaveNewExpenseData={saveData} show={handlerShowForm}/>}
            {!showForm && <div className="btn-new-expense"><button onClick={btnHandlerForm}>Add New Expense</button></div>}
        </div>
    )

}

export default BtnNewExpenses;