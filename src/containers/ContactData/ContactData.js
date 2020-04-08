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
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                }, 
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Enter Country'
                    },
                    value: '',
                    validation: {
                        required: true
                        
                    },
                    isValid: false,
                    touched: false
                },
                cap: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Cap'
                    },
                    value: '',
                    validation: {
                        required: true,
                        maxLength: 5,
                        minLength: 3
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-Mail'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },   
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value: 'cheap', displayValue: 'cheap'},
                            {value: 'fast', displayValue: 'fast'}
                    ]
                    },
                    value: 'cheap',
                    validation: {},
                    valid: true
                }
            },
            loading: false,
            formIsValid : false
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

    checkValidity(value, rules) {
        let isValid = true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updateOrderForm = {
            ...this.state.orderForm
        }
        const updatedElement = {
            ...updateOrderForm[inputIdentifier]
        }
        updatedElement.value = event.target.value
        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation)
        updatedElement.touched = true
        updateOrderForm[inputIdentifier] = updatedElement

        let formIsValid = true
        for(let inputIdentity in updateOrderForm) {
            formIsValid = updateOrderForm[inputIdentity].valid && formIsValid
        }
        

        this.setState({orderForm: updateOrderForm, formIsValid: formIsValid})

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
            {formElementArray.map(formElement =>  {
                
                return (
                    <Input 
                    key={formElement.id}
                    valueType={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) =>this.inputChangeHandler(event, formElement.id)} />
                )
            }  
            )}
            <Button 
            btnType='Success' 
            Iclicked={this.OrderHandler}
            disabled={!this.state.formIsValid}>ORDER</Button>
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