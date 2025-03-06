import { createContext, useState } from "react";


export const AllContext = createContext();


const AllContextProvider = (props) => {

    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)


    const backendUrl = "http://127.0.0.1:8000"

    const currency = '৳';



    const value = {

        currency,
        backendUrl,
        token,
        setToken,
    }


    return (

        <AllContext.Provider value={value}>
            {props.children}
        </AllContext.Provider>
    )
    
}

export default AllContextProvider