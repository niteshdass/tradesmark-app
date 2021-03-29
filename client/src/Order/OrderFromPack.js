import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route, Link,Redirect, useHistory } from "react-router-dom";
 //import Router from 'next/router'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import axios from 'axios'
import { authenticate, isAuth, signin } from '../Api/Auth/authApi';

const OrderFromPack = () => {
      const [user_id, setUser_id] = useState("")
      const [pack_id,setPack_id] = useState("")
      const [user_name,setUser_name] = useState("")
      const [ord, setO] = useState("")
       const [qty,setQ] = useState("")
      const [values,setValues] = useState({
            
            phone:'',
            delivaryAdd: '',
            pickupAdd:'',
            error: '',
            success:false,
            loading:false,
            message:'',
            showForm: true,
            
      })

      const history = useHistory()

      useEffect(() => {
            setUser_id(localStorage.getItem("user_id"))
            setPack_id(localStorage.getItem("my_package_id"))
            setUser_name(localStorage.getItem("user_name"))
            setO(localStorage.getItem("orderNo"))
      
    
      }, [])
      

      const { phone, delivaryAdd,pickupAdd ,error, loading, message, showForm } = values
      console.log(phone,pickupAdd, delivaryAdd,user_id,user_name,pack_id)
  
 const handleChange= name => e=>{
            setValues({...values,error:false,[name]:e.target.value})
      }





const handleSubmit = e =>{
    e.preventDefault();
     
            setValues({...values,loading:true,error:false})
      if (phone && delivaryAdd && pickupAdd) {
      
            const user = { phone, delivaryAdd, pickupAdd, user_id, pack_id, user_name }
      
            axios.post('http://localhost:8000/api/orderpack/create', user).then((pack, err) => {
                  if (err) {
                        toast.error("Something went wrong")
                  } else {
                        // setTrans("")
                        // localStorage.setItem("user_id", pack.data.user_id);
                        // localStorage.setItem("pack_id", pack.data.pack_id);
                        // localStorage.setItem("user_name", pack.data.user_name);
                        // localStorage.setItem("quantity", pack.data.quantity);
                        // const date = new Date();
                        // const vali = date.setDate(date.getDate() +pack.data.validity);
                        // localStorage.setItem("validity", vali);

                        setValues({ ...values, phone: "", pickupAdd: "", delivaryAdd: "", loading: true, error: false })
                        console.log("pack", pack)
                        toast.success("Your Order Successfully Complete!")
                  }
            }).catch(err => {
                  console.log("err", err)
                  toast.error("You are already used another package")
            })
      } else {
             toast.error("All field are required")
      }
    
    
 
            
      }
      
       if(!isAuth()){
        return <Redirect to={`/login`} />
    }

      return (
            <>
                  
          
                  <div class="container">
      <div class="section">
           <strong>  <h5 class="pagetitle">Package Order</h5></strong>
            </div>
      </div>
       <ToastContainer/>

                  {pack_id? <div class="container">
                        <div class="section">


                              <div class="row ">
                                    <div class="pad-15">

         

                                          <div class="row">
                                                <div class="input-field col s12">
                                                      <input id="delivaryAdd" onChange={handleChange('delivaryAdd')} value={delivaryAdd} type="text" class="validate" />
                                                      <label for="delivaryAdd">Delivary Address</label>
                                                </div>
                                          </div>

           

                                          <div class="row">
                                                <div class="input-field col s12">
                                                      <input id="pickupAdd" onChange={handleChange('pickupAdd')} value={pickupAdd} type="text" class="validate" />
                                                      <label class="pickupAdd" for="pickupAdd">Pickup Address</label>
                                                </div>
                                          </div>
                                          <div class="row">
                                                <div class="input-field col s12">
                                                      <input id="phone" onChange={handleChange('phone')} value={phone} type="number" class="validate" />
                                                      <label class="phone" for="phone">Phone</label>
                                                </div>
                                          </div>
                                          

       

                                          <div class="row center">
                                                <a class="waves-effect waves-light btn-large bg-primary" onClick={handleSubmit} >Submit</a>
                                                <div class="spacer"></div>

                               
                                          </div>

         
                                    </div>

                              </div>
                        </div>
    
    

  
    

    
                  </div> : <h6>You Have not any kind of Packages</h6>}
            </>
      )
}

export default OrderFromPack
   

