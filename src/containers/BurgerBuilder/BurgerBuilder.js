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
    // Initial setting of th e state.... will gt ingredients from database later
    // state = {
    //     ingredients : {
    //         meat: 0,
    //         salad: 0,
    //         cheese: 0,
    //         bacon: 0
    //     },
    //     totalPrice: 4,
    //     purchasable: false,
    //     purchasing: false,
    //     loading: false,
    // }

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        errore: false,
    }

    componentDidMount () {
        axios.get('https://humburgerp.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data})
        }).catch(error => {
            this.setState({errore: true})
        })
    }
    //response.data .. l'oggetto data è fornito da firebase

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
     
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURI(i) + '=' + encodeURI(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString 
        })

    }


    render() {

        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let ordersummery = null;
    
        let burger = this.state.errore ? <p>Ingrediants can't load</p>: <Spinner />

        if(this.state.ingredients) {
            burger = (<>
                <Burger ingredients={this.state.ingredients} />
                     
                     <BuilControl 
                     ingredientsAdded={this.addIngredientsHandler}
                     ingredientsRemoved={this.removeIngredientsHandler}
                     disabled={disabledInfo}
                     purchasable={this.state.purchasable}
                     price={this.state.totalPrice}
                     bought={this.purchaseHandler}
                      />
               </>)
                 ordersummery = (
                    <OrderSummery 
                            ingredients={this.state.ingredients}
                            cancella={this.closePurchasingHandler}
                            continua={this.continuePurchasing}
                            price={this.state.totalPrice} />
                );
        }
        if(this.state.loading) {
            ordersummery = <Spinner />
        }


        return (
            <>
                <Modal showModal={this.state.purchasing} closeBack={this.closePurchasingHandler} >
                    {ordersummery}
                </Modal>
                 {burger} 
            </>
        );
    }
}

export default withErrorHandler(BurgerBuilder ,axios);