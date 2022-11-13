import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";


import { fetchSingleUser } from "../../app/slice/singleUserSlice";
import { editUser } from "../../app/slice/usersSlice";





const PersonalAccount = () => {

    const  me  = useSelector((state) => state.auth.me)


   

    
    
    
    const dispatch = useDispatch()

    

    const [username, setUserName] = useState("")
    //const [AccPassword, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const editAccount = async (evt) => {
        evt.preventDefault()
     
        let userId = me.id
        
        await dispatch(editUser({userId, username, firstName, lastName, email}))
        await dispatch(fetchSingleUser(me.id))


    }

    


    return (
        
        <>
      
       <div>
        <h1>{me.username}</h1>
        <h3>{me.firstName}</h3>
        <h3>{me.lastName}</h3>
        <h3>{me.email}</h3>
       </div>
        
       
        <div>
            <form onSubmit = {editAccount}>
                <label htmlFor = "username">Username:</label>
                <input value = {username} onChange = {(evt) => 
                setUserName(evt.target.value)} />
                
                {/* <label htmlFor = "password">Password:</label>
                <input value = {AccPassword} onChange = {(evt) => 
                setPassword(evt.target.value)} /> */}
               
                <label htmlFor = "firstName">First Name:</label>
                <input value = {firstName} onChange = {(evt) => 
                setFirstName(evt.target.value)} />
                
                <label htmlFor = "lastName">Last Name:</label>
                <input value = {lastName} onChange = {(evt) => 
                setLastName(evt.target.value)} />

                <label htmlFor = "email">Email:</label>
                <input value = {email} onChange = {(evt) => 
                setEmail(evt.target.value)} />
            <button type='submit'>Update</button>
            </form>

    </div>

</>

    )


}


export default PersonalAccount