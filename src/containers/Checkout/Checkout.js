import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Totalcheck from '../../components/Oder/Totalcheck/Totalcheck'
import ContactData from '../ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalprice: 0,  
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0
        for(let param of query.entries()) {
            //[salad: 1]
            if(param[0] === 'price') {
                price = param[1]

            } else {
                ingredients[param[0]] = +param[1];
            }
            
        }
        this.setState({ingredients: ingredients, totalprice: price})
    }
    checkOutCanHand = () => {
        this.props.history.goBack()
    }

    checkOutContHand = () => {
        this.props.history.replace('/checkout/contact-data')
    }


    render() {
        return (
            <div>
                <Totalcheck ingredients={this.state.ingredients}
                checkOutCan={this.checkOutCanHand}
                checkOutCont={this.checkOutContHand}/>
                <Route path={this.props.match.path + '/contact-data'} 
                render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalprice} {...props}/>)}/>
                {/* using the {..props} method to make the historr prop available to the 
                component. An alternative would be the 'WithRouter' High order function  */}
            </div>
        );
    }
}

export default Checkout;