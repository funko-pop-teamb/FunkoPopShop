import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop } from '../../app/slice/allFunkoSlice'
import { me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'
import { fetchOrders, } from '../../app/slice/allOrderSlice'
import { filteredOrdersByStatus, singleOrder}from '../../app/slice/singleOrderSlice'


const Cart = () => {
    const dispatch = useDispatch();
// let {totalPrice, shippingAddress}=useSelector((state)=>  {return state.singleOrder.order})
let cart=useSelector((state)=>  {return state.singleOrder.order})

const {id}= useParams()
    useEffect(()=>{
        dispatch(filteredOrdersByStatus(id))
        
      },[])
    return (
     <>
     <div>Cart
     <div></div>
        <div> Total Price:{cart.totalPrice}</div>
    


     </div>
     </>
    )
}

export default Cart