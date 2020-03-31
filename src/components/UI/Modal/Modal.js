import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState) {
        return nextProps.showModal !== this.props.showModal || nextProps.children !== this.props.children
    }

    // componentWillUpdate() {
    //     console.log('[modal updates]');
    // }
    

    render() {
        return (
            <>
            <Backdrop showBackdrop={this.props.showModal} clicked={this.props.closeBack}/>
                <div className={classes.Modal}
                style={{
                    transform: this.props.showModal ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: this.props.showModal ? '1' : '0',
                    }}>
                    {this.props.children}
                </div>
            </>
            );

    }
   
};

export default Modal;