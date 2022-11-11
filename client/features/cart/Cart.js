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
    
    return (
        <>
            <div>Cart
                <div></div>
                <div>
                    {cart&& cart.length 
                    ? cart.map((item) => (
                        <div >
                            <div> Quantity: {item.quantity}</div>
                            <div> funkoId: {item.funkoId}</div>
                        </div>

                    )) :null
                    }
                </div>


            </div>
<div> Total Price:{totalPrice}</div>
        </>
    )
}

export default Cart