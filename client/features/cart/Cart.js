import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop } from '../../app/slice/allFunkoSlice'
import { me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'
import { fetchOrders, } from '../../app/slice/allOrderSlice'
import { filteredOrdersByStatus, singleOrder } from '../../app/slice/singleOrderSlice'
import { fetchAllCartFunkos } from '../../app/slice/cartProducts'


const Cart = () => {
    const dispatch = useDispatch();
    // let {totalPrice, shippingAddress}=useSelector((state)=>  {return state.singleOrder.order})
    const { id, orderStatus, totalPrice } = useSelector((state) => { return state.singleOrder.order })
    const cart = useSelector((state) => { return state.cart })

    console.log(cart)
    const { userId, cartId } = useParams()
    useEffect(() => {
        dispatch(filteredOrdersByStatus(userId))
        dispatch(fetchAllCartFunkos(cartId))

    }, [])
    

const cartTotal= ()=>{
let sum=0
    for(let i=0; i<cart.length; i++){
        let itemTotal=cart[i].funkoPrice* cart[i].quantity
        sum+=itemTotal
}
return sum
}

    return (
        <>
            <div>Cart
                <div></div>
                <div>
                    {cart&& cart.length 
                    ? cart.map((item) => (
                        <div >
                            <div className='eachItem'> 
                            <span> funkoPop Id: {item.FunkoPopId}</span>
                            <span> Qty: {item.quantity}</span>
                            <span> Price per item: {item.funkoPrice}</span>
                            <span> Total: {item.quantity*item.funkoPrice}</span>
                            </div>
                        </div>

                    )) :null
                    }
                </div>
                
                    <button >Continue Shopping</button>
                    <button> Check Out</button>

            </div>
<div> Cart total:{cartTotal()}</div>
        </>
    )
}

export default Cart