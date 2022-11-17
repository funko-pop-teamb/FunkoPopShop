import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops } from '../../app/slice/allFunkoSlice'
import { Link } from 'react-router-dom'
import { addItemToCart, fetchAllCartFunkos, filteredOrdersByStatus, updateOneOrderOneFunko, addToLocalCart } from '../../app/slice/cartProducts'
import { fetchSingleFunkoPop } from '../../app/slice/oneFunkoSlice'
import { updateOrder } from '../../app/slice/singleOrderSlice'


const AllFunkos = () => {

    let funkos = useSelector((state) => state.allFunkoPops)
    const cart = useSelector((state) => state.cart.cart)
    const items = useSelector((state) => state.cart.items)
    const [search, setSearch] = useState('')

    const { userType, id } = useSelector((state) => state.auth.me)

    const dispatch = useDispatch()

    let orderId = cart.id

    const loadToPage = async () => {
        if (!id) {
            dispatch(fetchFunkoPops())
        } else {
            dispatch(fetchFunkoPops())
            dispatch(fetchAllCartFunkos(orderId))
        }
    }

    useEffect(() => {
        loadToPage()
    }, [])

    const handleDelete = async (funkoId) => {
        await dispatch(deleteFunkoPop(funkoId))
        await dispatch(fetchFunkoPops())
    }

    const addToCart = async (funko) => {
        if (!id) {
            const item = await dispatch(fetchSingleFunkoPop(funko.id))
            await dispatch(addToLocalCart(item.payload))
        } else {
            let FunkoPopId = funko.id
            orderId = cart.id
            let quantity = 1
            let funkoPrice = funko.price
            let totalPrice = cart.totalPrice + funkoPrice
            if (items.filter(e => e.FunkoPopId === funko.id).length > 0) {
                let index = items.findIndex(e =>
                    e.FunkoPopId === funko.id
                )
                quantity = items[index].quantity + 1
                await dispatch(updateOneOrderOneFunko({ FunkoPopId, orderId, quantity }))
            } else {
                await dispatch(addItemToCart({ FunkoPopId, orderId, quantity, funkoPrice }))
            }
            await dispatch(updateOrder({ orderId, totalPrice }))
            await dispatch(filteredOrdersByStatus(id));
            await dispatch(fetchAllCartFunkos(orderId))
        }
    }
    const handleSearch = (e) => {
        e.preventDefault()
        funkos.filter((funko) => {
            funko.name.includes(search)
        })
        console.log(funkos)
    }
    return (
        <>
            <h1 className='header'>Funko Gallery</h1>
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="Search..."></input>
            <button onClick={(e) => handleSearch(e)}>Search</button>
            <div className='allFunkos'>
                {funkos.map((funko) => (
                    <div key={funko.id} className='fCard'>
                        <Link key={funko.id} to={`/funkoPops/${funko.id}`}>
                            <img src={funko.imageUrl} className='fImage' />
                            <h2 className='fName'>{funko.name}</h2></Link>
                        <h3 className='fCategory'>Category: {funko.category}</h3>
                        <h3 className='fPrice'>Price: ${funko.price}</h3>
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