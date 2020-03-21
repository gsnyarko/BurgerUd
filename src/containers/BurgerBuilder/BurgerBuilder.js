import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuilControl from '../../components/Burger/Buildcontrols/buildcontrols'

const INGRE_PRICES = {
    salad: 0.4,
    meat: 1,
    bacon: 0.5,
    cheese: 0.7

}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
    }

    handlePurchase = (ingred) => {

        const sum = Object.keys(ingred)
                          .map(item => ingred[item])
                          .reduce((acc, va) => acc + va, 0)
       this.setState({purchasable: sum > 0})
    }

    // handlePurchase = (ingred) => {

    //     const sum = Object.values(ingred)
    //                         .reduce((acc, va) => acc + va, 0)
    // this.setState({purchasable: sum > 0})
       
    // }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedcount = oldCount + 1
        const updateIngredients = {...this.state.ingredients}
        
        updateIngredients[type] = updatedcount;
        const addedprice = INGRE_PRICES[type];
        const oldprice = this.state.totalPrice
        const newprice = oldprice + addedprice

        this.setState({totalPrice: newprice, ingredients: updateIngredients})

        this.handlePurchase(updateIngredients ); // so we manage orders while we add ingre

    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0) { // so we dont get error removing to -1;
            return;
        }
        const updatedcount = oldCount - 1
        const updateIngredients = {...this.state.ingredients}
        
        updateIngredients[type] = updatedcount;
        const removedprice = INGRE_PRICES[type];
        const oldprice = this.state.totalPrice
        const newprice = oldprice - removedprice

        this.setState({totalPrice: newprice, ingredients: updateIngredients})
        
        this.handlePurchase(updateIngredients );  // so we manage orders while we add ingre
    }


    render() {

        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <div>
                <Burger ingredients= {this.state.ingredients}></Burger>
              
                <BuilControl 
                ingredientsAdded={this.addIngredientsHandler}
                ingredientsRemoved={this.removeIngredientsHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice} />
                
            </div>
        );
    }
}

export default BurgerBuilder;