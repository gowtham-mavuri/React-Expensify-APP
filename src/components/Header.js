import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () =>{
    return (
        <div>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>  HOME  </NavLink>
            <NavLink to="/create" activeClassName="is-active">   CREATE   </NavLink>
           
            <NavLink to="/help" activeClassName="is-active">   HELP   </NavLink>
        </div>
    );
}

export default Header;