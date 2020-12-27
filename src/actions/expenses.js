import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE
const addExpense = ( expense={} ) => {
    return (
        {
            type : 'ADD_EXPENSE',
            expense 
        }
    );
}

export const startAddExpense = ({ description='',note='',amount=0,createdAt=0 }={}) => {
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        const expense = { description , amount , note , createdAt };
        database.ref('users/'+uid+'/expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id : ref.key,
                ...expense
            }));
        }).catch((e)=>{
            console.log('Error while writing to firebase',e);
        });

    };
};



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

export const startEditExpense = (id,updates) => {
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        const expense = { description:updates.description,
                             amount : updates.amount,
                             note: updates.note ,
                              createdAt :updates.createdAt
                        };
        database.ref('users/'+uid+'/expenses/'+id).update(expense).then((ref)=> {
            dispatch(editExpense(id,updates));
        }).catch((e)=>{
            console.log('Error Occured')
        });
    };
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

export const startRemoveExpense = ({id}) => {
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        database.ref('users/'+uid+'/expenses/'+id).remove().then((ref)=> {
            dispatch(removeExpense({id}));
        }).catch((e)=>{
            console.log('Error Occured')
        });
    };
}


const setExpenses = (expenses) => {
    return {  
        type : 'SET_EXPENSES',
        expenses
    }
}

export const startSetExpenses = () => {
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref('users/'+uid+'/expenses').once('value').then((snapshot)=>{
            const expenses=[];
            snapshot.forEach(childSnapshot => {
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
}