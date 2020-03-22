import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
    return (
    <>
    <Backdrop showBackdrop={props.showModal} clicked={props.closeBack}/>
        <div className={classes.Modal}
        style={{
            transform: props.showModal ? 'translateY(0)': 'translateY(-100vh)',
            opacity: props.showModal ? '1' : '0',
            }}>
            {props.children}
        </div>
    </>
    );
};

export default Modal;