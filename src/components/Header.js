import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
const Header = (props) =>{
    return (
        <div>
            <h1>Expensify</h1>
            <NavLink to="/dashboard" activeClassName="is-active" exact={true}>  HOME  </NavLink>
            <NavLink to="/create" activeClassName="is-active">   CREATE   </NavLink>
           
            <NavLink to="/help" activeClassName="is-active">   HELP   </NavLink>
            <button onClick={props.dispatch(startLogout)}>Logout</button>
        </div>
    );
}

export default connect()(Header);