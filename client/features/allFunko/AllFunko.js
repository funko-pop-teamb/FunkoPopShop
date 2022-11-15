import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop, selectFunkoPops, updateFunkoPops } from '../../app/slice/allFunkoSlice'
import { logout, me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'
import { addItemToCart, fetchAllCartFunkos, filteredOrdersByStatus, updateOneOrderOneFunko } from '../../app/slice/cartProducts'
import { updateFunkoPop } from '../../app/slice/oneFunkoSlice'



const AllFunkos = () => {

    let funkos = useSelector((state) =>  state.allFunkoPops )
    const { userType } = useSelector((state) => state.auth.me)
    const {cart, items}=useSelector((state)=>   state.cart)

    const dispatch = useDispatch()

  let orderId=cart.id
    useEffect(  () => {
        dispatch(fetchFunkoPops())
        dispatch(fetchAllCartFunkos(orderId))
        // dispatch(me())
        // dispatch(filteredOrdersByStatus(id))
    }, [])
    
    console.log("*******"+orderId)
console.log("#####"+items)

    const handleDelete = async (funkoId) => {
       await dispatch(deleteFunkoPop(funkoId))
      await dispatch(fetchFunkoPops())
    }

    //items= funkoPops in the current cart
    // const  item=useSelector((state)=>   state.cart.items)


    const addToCart = async (funko)=>{
        let FunkoPopId=funko.id
          orderId=cart.id
         let quantity=1
         let funkoPrice=funko.price
        if (items.filter(e=> e.FunkoPopId===funko.id).length>0){
            let index=items.findIndex(e=> 
                 e.FunkoPopId===funko.id
            )
            quantity=items[index].quantity+1
            await dispatch(updateOneOrderOneFunko({FunkoPopId, orderId, quantity}))
        } else {
            await  dispatch(addItemToCart({FunkoPopId, orderId,quantity,funkoPrice}))
        }
        await dispatch(fetchAllCartFunkos(orderId))

    }

    return (
        <>
      
            <h1 className='header'>Funko Gallery</h1>
            <div className='allFunkos'>
                { funkos.map((funko) => (
                    <div key={funko.id} className='fCard'>
                        <Link key={funko.id} to={`/funkoPops/${funko.id}`}>
                        <img src={funko.imageUrl} className='fImage' />
                        <h2 className='fName'>{funko.name}</h2></Link>
                        <h3 className='fCategory'>Category: {funko.category}</h3>
                        <h3 className='fPrice'>Price: ${funko.price}</h3>
                        {/* <button onClick={()=>{qtyValueDecrease( funko)}} >-</button> QTY:{funko.qtyForCart} 
                        <button onClick={()=>{qtyValueIncrease( funko)}} >+</button> */}
                        <button onClick={()=>{addToCart(funko)}} >Add 1 to Cart</button>
                        {userType === 'admin' ? <button className= 'deleteF' type='button' 
                        onClick={(event)=> {handleDelete(funko.id)}}>Delete Funko</button> : null}
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default AllFunkos