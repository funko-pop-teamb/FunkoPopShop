import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop, selectFunkoPops } from '../../app/slice/allFunkoSlice'
import { me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'
import { addItemToCart, fetchAllCartFunkos } from '../../app/slice/cartProducts'
import { filteredOrdersByStatus } from '../../app/slice/singleOrderSlice'



const AllFunkos = () => {

    let funkos = useSelector((state) => { return state.allFunkoPops })
    const { userType, id, firstName, lastName, email, username } = useSelector((state) => state.auth.me)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFunkoPops())
        dispatch(me())
    }, [])

    const handleDelete = async (funkoId) => {
       await dispatch(deleteFunkoPop(funkoId))
       dispatch(fetchFunkoPops())
    }
    dispatch(filteredOrdersByStatus(id))
    const cartId=useSelector((state)=>  {return state.singleOrder.order.id})
    const cart= useSelector(selectFunkoPops)

    const addToCart = async (evt)=>{
        const FunkoPopId=6
         const orderId=2
         const quantity=1
         const funkoPrice=2
      await  dispatch(addItemToCart({FunkoPopId, orderId,quantity,funkoPrice}))
      console.log('****'+evt.value)

      await dispatch(fetchAllCartFunkos(orderId))
        console.log('&&&&&&'+cart)

    }
    return (
        <>
      
            <h1 className='header'>Funko Gallery</h1>
            <div className='allFunkos'>
                {funkos && funkos.map((funko) => (
                    <div key={funko.id} className='fCard'>
                        <Link key={funko.id} to={`/funkoPops/${funko.id}`}>
                        <img src={funko.imageUrl} className='fImage' />
                        <h2 className='fName'>{funko.name}</h2></Link>
                        <h3 className='fCategory'>Category: {funko.category}</h3>
                        <h3 className='fPrice'>Price: ${funko.price}</h3>
                        <button onClick={(evt)=>{addToCart(evt)}}  value={funko}>Add to Cart</button>
                        {userType === 'admin' ? <button className= 'deleteF' type='button' 
                        onClick={(event)=> {handleDelete(funko.id)}}>Delete Funko</button> : null}
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default AllFunkos