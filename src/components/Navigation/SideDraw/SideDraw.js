import React from 'react';
import classes from './SideDraw.module.css';
import Logo from '../../Logo/Logo';
import Nav from '../NavigationItems/NavagationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';



const SideDraw = (props) => {
    let attachedClasses = [classes.SideDraw, classes.Close]
    if(props.open) {
        attachedClasses = [classes.SideDraw, classes.Open]
    }


    return (
        <>
        <BackDrop showBackdrop={props.open} clicked={props.closed}/>
         <div className={attachedClasses.join(' ')}>
            <div className={classes.LogoS}>
            <Logo  />
            </div>
     
        <nav>
            <Nav></Nav>
        </nav>
        </div>
        </>
    );
};

export default SideDraw;