import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ( {description,amount,createdAt,id,note,dispatch} ) => {
    return (
            <Link className="list-item" to={'/edit/'+id}>
            <div>
                <h1 className="list-item__title">{ description }</h1>
                <p className="list-item__subtitle">{ moment(createdAt).format('MMM Do, YYYY') } </p>
            </div>
                <p className="list-item__amount">Amount : { amount }</p>
            </Link>
    );
}


export default ExpenseListItem;