import { db} from "../firebase/config";
import {
    getAuth,
    createUserWithEmailAndPasswor,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
}from 'firebase/auth'

import { useState, useEffect } from "react"

export const userAuthentication = () =>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState (null)
    const [cancelled, setCancelled] = useState (false)

    const auth = getAuth()

    function checkIfCancelled(){
        if(cancelled){
            return
        }
    }

    async function createUser (data){
        checkIfCancelled()

        setLoading(true)
        setError(null)

        try{
            const { user } = await createUserWithEmailAndPasswor(
                auth,
                date.email,
                data.password
    
            )
        }catch(error) {
            
        }
        
    }
}