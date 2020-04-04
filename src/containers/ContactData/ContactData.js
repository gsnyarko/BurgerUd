import React, { Component } from 'react';
import Button  from '../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street:'',
            cap: ''
        },
        loading: false,
    }

    OrderHandler = (event) => {

        // prevent the default behaviour of reload of my page
        // with the form. 
        event.preventDefault(); 
          //alert('You Buying');
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'gideon',
                address: {
                    street: 'via trento 4',
                    country: 'italy',
                    cap: '38123'
                },
                email: 'gi@gi.com '   
            },
            deliveryMethod: 'fast'
        }
        
        axios.post('/orders.json', order).then(response => {
            this.setState({loading: false })
            this.props.history.push('/') // to make history props available we have two ways
        }).catch(error => {               // use the withRouter method or use the spread operator {...props}
            this.setState({loading: false })
        }
        )
    }

    render() {
        let form = (
            <form action="">
            <input className={classes.Input} type="text" name='name' placeholder='enter name'/>
            <input className={classes.Input} type="email" name='email' placeholder='enter mail'/>
            <input className={classes.Input} type="text" name='street' placeholder='indirizzo'/>
            <input className={classes.Input} type="text" name='cap' placeholder='cap'/>
            <Button btnType='Success' Iclicked={this.OrderHandler}>ORDER</Button>
        </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;