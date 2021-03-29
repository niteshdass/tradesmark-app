import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route, Link,Redirect, useHistory } from "react-router-dom";
 //import Router from 'next/router'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { authenticate, isAuth, signin } from '../Api/Auth/authApi';

const Index = () => {
      const [values,setValues] = useState({
            
            email:'',
            password: '', 
            error: '',
            success:false,
            loading:false,
            message:'',
            showForm: true,
            
      })

      const history = useHistory()

      useEffect(() => {
            if(isAuth()){
        history.push('/')
    }
      }, [])
      

      const { email, password, error, loading, message, showForm } = values
      console.log(email, password)
  
 const handleChange= name => e=>{
            setValues({...values,error:false,[name]:e.target.value})
      }





const handleSubmit = e =>{
    e.preventDefault();
    
            console.table({email,password,error,loading,message,showForm})
            setValues({...values,loading:true,error:false})

    const user = { email, password }
            signin(user).then(data =>{
                  if (data.error) {
                         toast.error(data.error);
                        setValues({...values,error:data.error,loading:false})
                  }else{
                        authenticate(data, ()=>{
                              if(isAuth() && isAuth().role === 1){
                                    //Router.push(`/admin`)
                                    history.push('/')
                                    console.log("data",data)
                                     toast.warn("Admin successfully Logged !");
                              } else {
                                     toast.warn("User successfully Logged !");
                                    //Router.push(`/`)  
                                    history.push('/')
                                    console.log("data",data)
                              }
                              
                        }) 
                       
                  }
            })
    
    
 
            
      }
      
       if(isAuth()){
        return <Redirect to={`/`} />
    }

      return (
            <>
                  <div class="container">
      <div class="section">
           <strong>  <h5 class="pagetitle">Login</h5></strong>
            </div>
      </div>
       <ToastContainer/>


<div class="container">
  <div class="section">


    <div class="row ">
    <div class="pad-15">

         

        <div class="row">
        <div class="input-field col s12">
          <input id="email"  onChange={handleChange('email')}  value={email} type="text" class="validate"/>
          <label for="email">Email</label>
        </div>
                  </div>

           

        <div class="row">
        <div class="input-field col s12">
          <input id="password"  onChange={handleChange('password')}  value={password} type="text" class="validate"/>
          <label class="password" for="password">Password</label>
        </div>
        </div>

       

         <div class="row center">
                                    <a class="waves-effect waves-light btn-large bg-primary" onClick={handleSubmit} >Login</a>
                                    <div class="spacer"></div>
                                    <div class="links">

                                          <Link to="/registration" class='waves-effect'>Do you have no account? Registered </Link>  </div>
                                    <div class="spacer"></div>
                               
                              </div>

         
    </div>

    </div>
    </div>
    
    

  
    

    
</div>
            </>
      )
}

export default Index
   
