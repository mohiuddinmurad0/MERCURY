import { createContext, useEffect, useState } from "react";


export const AllContext = createContext();


import axios from 'axios'
import { toast } from "react-toastify";


const AllContextProvider = (props) => {

    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)

    const [userData, setUserData] = useState(null);
    const [userTransactions, setUserTransactions] = useState([])

    const backendUrl = "http://127.0.0.1:8000"

    const currency = '৳';


    const loadUserProfileData = async () => {
        try {
           const { data } = await axios.get(`${backendUrl}/api/customer/profile`, {
              headers: {
                 Authorization: `Bearer ${token}`,
                 "Content-Type": "application/json",
              },
           });
  
           if (data.status) {
 
            //console.log("UserData:", data.data);
 
              setUserData(data.data);
 
           } else {
              toast.error(data.message);
           }
        } catch (error) {
           console.error(error);
           toast.error(error.message);
        }
     };


     const loadUserTransactionData = async () => {

      try {
         const { data } = await axios.get(`${backendUrl}/api/customer/transactions`, {
            headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
            },
         });
   
         if (data.status) {
            //console.log("UserTransactions:", data.transactions);
            setUserTransactions(data.transactions);
         } else {
            toast.error("No transactions found.");
         }
      } catch (error) {
         console.error(error);
         toast.error(error.message);
      }
   };


    const value = {

        currency,
        backendUrl,
        token,
        setToken,
        loadUserProfileData,
        userData,
        setUserData,
        loadUserTransactionData,
        userTransactions,
        setUserTransactions,

    }




    useEffect(() => {
        if (token) {
           loadUserProfileData();
        } else {
           setUserData(null);
        }
     }, [token]);

     

     useEffect(() => {
      if (token) {
         loadUserTransactionData();
      } else {
         setUserTransactions([]);
      }
   }, [token]);



    return (

        <AllContext.Provider value={value}>
            {props.children}
        </AllContext.Provider>
    )
    
}

export default AllContextProvider