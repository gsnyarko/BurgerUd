import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return (
            <div>
                <Burger></Burger>
                <div>Burger</div>
                
            </div>
        );
    }
}

export default BurgerBuilder;