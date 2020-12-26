import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ( {description,amount,createdAt,id,note,dispatch} ) => {
    return (
        <div>
            <Link to={'/edit/'+id}>
                <h1>{ description }</h1>
            </Link>
            <p>Amount : { amount }</p>
            <p>Date : { moment(createdAt).format('MMM do YYYY') } </p>
        </div>
    );
}


export default ExpenseListItem;