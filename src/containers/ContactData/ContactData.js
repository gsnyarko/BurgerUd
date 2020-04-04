import React, { Component } from 'react';
import Button  from '../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: ''
                }, 
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: ''
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Enter Country'
                    },
                    value: ''
                },
                cap: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Cap'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-Mail'
                    },
                    value: ''
                },   
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value: 'cheap', displayValue: 'cheap'},
                            {value: 'fast', displayValue: 'fast'}
                    ]
                    },
                    value: ''
                }
            },
            loading: false,
        }

       
    

    OrderHandler = (event) => {
        // prevent the default behaviour of reload of my page
        // with the form. 
        event.preventDefault(); 
        this.setState({loading: true})
        // where to handle the onsubmit of the form tat
        const formData = {};
        for(let formElementKeys in this.state.orderForm) {
            formData[formElementKeys] = this.state.orderForm[formElementKeys].value
        }
        console.log(formData);
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, 
            orderData: formData
        }
        
        axios.post('/orders.json', order).then(response => {
            this.setState({loading: false })
            this.props.history.push('/') // to make history props available we have two ways
        }).catch(error => {               // use the withRouter method or use the spread operator {...props}
            this.setState({loading: false })
        }
        )
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updateOrderForm = {
            ...this.state.orderForm
        }
        const updatedElement = {
            ...updateOrderForm[inputIdentifier]
        }
        updatedElement.value = event.target.value
        updateOrderForm[inputIdentifier] = updatedElement

        this.setState({orderForm: updateOrderForm})

    }

    render() {
        const formElementArray = [];
        for( let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        //console.log(formElementArray)
        let form = (
            <form onSubmit={this.OrderHandler}>
            {formElementArray.map(formElement => (
                <Input 
                key={formElement.id}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig} 
                value={formElement.config.value}
                changed={(event) =>this.inputChangeHandler(event, formElement.id)} />

            ))}
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