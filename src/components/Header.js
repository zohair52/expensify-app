import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout, startLogin} from '../actions/auth';

export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={startLogout}> Logout</button>
    </header>
);

const mapDipatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(undefined , mapDipatchToProps)(Header);
