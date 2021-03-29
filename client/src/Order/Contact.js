import React,{useState} from 'react'
import axios from 'axios'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

  const [phone, setPhone] = useState("")
  const [about, setAbout] = useState("")

  const [myfile, setMyfile] = useState('');
  const [myfileName, setMyFileName] = useState('');





      const handleChange = (e) => {
  setPhone(e.target.value)
    
  };
      const handleChange1 = (e) => {
setAbout(e.target.value)
    
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (phone && about) {
          const payload = { phone, about }
    console.log("payload",payload)
     axios.post('/api/contact', payload).then((data,err) => {
      if (err) {
      toast.error("Something went wrong")
      } else {
        setAbout("")
        setPhone("")
        toast.success("We will contact you as soon!")
    }
  })
    } else {
      setAbout("")
      setPhone("")
      toast.error("All field are required")
    }

    

}



      return (
        <>
          <ToastContainer/>
                 
  <div class="container">
    <div class="section">
      <h5 class="pagetitle">Contact Us</h5>
          </div>
  </div>
  




  
<div class="container">
  <div class="section">
 

    <div class="card contactus">
      <div class="row ">
                <div class="col s12 pad-0"><h5 class="bot-20 sec-tit  ">Address</h5>      <div>FF 1, Softtech Empire, Sector-8, Tech Street, New York City, USA - 32342</div>
      </div>
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
          <input id="email"  onChange={handleChange}  value={phone} type="text" class="validate"/>
          <label for="email">Phone</label>
        </div>
                  </div>

           

        <div class="row">
        <div class="input-field col s12">
          <input id="password"  onChange={handleChange1}  value={about} type="text" class="validate"/>
          <label class="password" for="password">About Your Product</label>
        </div>
        </div>

       

         <div class="row center">
                                    <a class="waves-effect waves-light btn-large bg-primary" onClick={handleSubmit} >Contact Us</a>
                                    <div class="spacer"></div>
              
                               
                              </div>

         
    </div>

    </div>
    </div>
    
    

  
    

    
</div>

            </>
      )
}



export default Contact
