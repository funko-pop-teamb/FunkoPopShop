import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop, selectFunkoPops, updateFunkoPops } from '../../app/slice/allFunkoSlice'
import { logout, me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'
import { addItemToCart, fetchAllCartFunkos, filteredOrdersByStatus, updateOneOrderOneFunko, addToLocalCart} from '../../app/slice/cartProducts'
import { updateFunkoPop, fetchSingleFunkoPop } from '../../app/slice/oneFunkoSlice'



const AllFunkos = () => {

    let funkos = useSelector((state) => state.allFunkoPops)
    const { cart, items } = useSelector((state) => state.cart)

    const { userType, id, firstName, lastName, email, username } = useSelector((state) => state.auth.me)
    const isLoggedIn = useSelector((state) => { return state.auth.me.id })


    const dispatch = useDispatch()


    let orderId = cart.id

    const loadToPage = async() => {
    if (!id) {
        dispatch(fetchFunkoPops())
    } else {
        dispatch(fetchFunkoPops())
        dispatch(fetchAllCartFunkos(orderId))
    }
}

    useEffect(() => {
        loadToPage()
        // dispatch(fetchFunkoPops())
        // dispatch(fetchAllCartFunkos(orderId))
        // dispatch(me())
        // dispatch(filteredOrdersByStatus(id))
    }, [])


    const handleDelete = async (funkoId) => {
        await dispatch(deleteFunkoPop(funkoId))
        await dispatch(fetchFunkoPops())
    }
    //items= funkoPops in the current cart
    // const  item=useSelector((state)=>   state.cart.items)
    // const addToCart = async (funko)=>{
    //     let FunkoPopId=funko.id
    //       orderId=cart.id
    //      let quantity=1
    //      let funkoPrice=funko.price
    //     if (items.filter(e=> e.FunkoPopId===funko.id).length>0){
    //         let index=items.findIndex(e=> 
    //              e.FunkoPopId===funko.id
    //         )
    //         quantity=items[index].quantity+1
    //         await dispatch(updateOneOrderOneFunko({FunkoPopId, orderId, quantity}))
    //     } else {
    //         await  dispatch(addItemToCart({FunkoPopId, orderId,quantity,funkoPrice}))
    //     }
    //     await dispatch(fetchAllCartFunkos(orderId))



     //const allItems = []
    const addToCart = async (funko) => {
        if (!id) {
            const item = await dispatch(fetchSingleFunkoPop(funko.id))
            await dispatch(addToLocalCart(item))

            // localStorage.setItem('cart', JSON.stringify(allItems))
            // let guestCart = JSON.parse(localStorage.getItem('cart'))
            // console.log(guestCart)
            // in /cart component localStorage.getItem('cart')
        } else {
            let FunkoPopId = funko.id
            orderId = cart.id
            let quantity = 1
            let funkoPrice = funko.price
            if (items.filter(e => e.FunkoPopId === funko.id).length > 0) {
                let index = items.findIndex(e =>
                    e.FunkoPopId === funko.id
                )
                quantity = items[index].quantity + 1
                await dispatch(updateOneOrderOneFunko({ FunkoPopId, orderId, quantity }))
            } else {
                await dispatch(addItemToCart({ FunkoPopId, orderId, quantity, funkoPrice }))
            }
            await dispatch(fetchAllCartFunkos(orderId))
        }
    }

    return (
        <>

            <h1 className='funkosHeader'>Funko Gallery</h1>
            <div className='allFunkos'>
                
                {funkos.map((funko) => (
                    <div key={funko.id} className='fCard'>
                        <Link key={funko.id} to={`/funkoPops/${funko.id}`}>
                            <img src={funko.imageUrl} className='allfImage' />
                            <h2 className='allfName'>{funko.name}</h2></Link>
                        <h3 className='allfCategory'>Category: {funko.category}</h3>
                        <h3 className='allfPrice'>Price: ${funko.price}</h3>
                        {/* <button onClick={()=>{qtyValueDecrease( funko)}} >-</button> QTY:{funko.qtyForCart} 
                        <button onClick={()=>{qtyValueIncrease( funko)}} >+</button> */}

                        <button onClick={() => { addToCart(funko) }} >Add 1 to Cart</button>
                        {userType === 'admin' ? <button className='deleteF' type='button'
                            onClick={(event) => { handleDelete(funko.id) }}>Delete Funko</button> : null}
                    </div>
                ))}
            </div>

        </>
    )
}

export default AllFunkos