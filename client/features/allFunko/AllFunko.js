import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFunkoPop, fetchFunkoPops, addFunkoPop } from '../../app/slice/allFunkoSlice'
import { me } from '../auth/authSlice'
import { Link, useParams } from 'react-router-dom'



const AllFunkos = () => {

    let funkos = useSelector((state) => { return state.allFunkoPops })
    const { userType, id, firstName, lastName, email, username } = useSelector((state) => state.auth.me)

    // const [name, setName] = useState('')
    // const [category, setCategory] = useState('')
    // const [price, setPrice] = useState('')
    // const [imageUrl, setImageUrl] = useState('')
    // const [size, setSize] = useState('')
    // const [edition, setEdition] = useState('')
    // const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFunkoPops())
        dispatch(me())
    }, [])

    const handleDelete = async (funkoId) => {
       await dispatch(deleteFunkoPop(funkoId))
       dispatch(fetchFunkoPops())
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

                        {userType === 'admin' ? <button className= 'deleteF' type='button' onClick={(event)=> {handleDelete(funko.id)}}>Delete Funko</button> : null}
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default AllFunkos