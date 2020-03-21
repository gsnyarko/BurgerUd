import React from 'react';
import classes from './buildcontrols.module.css';
import BuildC from './Buildcontrol/buildC';

const controls = [
    {label: 'Salad' ,type: 'salad'},
    {label: 'Cheese' ,type: 'cheese'},
    {label: 'Meat' ,type: 'meat'},
    {label: 'Bacon' ,type: 'bacon'},
]

const buildcontrol = (props) => {
    return (
        <div className={classes.Buildcontrols}>
            <p>price: <strong>${props.price.toFixed(2)}</strong> </p>
            {controls.map(control => {
                return <BuildC 
                key={control.label} 
                label={control.label}
                added={()=>props.ingredientsAdded(control.type)}
                removed={()=>props.ingredientsRemoved(control.type)}
                disabled={props.disabled[control.type]}/>
            })}
            <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}>ORDER HERE</button>

            
        </div>
    );
};

export default buildcontrol;