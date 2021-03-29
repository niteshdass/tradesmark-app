import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { isAuth } from '../Api/Auth/authApi';
import axios from 'axios'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Pack = ({id,orderNo,validDate,user_id}) => {
	
	
	const [myPack, setMyPack] = useState([])
      const [validity, setValidity] = useState()
      const [quantity, setQuantity] = useState("")
      const [user, setUser] = useState("")
      const [loading, setLoading] = useState(false)
 
      
            useEffect(() => {
            
                  axios.get(`/api/pack/${id}`).then(resp => {
                        console.log(resp.data);
                      setMyPack(resp.data)
                  });

                  setValidity((localStorage.getItem('validity')))
                  setQuantity((localStorage.getItem('quantity')))
                  setUser((localStorage.getItem('user_id')))

                  
            }, [])
      
  
	  
	  
                if(!isAuth()){
        return <Redirect to={`/login`} />
      }

       const toDay = new Date()
      const validDay = new Date(1617090001436).toLocaleString()
      
      console.log("valid day",validDay)

     
           
            console.log(validDate)

      if (quantity && orderNo) {
      
            if (quantity <= orderNo) {
                       
                  axios.delete(`/api/order/${user}`).then(resp => {
                        console.log(resp.data);
                         
                    
                        console.log("valid", validity, quantity, orderNo)
                  });

                  localStorage.removeItem("my_package_id")
                  console.log(quantity,orderNo)
          
                 
            
            } else {
                  console.log("hello")
            }
      }
            
     

 

  
      
      return (
            <>
                  <ToastContainer/>

                 { myPack.length > 0 ? <div class="container full">
                        <div class="section">


                              <ul class="collection invoice-item">

                                    {
                                          myPack.map(item => ( <li class="collection-item avatar">
                                          <div class="item-det">
                                                <img src="assets/images/c3.jpg" alt="" class="circle" />
                                              
                        
                                                      <span>Remaing Order:{quantity - localStorage.getItem("orderNo") }</span>
                                                      <p> - </p>
                                                      <p >Package ID:{ localStorage.getItem('pack_id')}</p>
                                                      <p>Last Date: {validDay}</p>
                                          </div>

                                          <div class="secondary-content">
                                                <h6 class="top-0 ">Active</h6>
                                          </div>
                                    </li>
                                          ))
                                    }





                              </ul>


                        </div>
                  </div> : <h5 style={{textAlign:"center"}}>You Have no Package</h5>}
            			
         
            
            </>
      )
}

export default Pack
