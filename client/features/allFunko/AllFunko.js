import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop, selectFunkoPops, updateFunkoPops } from '../../app/slice/allFunkoSlice'
import { me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'
import { addItemToCart, fetchAllCartFunkos, filteredOrdersByStatus, updateOneOrderOneFunko } from '../../app/slice/cartProducts'
import { updateFunkoPop } from '../../app/slice/oneFunkoSlice'



const AllFunkos = () => {

    let funkos = useSelector((state) => { return state.allFunkoPops })
    const { userType } = useSelector((state) => state.auth.me)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFunkoPops())
        // dispatch(me())
        // dispatch(filteredOrdersByStatus(id))

    }, [])


    // const [qtyForCart, setQtyForCart]=useState(1)

    const handleDelete = async (funkoId) => {
       await dispatch(deleteFunkoPop(funkoId))
       dispatch(fetchFunkoPops())
    }
    const {cart,items,}=useSelector((state)=>  {return state.cart})


    const searchingLoop=(funko)=> {
        let FunkoPopId=funko.id
        let orderId=cart.id
        let quantity=funko.quantity+1
        for (let i=0; i<items.length;i++){
            if (funko.id===items[i].id){
                dispatch(updateOneOrderOneFunko(FunkoPopId, orderId,quantity))
                
            }
        }
    }
    const addToCart = async (funko)=>{
        const FunkoPopId=funko.id
         const orderId=cart.id
         const quantity=funko.qtyForCart
         const funkoPrice=funko.price
  
          await searchingLoop(funko)

      await  dispatch(addItemToCart({FunkoPopId, orderId,quantity,funkoPrice}))
      console.log('****'+funko.name)

      await dispatch(fetchAllCartFunkos(orderId))

    }

    // const qtyValueIncrease= async ( funko)=>{
    //     setQtyForCart(funko.qtyForCart+1)
    //     let funkoId=funko.id
    // console.log(qtyForCart)
    //     await dispatch(updateFunkoPop({funkoId, qtyForCart}))
    //      console.log(funkos)

    // }

    // const qtyValueDecrease=(funko)=>{
    //     funko.qtyForCart--

    //     return funko.qtyForCart
    // }

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
                        <button onClick={()=>{addToCart(funko)}} >Add to 1 Cart</button>
                        {userType === 'admin' ? <button className= 'deleteF' type='button' 
                        onClick={(event)=> {handleDelete(funko.id)}}>Delete Funko</button> : null}
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default AllFunkos