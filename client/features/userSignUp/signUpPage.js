import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postUser } from '../../app/slice/usersSlice'
import { useNavigate } from 'react-router-dom'
import { me } from '../auth/authSlice'
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useSelector((state) => { return state.auth.me })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        await dispatch(
            postUser({ firstName, lastName, username, password, email })
        )
        toast(`Thank you for signing up!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        navigate('/login')
    }

    return (
        <div className='newUser'>
            <h2 className='newUserHeader'>Sign Up</h2>
            <form className='signupForm' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input className='firstName' name='firstName' value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
                </div>

                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input className='lastName' name='lastName' value={lastName} onChange={(evt) => setLastName(evt.target.value)} />
                </div>

                <div>
                    <label htmlFor='username'>Username</label>
                    <input className='username' name='username' value={username} onChange={(evt) => setUsername(evt.target.value)} />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input className='password' name='password' value={password} onChange={(evt) => setPassword(evt.target.value)} />
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input className='email' name='email' value={email} onChange={(evt) => setEmail(evt.target.value)} />
                </div>

                <button className='SignUpBtn' type='submit'>Sign Up</button>
            </form>
            <ToastContainer/>

        </div>
    )
}

export default SignUp

