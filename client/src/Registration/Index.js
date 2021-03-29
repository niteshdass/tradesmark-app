import React,{useState} from 'react'
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import axios from 'axios';
import { isAuth, signup } from '../Api/Auth/authApi';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Index = () => {
  const [myfile, setMyfile] = useState('');
  const [myfileName, setMyFileName] = useState('');
const [values,setValues] = useState({
            name:'',
            email:'',
  password: '',
  profile:'',
            phone:'',
  error: '',
            success:false,
            loading:false,
            message:'',
            showForm:true
})
  
  const { name, email, password, error, loading, message, showForm, phone,profile } = values
  
  console.log(name,email,password,phone,profile)
  
   const handleChange= name => e=>{
            setValues({...values,error:false,[name]:e.target.value})
  }
  
    const handleChange6 = (e) => {
    setMyfile(e.target.files[0])
    setMyFileName(e.target.files[0].name)
   
  };

  
  const handleSubmit = e =>{
    e.preventDefault();
    
            console.table({name,email,password,error,loading,message,showForm})
            setValues({...values,loading:true,error:false})

    if (name && email && password && phone && myfileName) {
      let data = new FormData();
      data.append('categoryImage', myfile);
      data.append('file_name', myfileName);
      data.append('name', name);
      data.append('email', email);
      data.append('password', password);
      data.append('phone', phone);

      axios
        .post('/api/signup', data)
        .then((res) => {
           toast.success("Succeccfully Registered");
          console.log(res.data);
          setMyFileName("")
          setMyfile("")
          setValues({ ...values, name: '', email: '', password: '', phone: '', success: true, loading: false })
         
        })
        .catch((err) => {
          console.log(err.response);
          toast.error(err.response.data.error);
          setValues({ ...values, error: err.response.data.errors, loading: false })

        });
    
    } else {
      toast.error("All field are required");
    } 
 
            
  }

  if (error) {
    console.log("error",error)
toast.error("Image shoud be less ten 300kb");
  }
  
  
    if(isAuth()){
        return <Redirect to={`/`} />
    }
  
  



      return (
        <>
          
                  <div class="container">
      <div class="section">
           <strong>  <h5 class="pagetitle">Register</h5></strong>
            </div>
          </div>
           <div>
         
        <ToastContainer/>
      </div>
      


<div class="container">
  <div class="section">


    <div class="row ">
    <div class="pad-15">

        <div class="row">
        <div class="input-field col s12">
          <input id="first_name1" onChange={handleChange('name')}  value={name} type="text" class="validate"/>
          <label for="first_name1">Name</label>
        </div>
        </div>

        <div class="row">
        <div class="input-field col s12">
          <input id="email" onChange={handleChange('email')}  value={email} type="text" class="validate"/>
          <label for="email">Email</label>
        </div>
                  </div>

           

        <div class="row">
        <div class="input-field col s12">
          <input id="password" onChange={handleChange('password')} value={password} type="text" class="validate"/>
          <label class="password" for="password">Password</label>
        </div>
        </div>

        <div class="row">
        <div class="input-field col s12">
          <input id="phone" onChange={handleChange('phone')} value={phone} type="text" class="validate"/>
          <label for="phone">Phone</label>
        </div>
                                          </div>
<div class="row">
        <div class="file-field col input-field s12">
          <div class="btn">
            <span>File</span>
            <input type="file" onChange={handleChange6} />
          </div>
          <div class="file-path-wrapper">
            <input  class="file-path validate" type="text"/>
          </div>
        </div>
                                          </div>
                                          
 
       
          <div class="row center">
                                    <a class="waves-effect waves-light btn-large bg-primary" onClick={handleSubmit} >Register</a>
                                    <div class="spacer"></div>
                                    <div class="links">

                                          <Link to="/login" class='waves-effect'>Do you have an account? Login </Link>  </div>
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
