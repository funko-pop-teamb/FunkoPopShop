import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../app/slice/allOrderSlice'
import { Link } from 'react-router-dom'


const AllOrders = () => {
    const orders = useSelector((state) => state.allOrder.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOrders())
        // dispatch(filteredOrdersByStatus())
    }, [])

    return (
        <>
        <h2>All Orders</h2>
        <div className='orders'>
            {orders && orders.length ? orders.map((order) => (
                <div key={order.id} className="singleorder">
                    <ul>
                    {/* <Link to={`/orders/filter/status/${order.userId}/cart`} key={order.id}> */}
                        <li>ID: {order.id}</li>
                    <li>Status: {order.orderStatus}</li>
                    <li>Total Amount: ${order.totalPrice}</li>
                    {/* </Link> */}
                    <li>User ID: {order.userId}</li>
                    {/* <li>User Name: {order.shippingName}</li> */}
                    <li>Shipping Address: {order.shippingAddress}</li>
                    </ul>
                </div>
            ))
            : null}
        </div>
        </>
    )

}

export default AllOrders