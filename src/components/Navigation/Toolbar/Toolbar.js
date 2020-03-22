import React from 'react';
import classes from './Toolss.module.css';

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <div>Logo</div>
            <nav>
                ....somelist
            </nav>
        </header>
    );
};

export default Toolbar;