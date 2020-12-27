import React from 'react';
import { Router,Route,Switch } from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import PageNotFound from "../components/PageNotFound";

import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component= { LoginPage }  exact={true} />
                <PrivateRoute path="/dashboard" component= { ExpenseDashBoardPage }  />
                <PrivateRoute path="/create" component= { AddExpensePage }   />
                <PrivateRoute path="/edit/:id" component= { ExpenseEditPage }   />
                <Route path="/help" component= { ExpenseHelpPage }   />
                <Route  component= {PageNotFound }   />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;