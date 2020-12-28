import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenses from '../selectors/expenses';

const ExpenseList = (props) => {
    const expenses = props.expenses.map((expense)=>expense.amount);
                                
    const totalExpensesSum = expenses.reduce((sum,val)=>sum+val,0);
    const totalExpensesCount = expenses.length;
    let expenseWord = 'expense'
    if (totalExpensesCount>1)
        expenseWord = 'expenses';

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{totalExpensesCount} </span> 
                    {expenseWord} totalling Rs.<span>{totalExpensesSum}</span>
                    </h1>
                </div>
            </div>
            {
                totalExpensesCount ===0 ? (
                    <h1 className="content-container">Add some expenses</h1>
                ):(
                    <div className="content-container">
                    <div className="list-header">
                        <div>Expense</div>
                        <div>Amount</div>
                    </div>
                    {props.expenses.map((expense)=>{
                        return <ExpenseListItem key={expense.id}{ ...expense } />
                    })}
                </div>
                )
            }            
            
           
        </div>
    );
}

const mapStateToProps =(state)=>{
    return {
        expenses : expenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);