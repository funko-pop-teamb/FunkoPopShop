import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop } from '../../app/slice/allFunkoSlice'
import { me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'
import { fetchOrders, } from '../../app/slice/allOrderSlice'
import { singleOrder, updateOrder } from '../../app/slice/singleOrderSlice'
import { fetchAllCartFunkos, filteredOrdersByStatus, updateOneOrderOneFunko } from '../../app/slice/cartProducts'
import { fetchSingleFunkoPop } from '../../app/slice/oneFunkoSlice'


const Cart = () => {
    const dispatch = useDispatch();
    // let {totalPrice, shippingAddress}=useSelector((state)=>  {return state.singleOrder.order})
    const { id, orderStatus, totalPrice } = useSelector((state) => { return state.singleOrder.order })
    const cart = useSelector((state) => state.cart.items)


    //const isLoggedIn = useSelector((state) => {return state.auth.me.id})

    console.log("######" + cart)
    const { userId, cartId } = useParams()
    useEffect(() => {
        dispatch(filteredOrdersByStatus(userId))
        dispatch(fetchAllCartFunkos(cartId))
    }, [])


    const cartTotal = () => {
        let sum = 0
        for (let i = 0; i < cart.length; i++) {
            let itemTotal = cart[i].funkoPrice * cart[i].quantity
            sum += itemTotal
        }
        return sum
    }

    const removeOne=async (item)=>{
        let orderId= cartId
        let FunkoPopId=item.FunkoPopId
        let quantity=item.quantity-1
       await dispatch(updateOneOrderOneFunko({orderId, FunkoPopId, quantity}))
        dispatch(fetchAllCartFunkos(orderId))

    }

    return (
        <>
            <div>Cart
                <div></div>
                <div>
                    {cart && cart.length
                        ? cart.map((item) => (
                            <div >
                                    <img src={item.FunkoPop.imageUrl} className='fImage' />
                                    <div> Name: {item.FunkoPop.name}</div>
                                    {/* <div> funkoPop Id: {item.FunkoPopId}</div> */}
                                   <button onClick={()=>removeOne(item)}>remove one</button>
                                   <button onClick={()=>removeOne(item)}>remove all</button>
                                    <div> Qty: {item.quantity}</div>
                                    <div> Price per item: {item.funkoPrice}</div>
                                    <div> Total: {item.quantity * item.funkoPrice}</div>
                            </div>

                        )) : null
                    }
                </div>

                <button><Link to='/funkoPops'>
                    Continue Shopping
                    </Link>
                    </button>
                <button> Check Out</button>

            </div>
            <div> Cart total:{cartTotal()}</div>
        </>
    )
}

export default Cart