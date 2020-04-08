import React from 'react';
import classes from './Input.module.css'

const Input = ( props ) => {
    let inputElement = null

    const inputClasses = [classes.InputElement]
    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }

    switch(props.elementType) {
        case('input'):
        inputElement = <input  
        className={inputClasses.join(' ')} 
        {...props.elementConfig}
        value={props.value} 
        onChange={props.changed}/> // {...props} makes all html attribute
        break;                              // available to the Html tag
        case('textarea'):
        inputElement = <textarea  
        className={inputClasses.join(' ')} 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
        break;
        case('select'):
        inputElement = <select  
        className={inputClasses.join(' ')} 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}>
            {props.elementConfig.options.map(op => (
                <option key={op.value} value={op.value}>{op.displayValue}</option>
            ))}
        </select>
        break;
        default:
        inputElement = <input 
        className={inputClasses.join('')} 
        {...props.elementConfig}
        value={props.value} 
        onChange={props.changed}/>
    }
    let inputError = null;
    if(props.touched && props.invalid) {
    inputError = <p className={classes.ValidationError}>Please enter a valid {props.valueType}</p>
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            { inputElement }
            { inputError }
        </div>
    );
};

export default Input;