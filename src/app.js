import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { login,logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter,{history} from './routers/AppRouter';
import {firebase} from './firebase/firebase';
import {startSetExpenses} from './actions/expenses';

const store = configureStore();
/*  
    store.subscribe(()=>{
        const state = store.getState();
        const expenses=getFilteredData(state.expenses,state.filters);
        console.log(expenses);
    });



    store.dispatch(addExpense({ description:'Home Rent',amount:5000,createdAt:100 }));
    store.dispatch(addExpense({ description:'Food Bill',amount:3000,createdAt:1000 }));

*/
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider >
);

let hasRendered = false;

const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered=true;
    }
}


ReactDOM.render(<h1>....loading....</h1>,document.getElementById('app'));




firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        console.log('logged in');
        store.dispatch(startSetExpenses()).then(()=>{
           renderApp();
            if(history.location.pathname === '/')
                history.push('/dashboard');
        });
    }
    else{ 
        store.dispatch(logout());
        renderApp();
        console.log("NOT ALLOWD")
        history.push('/');
    }
});



