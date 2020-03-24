import React from 'react';
import classes from './Toolss.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavagationItems'
import ToggleDraw from '../SideDraw/Toggle/Toggle';


const Toolbar = ( props ) => {
    return (
        <header className={classes.Toolbar}>
            <ToggleDraw clicked={props.ToggleDrawOnclick}/>
            <div className={classes.LogoT}>
            <Logo  /> 
            </div>
            
            <nav className={classes.Desktop}>
               <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;