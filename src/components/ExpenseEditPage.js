import React from 'react';
import {connect} from 'react-redux';
import { startEditExpense,startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const ExpenseEditPage = (props) => {
    //console.log(props);
    return (
        <div>
        <ExpenseForm 
        expense = {props.expense}
        onSubmit={(expense)=>{
            props.dispatch(startEditExpense(props.expense.id,expense));
            props.history.push("/");
        }}
        />
        <button onClick={()=>{
            props.dispatch(startRemoveExpense({ id:props.expense.id}));
            props.history.push("/");
        }} >Remove</button>
        </div>
    );
};

const mapStatetoProps=(state,props)=>{
    return {
        expense : state.expenses.find((expense)=> expense.id === props.match.params.id )
    }

}

export default connect(mapStatetoProps)(ExpenseEditPage);