import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'
const burger=(props)=>{
    let transfomedIngredients=Object.keys(props.ingredients).map(
        igKey=>{
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
               return <BurgerIngredient key={igKey+i} type={igKey}/>
            });
        }).reduce((arr,el)=>{
            return arr.concat(el)
        },[]);
    //console.log(transfomedIngredients);
    if(transfomedIngredients.length===0)
    {
        transfomedIngredients=<p>Please start adding ingredients!!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transfomedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );

}
export default burger;