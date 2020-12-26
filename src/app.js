import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense,editExpense, removeExpense } from './actions/expenses';
import { setTextFilter,sortByDateFilter,sortByAmountFilter,setStartDate,setEndDate } from './actions/filters';
import getFilteredData from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const store = configureStore();
/*  store.subscribe(()=>{
        const state = store.getState();
        const expenses=getFilteredData(state.expenses,state.filters);
        console.log(expenses);
    });
*/


store.dispatch(addExpense({ description:'Home Rent',amount:5000,createdAt:100 }));
store.dispatch(addExpense({ description:'Food Bill',amount:3000,createdAt:1000 }));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider >
);

ReactDOM.render(jsx,document.getElementById('app'));

