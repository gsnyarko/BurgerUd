import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class Odersummery extends Component {

    // componentWillUpdate() {
    //     console.log('[ordersummer] will update');
    // }

    render() {
        const ingredientSummery = Object.keys(this.props.ingredients)
                            .map(igKey => {
                                return <li key={igKey}>{igKey}: {this.props.ingredients[igKey]}</li>
                            })
        return (
            <>
            <h3>Your order</h3>
            <p>A burger with the following: </p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Your total price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to chechout?</p>
            <Button btnType='Danger' Iclicked={this.props.cancella}>CANCEL</Button> 
            <Button  btnType='Success' Iclicked={this.props.continua}>CONTINUE</Button>    
            </>

        );
    }
}


export default Odersummery;