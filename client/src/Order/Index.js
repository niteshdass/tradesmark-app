import React,{useState,useEffect} from 'react'
import { order } from '../Api/Order/orderApi';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Link,Redirect, useHistory,useParams } from "react-router-dom";
import OrderConfirm from './OrderConfirm';
import Contact from './Contact';

const Index = () => {

 const [user,setUser] = useState({})
 
    





  const { cat, order_type } = useParams();


   
  console.log("cat ordertype",cat, order_type)
  const history = useHistory()


   useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
      }, [])
  


 
      return (
        <>
        
          {
            order_type == 'custom'?<Contact/> :<OrderConfirm/>
}
       
        
        </>
      )
}

export default Index
