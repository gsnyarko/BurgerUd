import React from 'react';
import classes from './NavigationItems.module.css';
import NavItem from './NavItem/Navitem';

const NavagationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavItem link='/' exact>Burger builder</NavItem>
            <NavItem link='/orders' >Orders</NavItem>
           
        </ul>
    );
};

export default NavagationItems;