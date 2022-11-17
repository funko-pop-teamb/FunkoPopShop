import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleUser } from "../../app/slice/singleUserSlice";
import { editUser } from "../../app/slice/usersSlice";

const PersonalAccount = () => {

    const dispatch = useDispatch()
    const me = useSelector((state) => state.auth.me)
    const [username, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    function refreshPage() {
        window.location.reload(false);
    }

    const editAccount = async (evt) => {
        evt.preventDefault()
        let userId = me.id
        await dispatch(editUser({ userId, username, firstName, lastName, email }))
        await dispatch(fetchSingleUser(me.id))
    }

    return (
        <>
        <button><Link to={'/allOrders'}> View all orders</Link></button>
            <div>
                <h1>{me.username}</h1>
                <h3>{me.firstName}</h3>
                <h3>{me.lastName}</h3>
                <h3>{me.email}</h3>
            </div>
            <div>
                <form onSubmit={editAccount}>
                    <label htmlFor="username">Username:</label>
                    <input value={username} onChange={(evt) =>
                        setUserName(evt.target.value)} />

                    <label htmlFor="firstName">First Name:</label>
                    <input value={firstName} onChange={(evt) =>
                        setFirstName(evt.target.value)} />

                    <label htmlFor="lastName">Last Name:</label>
                    <input value={lastName} onChange={(evt) =>
                        setLastName(evt.target.value)} />

                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(evt) =>
                        setEmail(evt.target.value)} />
                    <button type='submit' onClick={refreshPage} >Update</button>
                </form>
            </div>
            
        </>
    )

}


export default PersonalAccount