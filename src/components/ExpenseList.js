import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
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