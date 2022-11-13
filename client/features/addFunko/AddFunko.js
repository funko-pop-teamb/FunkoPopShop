import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addFunkoPop } from '../../app/slice/allFunkoSlice'


const AddFunko = () => {

    const { userType } = useSelector((state) => state.auth.me)
    console.log(userType)

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [size, setSize] = useState('')
    const [edition, setEdition] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        await dispatch(addFunkoPop({ name, category, price, imageUrl, size, edition, description }))
        dispatch(fetchFunkoPops())

    }

    return (
        <>
            {userType === 'admin' ?
                <div className='addFunko'>
                    <h3 className='addOneHeader'>Add A Funko</h3>
                    <form className='funkoForm' onSubmit={handleSubmit}>

                        <label htmlFor='name'>Name</label>
                        <input className='fInputName' name='name' value={name} onChange={(e) => setName(e.target.value)} />

                        <label htmlFor='price'>Price</label>
                        <input className='fInputPrice' name='name' value={price} onChange={(e) => setPrice(e.target.value)} />

                        <label htmlFor='category'>Category</label>
                        <input className='fInputCategory' name='category' value={category} onChange={(e) => setCategory(e.target.value)} />

                        <label htmlFor='imageUrl'>ImageUrl</label>
                        <input className='fInputimageUrl' name='imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

                        <label htmlFor='size'>Size</label>
                        <input className='fInputSize' name='size' value={size} onChange={(e) => setSize(e.target.value)} />

                        <label htmlFor='edition'>Edition</label>
                        <input className='fInputEdition' name='edition' value={edition} onChange={(e) => setEdition(e.target.value)} />

                        <label htmlFor='description'>Description</label>
                        <input className='fInputDescription' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />

                        <button className='addbtn' type='submit'>Add Funko</button>
                        <button className='clearbtn' type='button'>Clear</button>
                    </form>

                </div> : null}
        </>
    )
}

export default AddFunko