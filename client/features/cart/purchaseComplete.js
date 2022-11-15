import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop } from '../../app/slice/allFunkoSlice'
import { me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'
import { addOrder, fetchOrders, } from '../../app/slice/allOrderSlice'
import { singleOrder, updateOrder } from '../../app/slice/singleOrderSlice'
import { fetchAllCartFunkos, filteredOrdersByStatus, removeFunkoPop, updateOneOrderOneFunko } from '../../app/slice/cartProducts'
import { fetchSingleFunkoPop } from '../../app/slice/oneFunkoSlice'


const PurchaseComplete = () => {
    const me = useSelector((state) => state.auth.me)
    const dispatch = useDispatch();
    useEffect(()=> {
    let userId=me.id
 dispatch(addOrder({userId}))
    })
    return (
        <>
        <div> Thank you for shopping with Funko Pop Shop!!</div>
        </>
    )
}

export default PurchaseComplete