import React from 'react';
import classes from './Burger.module.css';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
    let TrasformedIngr = Object.keys(props.ingredients).map(item => {
        return [...Array(props.ingredients[item])].map((_,index) => {
            return <BurgerIngredients key={item + index} type={item} />
        })
    }).reduce((acc, el) =>  {
        return acc.concat(el)
    },[])

    if (TrasformedIngr.length === 0) {
        TrasformedIngr = <p>PLEASE INSERT INGREDIENTS</p>
    } 


        return (
            <div className={classes.Burger}>
                <BurgerIngredients type='bread-top'></BurgerIngredients>
                {TrasformedIngr}
                <BurgerIngredients type='bread-bottom'></BurgerIngredients>
                
            </div>
        );

    

    
};

export default Burger;