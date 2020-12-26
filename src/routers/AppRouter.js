import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import PageNotFound from "../components/PageNotFound";
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component= { ExpenseDashBoardPage }  exact={true} />
                <Route path="/create" component= { AddExpensePage }   />
                <Route path="/edit/:id" component= { ExpenseEditPage }   />
                <Route path="/help" component= { ExpenseHelpPage }   />
                <Route  component= {PageNotFound }   />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;