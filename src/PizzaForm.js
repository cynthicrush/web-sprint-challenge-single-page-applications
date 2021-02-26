import React from 'react'
import './App.css'


const PizzaForm = (props) => {
    // const {values} =props;

    const { values, update, submit } = props

    const onChange = evt => {
        const {name, value} =evt.target;
        update(name, value)
      }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='pizza-form' onSubmit={onSubmit}>
            <h3>Build Your Own Pizza</h3>
            <div className='inputs'>

                <div className='size'>
                    <div className='labels'><label>Choice of Size</label></div>
                    <select name='size' value={values.size}  onChange={onChange}>
                        <option value=''>---Choose Size---</option>
                        <option value=''>Small: 8-10 inches with 6 slices</option>
                        <option value=''>Medium: 12 inches with 8 slices</option>
                        <option value=''>Large: 14 inch with 10 slices</option>
                        <option value=''>Extra-large: 16-18 inch with 12 slices</option>
                    </select>
                </div>
                
                <div className='sauce'>
                    <div className='labels'><label>Choice of Sauce</label></div>
                        <div className='choices'>
                            <label>Original Red
                                <input type='radio' name='sauce' onChange={onChange} value='originalRed' checked={values.sauce === 'originalRed'} />  
                            </label>
                        </div>
                        <div className='choices'>
                            <label>Garlic Ranch
                                <input type='radio' name='sauce' onChange={onChange} value='garlicRanch' checked={values.sauce === 'garlicRanch'} /> 
                            </label>
                        </div>
                        <div className='choices'>
                            <label>BBQ Sauce
                                <input type='radio' name='sauce' onChange={onChange} value='bbqSauce' checked={values.sauce === 'bbqSauce'} /> 
                            </label>
                        </div>
                        <div className='choices'>
                            <label>Spinach Alfredo
                                <input type='radio' name='sauce' onChange={onChange} value='spinachAlfredo' checked={values.sauce === 'spinachAlfredo'} /> 
                            </label>
                        </div>
                        
                </div>
                <div className='labels'><label>Add Toppings</label></div> 
                <div className='toppings'>
                    <div className='topping-choices'>
                        <label>Pepperoni
                            <input type='checkbox' name='pepperoni' onChange={onChange} checked={values.pepperoni} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Sausage
                            <input type='checkbox' name='' onChange={onChange} checked={values.sausage} /> 
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Canadian Bacon
                            <input type='checkbox' name='canadianBacon' onChange={onChange} checked={values.canadianBacon} /> 
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Spicy Italian Sausage
                            <input type='checkbox' name='spicyItaliainSausage' onChange={onChange} checked={values.spicyItaliainSausage} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Grilled Chicken
                            <input type='checkbox' name='grilledChicken' onChange={onChange} checked={values.grilledChicken} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Onions
                            <input type='checkbox' name='onions' onChange={onChange} checked={values.onions} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Green Pepper
                            <input type='checkbox' name='greenPepper' onChange={onChange} checked={values.greenPepper} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Dived Tomatos
                            <input type='checkbox' name='dicedTomatos' onChange={onChange} checked={values.dicedTomatos} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Black Olives
                            <input type='checkbox' name='backOlives' onChange={onChange} checked={values.backOlives} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Roasted Garlic
                            <input type='checkbox' name='roastedGarlic' onChange={onChange} checked={values.roastedGarlic} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Artichoke Hearts
                            <input type='checkbox' name='artichokeHearts' onChange={onChange} checked={values.artichokeHearts} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Three Cheese
                            <input type='checkbox' name='threeCheese' onChange={onChange} checked={values.threeCheese} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Pineapple
                            <input type='checkbox' name='pineapple' onChange={onChange} checked={values.pineapple} />
                        </label>
                    </div>
                    <div className='topping-choices'>
                        <label>Extra Cheese
                            <input type='checkbox' name='extraCheese' onChange={onChange} checked={values.extraCheese} />
                        </label>
                    </div>
                </div>
                
                <div className='special'>
                    <div className='labels'><label>Special Instructions</label></div>
                        <input className='text-box' name='special' type='text' onChange={onChange} placeholder='Anything else you&#39;d like to add?' />
                </div>
                
                <div className='name'>
                    <div className='labels'><label>Name</label></div>
                        <input className='text-box' name='name' type='text' onChange={onChange} minLength='2' placeholder='Please Enter Your Name' />
                </div>
                

                <div className='submit-btn'>
                    <button>Add to Order</button>
                </div>    
            </div>
        </form>
    )
}

export default PizzaForm
// Small Pizza: 8-10 inches with 6 slices.
// Medium Pizza: 12 inches with 8 slices.
// Large Pizza: 14 inch with 10 slices.
// Extra-large Pizza: 16-18 inch with 12 slices.
// checked={values.sauce === 'original-red'} 
// checked={values.sauce === 'garlic-ranch'}
// checked={values.sauce === 'bbq-sauce'}
// checked={values.sauce === 'spinach-alfredo'}