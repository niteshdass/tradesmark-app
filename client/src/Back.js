import React,{useState,use} from 'react'
import { createApi } from './Api'
import emailjs from 'emailjs-com';

function Back() {

      const [name,setName] = useState("")
      const [date,setDate] = useState("")
      const [error,setError] = useState("")
      const [code,setCode] = useState("")
      const [success,setSuccess] = useState("")


      const nameChange = (e) =>{
           
            setError('')
            setName(e.target.value)
            console.log(name)
      }
      const dateChange = (e) =>{
           
            setError('')
            setDate(e.target.value)
            console.log(date)
      }

      const clickSubmit = (e) =>{

            e.preventDefault();
            setError('');
            setSuccess(false)

            console.log("name",name)
            console.log("date",date) 

            

           

            createApi(name).then( data =>{

                  if(data.error){
                        setSuccess(false)
                        setError(true)
                  }else{
                        setError(false)
                        setSuccess(true)
                     
                  }

            })

      }

      const testsubmit = () =>{
            fetch(`http://localhost:8000/back`).then( res => console.log(res))
      }


      function sendEmail(e) {
            e.preventDefault();

            emailjs.sendForm('service_lg6rjam', 'template_st52mbl', e.target, '')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
           
          }
        





      return (
            <div className="container mt-3">

<form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="name" />
      <label>Name</label>
      <input type="text" name="subject" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

            

            </div>
      )
}

export default Back
