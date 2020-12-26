import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
};

export default ExpenseDashBoardPage;