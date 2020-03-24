import React from 'react';
import classes from './NavigationItems.module.css';
import NavItem from './NavItem/Navitem';

const NavagationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavItem link='/' active>Burger builder</NavItem>
            <NavItem link='/' >Checkout</NavItem>
           
        </ul>
    );
};

export default NavagationItems;