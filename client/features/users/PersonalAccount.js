import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editUser } from "../../app/slice/usersSlice";
import { fetchSingleUser } from "../../app/slice/singleUserSlice";





const PersonalAccount = () => {

    const { userId } = useParams()
    const dispatch = useDispatch()

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    function editAccount(event){
        event.preventDefault()
        dispatch(editAccount({username, password, firstName, lastName,email}))
        dispatch(fetchSingleUser(userId))


    }

    const singleUser = useSelector((state) => {return state.singleUser})


    return (
        
        <>
        //i dont have any css made for this yet
       <div>
        <h1>{singleUser.username}</h1>
        <h3>{singleUser.firstName}</h3>
        <h3>{singleUser.lastName}</h3>
        <h3>{singleUser.email}</h3>
       </div>
        
        //do we want te form there or only to show up when clicked
        <div>
            <form onSubmit = {editAccount}>
                <label htmlFor = "username">Username:</label>
                <input value = {username} onChange = {(event) => 
                setUserName(event.target.value)} />
                
                <label htmlFor = "password">Password:</label>
                <input value = {password} onChange = {(event) => 
                setPassword(event.target.value)} />
               
                <label htmlFor = "firstName">First Name:</label>
                <input value = {firstName} onChange = {(event) => 
                setFirstName(event.target.value)} />
                
                <label htmlFor = "lastName">Last Name:</label>
                <input value = {lastName} onChange = {(event) => 
                setLastName(event.target.value)} />

                <label htmlFor = "email">Email:</label>
                <input value = {email} onChange = {(event) => 
                setEmail(event.target.value)} />

            </form>

    </div>

</>

    )


}


export default PersonalAccount