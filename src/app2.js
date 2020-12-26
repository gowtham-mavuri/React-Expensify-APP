
import { createStore, combineReducers } from 'redux' ;
import uuid from 'uuid';

const expenseReducerDefaultState = [];

const filtersReducerDefaultState = {
    text : '',
    sortBy : 'date', //date or amount
    startDate : undefined,
    endDate : undefined
};

//ADD_EXPENSE
const addExpense = ( { description='',note='',amount=0,createdAt=0 }={} ) => {
    return (
        {
            type : 'ADD_EXPENSE',
            expense : { id: uuid(),
                        description ,
                        note ,
                        amount ,
                        createdAt  
                       }
        }
    );
}

//EDIT_EXPENSE
const editExpense = (id,updates) => {
    return (
        {
            type : 'EDIT_EXPENSE',
            id,
            updates
        }
    );
}

//REMOVE_EXPENSE
const removeExpense = ({ id }) => {
    return (
        {
            type : 'REMOVE_EXPENSE',
            id 
        }
    );
}

//SET_TEXT_FILTER
const setTextFilter = (text='') => {
    return (
        {
            type: 'SET_TEXT_FILTER',
            text
        }
    );
}

//SORT_BY_DATE
const sortByDateFilter = () => {
    return (
        {
            type: 'SORT_BY_DATE'
        }
    );
}

//SORT_BY_AMOUNT
const sortByAmountFilter = () => {
    return (
        {
            type: 'SORT_BY_AMOUNT'
        }
    );
}

const setStartDate =(date=undefined) => {
    return (
        {
            type:'SET_START_DATE',
            date
        }
    );
}

const setEndDate =(date=undefined) => {
    return (
        {
            type:'SET_END_DATE',
            date
        }
    );
}

const expenseReducer =(state=expenseReducerDefaultState,action) => {
    switch(action.type)
    {
        case 'ADD_EXPENSE' : return [...state,action.expense];
        case 'EDIT_EXPENSE' : return state.map((expense)=>{
            if(expense.id === action.id)
                return { ...expense,...action.updates };
            else
                return expense;
        });
        case 'REMOVE_EXPENSE' : return state.filter((expense)=>{ return expense.id !== action.id });
        default : return state;
    }
};

const filtersReducer =(state=filtersReducerDefaultState,action) => {
    switch(action.type)
    {
        case 'SET_TEXT_FILTER' : return { ...state,text : action.text };
        case 'SORT_BY_DATE' : return { ...state,sortBy:'date' };
        case 'SORT_BY_AMOUNT' : return { ...state,sortBy:'amount' };
        case 'SET_START_DATE' : return { ...state,startDate: action.date };
        case 'SET_END_DATE' : return { ...state,endDate: action.date };
        default : return state;
    }
};

const store = createStore(
    combineReducers(
        {
            expenses : expenseReducer,
            filters : filtersReducer
        }
    ));

const getFilteredData = (expenses,{ text , sortBy , startDate , endDate }) => {
    return expenses.filter((expense)=>{
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt>= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;


        return textMatch && startDateMatch && endDateMatch ;
    }).sort((a,b)=>{
        if(sortBy==='date')
            return a.createdAt < b.createdAt ? 1 : -1;
        else if(sortBy==='amount')
            return a.amount < b.amount ? 1 : -1;
    });
};

store.subscribe(()=>{
    const state = store.getState();
    const expenses=getFilteredData(state.expenses,state.filters);
    console.log(expenses);
});

const expense1=store.dispatch(addExpense({ description:'Rent',amount:5000,createdAt:100 }));
const expense2 = store.dispatch(addExpense({ description:'BILL',amount:3000,createdAt:1000 }));

//store.dispatch(removeExpense({ id:expense1.expense.id }));
//store.dispatch(editExpense(expense2.expense.id,{ amount:10 }));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(sortByDateFilter());
store.dispatch(sortByAmountFilter());

//store.dispatch(setStartDate(125));
//store.dispatch(setEndDate(300));

//store.dispatch(setStartDate());

const demoState = {
    expenses : [
        {
            id: 'afdafda',
            description : 'rent',
            note : 'july rent',
            amount : 5000,
            createdAt : 0
        }
    ],
    filters : {
        text : 'rent',
        sortBy : 'amount', //date or amount
        startDate : undefined,
        endDate : undefined
    }

};