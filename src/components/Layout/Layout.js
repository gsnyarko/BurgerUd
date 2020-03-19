import React from 'react';
import classes from './layout.module.css';

const layout = (props) => (
    <>
    <div>Toolbar, sidebar, Backdrop.....</div>
<main className={classes.content}>{props.children}</main>
</>
);
export default layout;
