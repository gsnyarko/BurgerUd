import React from 'react';
import classes from './Navitem.module.css';
import { NavLink } from 'react-router-dom';

const Navitem = (props) => {
    return (
             <li className={classes.NavItem}>
            <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active} 
            >
                {props.children}</NavLink>
            </li>
    );
};

export default Navitem;