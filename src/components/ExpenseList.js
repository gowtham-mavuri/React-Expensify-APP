import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenses from '../selectors/expenses';

const ExpenseList = (props) => {
    const expenses = props.expenses.map((expense)=>expense.amount);
                                
    const totalExpensesSum = expenses.reduce((sum,val)=>sum+val,0);
    const totalExpensesCount = expenses.length;
    return (
        <div>
            <h2>No of Expenses : { totalExpensesCount }</h2>
            <h2>Total Spent : { totalExpensesSum }</h2>
            <h3>Expenses List</h3>
            {props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id}{ ...expense } />
            })}
        </div>
    );
}

const mapStateToProps =(state)=>{
    return {
        expenses : expenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);