import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './Totalcheck.module.css'

const Totalcheck = (props) => {
    return (
        <div className={classes.Totalcheck}>
            <h1>Thanks!! Enjoy</h1>
            <div style={{margin: 'auto', width: '100%'}}></div>
            <Burger  ingredients={props.ingredients}/>
            <Button btnType='Danger' Iclicked={props.checkOutCan}>CANCEL</Button>
            <Button btnType='Success' Iclicked={props.checkOutCont}>CONTINUE</Button>
            
        </div>
    );
};

export default Totalcheck;