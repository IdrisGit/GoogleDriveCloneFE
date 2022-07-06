import { useState, useEffect } from "react";
import axios from "axios";

const PrivatePage = (props) => {

    const [error, setError] = useState('')
    const [privateData, setPrivateData] = useState('')

    useEffect(() => {
        if(!localStorage.getItem('authToken')){
            props.history.push('/login')
        }

        const fetchPrivateData = async() => {
            const config = {
                headers : {
                    "Content-Type" : "application/json",
                    Authorization:`Bearer ${localStorage.getItem('authToken')}`
                }
            }

            try{
                const {data} = await axios.get('/api/private', config)
                setPrivateData(data.data)
            } catch(err){
                localStorage.removeItem('authToken')
                setError("Not Authorized Please Login")
            }
        }

        fetchPrivateData()
    }, [props.history])

    const logoutHandler = () => {
        localStorage.removeItem('authToken')
        props.history.push('/login')
    }
    return error ? 
    (<span>{error}</span>) : 
    (   <>   <div>{privateData}</div>
        <button onClick={logoutHandler}>Logout</button>
        </>
    )
}

export default PrivatePage;