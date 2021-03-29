import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { isAuth } from '../Api/Auth/authApi';
import axios from 'axios'
import { BrowserRouter, Route, Link, Redirect, useHistory, useParams} from "react-router-dom";
const PackagePayment = () => {
         const { user_name,user_id,pack_name,pack_id,quantity, validity } = useParams();

      const [success, setSuccess] = useState(false)
      const [trans, setTrans] = useState("")
      const history = useHistory()
      if (!isAuth()) {
            return <Redirect to={`/login`} />
      }

console.log("validity",validity,quantity)

      if (success) {
            setTimeout(() => {
                  history.push('/')

            }, 3000);
      }
      const handlechange = (e) => {
            setTrans(e.target.value)
      }

      const HandCash = (e) => {


  e.preventDefault();
    if (trans) {
          const payload = { user_name,user_id,pack_name,pack_id,quantity,validity,trans }
    console.log("payload",payload)
     axios.post('/api/package/mypackage', payload).then((pack,err) => {
      if (err) {
      toast.error("Something went wrong")
      } else {
            setTrans("")
            localStorage.setItem("user_id", pack.data.user_id);
            localStorage.setItem("pack_id", pack.data.pack_id);
            localStorage.setItem("user_name", pack.data.user_name);
            localStorage.setItem("quantity", pack.data.quantity);
            const date = new Date();
            localStorage.setItem("my_package_id", pack.data._id);
            const vali = date.setDate(date.getDate() + pack.data.validity);
                  
 

            localStorage.setItem("validity", vali);
            
            console.log("data",pack.data.user_id,vali)
        toast.success("We will contact you as soon!")
    }
     }).catch(err => {
           console.log("err", err)
           toast.error("You are already used another package")
  })
    } else {
     setTrans("")
      toast.error("All field are required")
    }


      }
      return (
            <>
                  <ToastContainer />

                  <div class="container">
                        <div class="section">
                              <strong>  <h5 class="pagetitle">Payment Type</h5></strong>
                        </div>
                  </div>

                  <div class="container">
                        <div class="section">
                              <div class="row ui-mediabox team-box">
                                    <div style={{ margin: "2%" }} class="col s12 m5 pad-0  team-member z-depth-1 card">
                                          <a class="img-wrap"    >
                                                <img class="z-depth-1" style={{ width: "100%" }} src="https://tse2.mm.bing.net/th?id=OIP.8qclkAkY-berrQBfeOeRLwHaFO&pid=Api&P=0&w=225&h=159" />
                                          </a>
                                          <h5 class="bot-0 name">Name</h5>
                                          <div class="brief">desc</div>
                                          <div class="spacer"></div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="container">
                        <div class="section">
                              <div class="row ">
                                    <div class="pad-15">
                                          <div class="row">
                                                <div class="input-field col s12">
                                                      <input id="email" onChange={handlechange} value={trans} type="text" class="validate" />
                                                      <label for="email">Transection Id</label>
                                                </div>
                                          </div>
                                          <div class="row center">
                                                <a onClick={HandCash} class="waves-effect waves-light btn-large bg-primary"   >Login</a>
                                                <div class="spacer"></div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>




            </>
      )
}

export default PackagePayment
