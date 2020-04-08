import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div>
            <button 
            className={[classes.Button, classes[props.btnType]].join(' ')} 
            onClick={props.Iclicked}
            disabled={props.disabled}>{props.children}</button>
            
        </div>
    );
};

export default Button;