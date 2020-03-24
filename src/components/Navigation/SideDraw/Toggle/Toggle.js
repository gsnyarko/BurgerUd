import React from 'react';
import  './Toggle.css';

const Toggle = (props) => {
    return (
        <div className='DrawerToggle' onClick={props.clicked}>
           <div></div>
           <div></div>
           <div></div>
        </div>
    );
};

export default Toggle;