import React,{useState} from 'react'
 import { ToastContainer, toast } from 'react-toastify';
import { isAuth } from '../Api/Auth/authApi';
import { BrowserRouter, Route, Link,Redirect,useHistory } from "react-router-dom";
const Index = () => {

      const [success,setSuccess] = useState(false)
      const history = useHistory()
              if(!isAuth()){
        return <Redirect to={`/login`} />
      }

      
      if (success) {
       setTimeout(() => {
       history.push('/')
            
}, 3000);
}

      
      const HandCash = () => {
            setSuccess(true)
            toast.success("Tnq you! your order completed");
            
      }
      return (
            <>
                  <ToastContainer/>

                    <div class="container">
      <div class="section">
           <strong>  <h5 class="pagetitle">Online Payment</h5></strong>
            </div>
      </div>

      <div class="ui-profile" style={{ marginTop: "35%" }}>

        <div class="prinfo card-panel" style={{ marginBottom: "12%", }} >
          <div class="prname">
            <Link  ><h6 onClick={HandCash} class="name" style={{color:"black", fontWeight:"1200"}} >Hand Cash<i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>

        <div class="prinfo card-panel" style={{ marginBottom: "12%", }} >
          <div class="prname">
            <Link to="/payment/online"><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Online Cash<i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>
        
      </div>


    </>
      )
}

export default Index
