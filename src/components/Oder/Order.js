import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {
    const Ingredients = [];
    for(let ingrName in props.ingredients) {
        Ingredients.push({
            name: ingrName,
            amount: props.ingredients[ingrName]})
    }
    let igrOutput = Ingredients.map(ig => (
    <span className={classes.OrderOutput} 
    key={ig.name}>{ig.name} ({ig.amount})</span>
    ))

    return (
        <div className={classes.Order}>
            <p>Ingredients: {igrOutput}</p>
            <p>Price: <strong>£ {props.price.toFixed(2)} </strong> </p>
            
        </div>
    );
};

export default Order;