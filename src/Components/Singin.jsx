import React from "react"
import { useState } from "react"

export const Singin = () => {

    // const [email,seteEmail] = useState('');
    // const [pass, setpass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefult();
        // console.log(email);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            {/* <label for= "email">email</label> */}
            {/* <input type="email" onClick={(e) => setEmail(e.target.value)} placeholder="email" name= "email" /> */}
            <label for= "password"></label>
            <input type="password" placeholder="**********" />
        </form>
        </>
    )
}