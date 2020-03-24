import React, { Component } from 'react';
import classes from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDraw/SideDraw';

class Layout extends Component {

    state= {
        showTheSideDraw: false
    }
    sideDrawHandler = () => {
        this.setState({showTheSideDraw: false})
    }

    sideDRawToggleHander =() => {
        this.setState((prevState) => {
            return { showTheSideDraw: !prevState.showTheSideDraw }
        });
    }

    render() {
        return (
            <>
    <Toolbar ToggleDrawOnclick={this.sideDRawToggleHander}/>
    <SideDraw  open={this.state.showTheSideDraw} closed={this.sideDrawHandler}/>
    <main className={classes.content}>
        {this.props.children}</main>
    </>
            
        );
    }
}

export default Layout;
