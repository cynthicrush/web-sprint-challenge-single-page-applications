import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import * as yup from 'yup';

import formSchema from './formSchema'
import Home from './Home'
import YourOrders from './YourOrders'
import PizzaForm from './PizzaForm'
import './App.css'

const App = () => {
  const initialFormValues = {
    size: '', //dropdown
    sauce: '', //radio
    pepperoni: false, //checkbox
    sausage: false, //checkbox
    canadianBacon: false, //checkbox
    spicyItaliainSausage: false, //checkbox
    grilledChicken: false, //checkbox
    onions: false, //checkbox
    greenPepper: false, //checkbox
    dicedTomatos: false, //checkbox
    backOlives: false, //checkbox
    roastedGarlic: false, //checkbox
    artichokeHearts: false, //checkbox
    threeCheese: false, //checkbox
    pineapple: false, //checkbox
    extraCheese: false, //checkbox
    special: '', //text
    name: '', //text
  }

  const initialFormErrors = {
    size: '', //dropdown
    sauce: '', //radio
    special: '', //text
    name: '', //text
  }
  const initialFriends = []
  const initialDisabled = true

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]:inputValue
    })
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.erros[0]})

      });
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = () => {
    const newFriend = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'sausage', 'canadianBacon', 'spicyItaliainSausage', 'grilledChicken', 'onions', 'greenPepper', 'dicedTomatos', 'backOlives', 'roastedGarlic', 'artichokeHearts', 'threeCheese', 'pineapple', 'extraCheese'].filter(topping => formValues[topping])

    }
    if(!newFriend.username || !newFriend.email || !newFriend.role) {
      return;
    }
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/your-orders'>My Orders</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/your-orders'>
          <YourOrders />
        </Route>
        <Route path='/'>
          <Home />
          <PizzaForm 
            update={updateForm}
            submit={submitForm}
            disabled={disabled}
            values={formValues}
            change={inputChange}
            errors={formErrors}
          />
        </Route>
        
      </Switch>

      
    </div>
  );
};
export default App;
