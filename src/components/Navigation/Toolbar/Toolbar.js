import React from 'react';
import classes from './Toolss.module.css';
import Logo from '../../Logo/Logo';

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                ....somelist
            </nav>
        </header>
    );
};

export default Toolbar;