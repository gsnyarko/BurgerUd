import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuilControl from '../../components/Burger/Buildcontrols/buildcontrols'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/Odersummery/Odersummery'
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../ErrorHandler'



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
        purchasing: false,
        loading: false,
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
    // se sto a comprar...
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    closePurchasingHandler = () => {
        this.setState({purchasing: false});
    }

    continuePurchasing = () => {
        //alert('You Buying');
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'gideon',
                address: {
                    street: 'via trento 4',
                    country: 'italy',
                    cap: '38123'
                },
                email: 'gi@gi.com '   
            },
            deliveryMethod: 'fast'
        }
        
        axios.post('/orders.json', order).then(response => {
            this.setState({loading: false, purchasing: false})
        }).catch(error => {
            this.setState({loading: false, purchasing: false})
        }
        )

    }


    render() {

        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let ordersummery = (
            <OrderSummery 
                    ingredients={this.state.ingredients}
                    cancella={this.closePurchasingHandler}
                    continua={this.continuePurchasing}
                    price={this.state.totalPrice} />
        );
        if(this.state.loading) {
            ordersummery = <Spinner />
        }

        return (
            <div>
                <Modal showModal={this.state.purchasing} closeBack={this.closePurchasingHandler} >
                    {ordersummery}
                </Modal>
                
                <Burger ingredients= {this.state.ingredients}></Burger>
              
                <BuilControl 
                ingredientsAdded={this.addIngredientsHandler}
                ingredientsRemoved={this.removeIngredientsHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                bought={this.purchaseHandler}
                 />
                
            </div>
        );
    }
}

export default withErrorHandler(BurgerBuilder ,axios);