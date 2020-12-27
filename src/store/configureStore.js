import { createStore, combineReducers,applyMiddleware,compose } from 'redux' ;
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import AuthReducer from '../reducers/auth';


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

export default ()=>{
    const store = createStore(
    combineReducers(
        {
            expenses : expenseReducer,
            filters : filtersReducer,
            auth : AuthReducer
        }
    ),
    composeEnchancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};