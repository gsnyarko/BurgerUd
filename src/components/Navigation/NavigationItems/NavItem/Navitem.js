import React from 'react';
import classes from './Navitem.module.css';

const Navitem = (props) => {
    return (
             <li className={classes.NavItem}>
            <a href={props.link} 
            className={props.active ? classes.active : null}>{props.children}</a>
            </li>
    );
};

export default Navitem;