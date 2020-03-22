import React from 'react';
import Button from '../../UI/Button/Button';

const Odersummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
                            .map(igKey => {
                                return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>
                            })
    return (
        <>
        <h3>Your order</h3>
        <p>A burger with the following: </p>
        <ul>
            {ingredientSummery}
        </ul>
        <p><strong>Your total price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to chechout?</p>
        <Button btnType='Danger' Iclicked={props.cancella}>CANCEL</Button> 
        <Button  btnType='Success' Iclicked={props.continua}>CONTINUE</Button>    
        </>
    );
};

export default Odersummery;