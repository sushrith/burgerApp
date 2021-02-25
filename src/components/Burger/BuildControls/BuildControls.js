import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { render } from '@testing-library/react';
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
    {label:'Bacon',type:'bacon'}

];

const buildControls =(props)=>{
    
    return (
          <div className={classes.BuildControls}>
              
    <p>Current Price :{props.price}</p>
              {
                  controls.map(ctrl=>(
                      <BuildControl key={ctrl.label} label={ctrl.label} 
                      added={()=>props.ingredientAdded(ctrl.type)}
                      remove={()=>props.ingredientremove(ctrl.type)}
                      disabled={props.disabled[ctrl.type]}
                      />
                  ))
              }
        </div>
    
    );
    
}

export default buildControls;