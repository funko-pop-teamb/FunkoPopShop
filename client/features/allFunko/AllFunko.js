import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFunkoPops } from '../../app/slice/allFunkoSlice'
import { fetchSingleUser } from '../../app/slice/singleUserSlice'
import { Link } from 'react-router-dom'



const AllFunkos = () => {

    const funkos = useSelector((state) => { return state.allFunkoPops })
    const singleUser = useSelector((state) => { return state.singleUserSlice.info.type })
    console.log(singleUser)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFunkoPops())

    }, [])

    return (
        <>
            <h1 className='header'>Funko Gallery</h1>
            <div className='allFunkos'>
                {funkos && funkos.map((funko) => (
                    <div key={funko.id} className='fCard'>
                        {/* <Link key={funko.id} to{`/funkoPops/${funko.id}`}></Link> */}
                        <img src={funko.imageUrl} className='fImage' />
                        <h2 className='fName'>{funko.name}</h2>
                        <h3 className='fCategory'>Category: {funko.category}</h3>
                        <h3 className='fPrice'>Price: ${funko.price}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllFunkos