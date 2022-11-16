import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filteredOrdersComplete } from "../../app/slice/allOrderSlice";
import { fetchSingleUser } from "../../app/slice/singleUserSlice";
import { editUser } from "../../app/slice/usersSlice";

const AllOrders = () => {
    const me = useSelector((state) => state.auth.me);
const orders=useSelector((state)=>state.allOrder.orders)
const dispatch=useDispatch()
    useEffect( ()=>{
        dispatch(filteredOrdersComplete(me.id))
    },[])
    console.log("********Orders:")
    console.log(orders)
    return (
        <>
        <div>All Orders</div>
        {orders.map((order)=>(
            <>
            <div>Order Name: {order.shippingName}</div>
            <div> Address:{order.shippingAddress}</div>
            <div>Products:
            <ul>
                <ul>{order.order_funkoPops.map((funkoPop)=>(
                    <>
                    <img className="allOrderImage"src={funkoPop.FunkoPop.imageUrl}/>
                     <div>{console.log(funkoPop)}Name:{funkoPop.FunkoPop.name}</div>

                    <div>Qty:{funkoPop.quantity}</div>
                    <div>Price:{funkoPop.funkoPrice}</div>
                    </>
                ))}</ul>
            </ul>

            </div>
            <div>Total Price:{order.totalPrice}</div>
            </>
        ))}
        </>
    )

}


export default AllOrders