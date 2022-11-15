import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop } from '../../app/slice/allFunkoSlice'
import { me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'
import { fetchOrders, } from '../../app/slice/allOrderSlice'
import { singleOrder, updateOrder } from '../../app/slice/singleOrderSlice'
import { fetchAllCartFunkos, filteredOrdersByStatus, removeFunkoPop, updateOneOrderOneFunko } from '../../app/slice/cartProducts'
import { fetchSingleFunkoPop } from '../../app/slice/oneFunkoSlice'


const Cart = () => {
    const dispatch = useDispatch();
    // let {totalPrice, shippingAddress}=useSelector((state)=>  {return state.singleOrder.order})
    const { id, orderStatus, totalPrice } = useSelector((state) => { return state.singleOrder.order })
    const items = useSelector((state) => state.cart.items)
    const cartId = useSelector((state) => state.cart.cart.id)
    const userId= useSelector((state) => state.auth.me.id)


    //const isLoggedIn = useSelector((state) => {return state.auth.me.id})

    // const { userId, cartId } = useParams()
    useEffect(() => {
        // dispatch(filteredOrdersByStatus(userId))
        // dispatch(fetchAllCartFunkos(cartId))
    }, [])


    const cartTotal = () => {
        let sum = 0
        for (let i = 0; i < items.length; i++) {
            let itemTotal = items[i].funkoPrice * items[i].quantity
            sum += itemTotal
        }
        return sum
    }

    const removeOne=async (e,item)=>{
        e.preventDefault()
        let orderId= cartId
        let FunkoPopId=item.FunkoPopId
        let funkoId=item.FunkoPopId
        let quantity=item.quantity-1
        if (item.quantity===1){
             await dispatch(removeFunkoPop({orderId, funkoId}))
        } else {
           await  dispatch(updateOneOrderOneFunko({orderId, FunkoPopId, quantity}))
        }
         await dispatch(fetchAllCartFunkos(orderId))
    }
    const removeAll=async (e,item)=>{
        e.preventDefault()
        let orderId= cartId
        let funkoId=item.FunkoPopId     
       await dispatch(removeFunkoPop({orderId, funkoId}))
       await  dispatch(fetchAllCartFunkos(orderId))
    }
    return (
        <>
            <div>Cart
                <div>
                    {items && items.length
                        ? items.map((item) => (
                            <div >
                                    <img src={item.FunkoPop.imageUrl} className='fImage' />
                                    <div><Link  to={`/funkoPops/${item.FunkoPop.id}`}> Name: {item.FunkoPop.name}</Link></div>
                                    {/* <div> funkoPop Id: {item.FunkoPopId}</div> */}
                                   <button onClick={(e)=>removeOne(e,item)}>remove one</button>
                                   <button onClick={(e)=>removeAll(e,item)}>remove all</button>
                                    <div> Qty: {item.quantity}</div>
                                    <div> Price per item: {item.funkoPrice}</div>
                                    <div> Total: {item.quantity * item.funkoPrice}</div>
                            </div>

                        )) : null
                    }
                </div>

                <button><Link to='/funkoPops'>Continue Shopping</Link> </button>
                <button><Link to='/cart/checkout'>  Check Out</Link></button>
            </div>
            <div> Cart total:{cartTotal()}</div>
        </>
    )
}

export default Cart