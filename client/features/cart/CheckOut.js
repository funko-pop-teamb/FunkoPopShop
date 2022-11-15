import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addOrder } from '../../app/slice/allOrderSlice';
import { filteredOrdersByStatus } from '../../app/slice/cartProducts';
import { updateOrder } from '../../app/slice/singleOrderSlice';
import { logout } from '../../store';

const CheckOut = () => {
  
  const cart = useSelector((state) => state.cart.cart)
  const items = useSelector((state) => state.cart.items)
  const me = useSelector((state) => state.auth.me)

  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [apt, setApt] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [paymentInfo, setPaymentInfo] = useState('')

const handleSubmit=(evt)=>{
evt.preventDefault()
const orderId=cart.id
const shippingAddress=streetAddress+" "+apt+" "+city+" "+state+" "+zipCode
let orderStatus="Complete"
let orderPrice=100
dispatch(updateOrder({orderId, shippingAddress, orderStatus}))
navigate('/cart/checkout/complete')
// let userId=me.id
// dispatch(addOrder({userId}))
}
  return (
    <div>
     <form id="shipping-form" onSubmit={handleSubmit}>
      <div >Shipping Info:</div>
      <div>
        {/* <label htmlFor="firstName" className='formField'>First Name:</label>
        <input
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName" className='formField'>Last Name:</label>
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        /> */}
        <label htmlFor="streetAddress" className='formField'>Street Address</label>
        <input
          name="streetAddress"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <label htmlFor="apt" className='formField'>Apt#,Floor, etc.:</label>
        <input
          name="apt"
          value={apt}
          onChange={(e) => setApt(e.target.value)}
        />
        <label htmlFor="city" className='formField' >City:</label>
        <input
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
         <label htmlFor="state" className='formField' >State:</label>
        <input
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
         <label htmlFor="zipCode" className='formField' >Zip Code:</label>
        <input
          name="zipCode"
          value={ zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>

      <label htmlFor="paymentInfo" className='formField' >Payment Info:</label>
        <input
          name="paymentInfo"
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
        />
      <button type="submit" className='formField'>Submit Order</button>
    </form>
     </div>
  );
};

export default CheckOut;
