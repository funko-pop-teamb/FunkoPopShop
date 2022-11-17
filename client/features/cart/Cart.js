import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me } from '../auth/authSlice'
import { Link } from 'react-router-dom'
import { fetchAllCartFunkos, filteredOrdersByStatus, removeFunkoPop, updateOneOrderOneFunko, removeFromLocalCart } from '../../app/slice/cartProducts'


const Cart = () => {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items)
    const cartId = useSelector((state) => state.cart.cart.id)
    const { id } = useSelector((state) => state.auth.me)

    const stored = JSON.parse(localStorage.getItem('cart'))

    const loadTocart = async () => {
        if (!id) {
            return stored
        } else {
            dispatch(filteredOrdersByStatus(id))
            dispatch(fetchAllCartFunkos(cartId))
        }

    }

    useEffect(() => {
        loadTocart()
    }, [])


    const cartTotal = () => {
        let sum = 0
        if (!id) {
            for (let i = 0; i < stored.length; i++) {
                let storedTotal = stored[i].price * stored[i].qtyForCart
                sum += storedTotal
            }
        } else {
            for (let i = 0; i < items.length; i++) {
                let itemTotal = items[i].funkoPrice * items[i].quantity
                sum += itemTotal
            }
        }
        return sum
    }

    const removeOne = async (e, item) => {
        e.preventDefault()
        let orderId = cartId
        let FunkoPopId = item.FunkoPopId
        let funkoId = item.FunkoPopId
        let quantity = item.quantity - 1

        if (!id) {
            const index = stored.findIndex(store => store.id === item.id)
            dispatch(removeFromLocalCart(index))
        } else {
            if (item.quantity === 1) {
                await dispatch(removeFunkoPop({ orderId, funkoId }))
            } else {
                await dispatch(updateOneOrderOneFunko({ orderId, FunkoPopId, quantity }))
            }
            await dispatch(fetchAllCartFunkos(orderId))
        }
    }

    const removeAll = async (e, item) => {
        e.preventDefault()
        let orderId = cartId
        let funkoId = item.FunkoPopId

        await dispatch(removeFunkoPop({ orderId, funkoId }))
        await dispatch(fetchAllCartFunkos(orderId))
    }

    return (
        <>
            <div>Cart<div>

                {!id ? <div> {stored && stored.length ? stored.map((store) => (
                    <div >
                        <img src={store.imageUrl} className='fImage' />
                        <div><Link to={`/funkoPops/${store.id}`}> Name: {store.name}</Link></div>
                        {/*<div> funkoPop Id: {store.id}</div>*/}
                        <button value={store.id} onClick={(e) => removeOne(e, store)}>remove one</button>
                        <div> Qty: {store.qtyForCart}</div>
                        <div> Price per item: {store.price}</div>
                        <div> Total: {store.qtyForCart * store.price}</div>
                    </div>

                )) : null
                }
                </div>
                    :

                    <div>
                        {items && items.length ? items.map((item) => (
                            <div >
                                <img src={item.FunkoPop.imageUrl} className='fImage' />
                                <div><Link to={`/funkoPops/${item.FunkoPop.id}`}> Name: {item.FunkoPop.name}</Link></div>
                                <button onClick={(e) => removeOne(e, item)}>remove one</button>
                                <button onClick={(e) => removeAll(e, item)}>remove all</button>
                                <div> Qty: {item.quantity}</div>
                                <div> Price per item: {item.funkoPrice}</div>
                                <div> Total: {item.quantity * item.funkoPrice}</div>
                            </div>

                        )) : null
                        }
                    </div>}

            </div>
                <button><Link to='/funkoPops'>Continue Shopping</Link> </button>
                <button><Link to='/cart/checkout'>  Check Out</Link></button>
                <div> Cart total:{cartTotal()}</div>


            </div>
        </>
    )
}

export default Cart