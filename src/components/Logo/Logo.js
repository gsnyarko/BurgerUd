import React from 'react';
import logo from '../../assets/Image/logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} >
            <img src={logo} alt="my burger"/>
            
        </div>
    );
};

export default Logo;