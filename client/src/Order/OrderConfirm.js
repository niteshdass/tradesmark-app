import React,{useState,useEffect} from 'react'
import { order } from '../Api/Order/orderApi';
import axios from 'axios';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Link,Redirect, useHistory,useParams } from "react-router-dom";

const OrderConfirm = () => {


  const [delivaryAdd, setDelivaryAdd] = useState("");
  const [pickupAdd, setPickupAdd] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState();
  const [user, setUser] = useState({});
  const [liquid,setLiquid] = useState("")
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [Confirm, setConfirm] = useState(false);
  const [handCash, setHandCash] = useState(false);
  const [trans, setTrans] = useState("")
  const [onlineCash, setOnlineCash] = useState(false);

  const [myfile, setMyfile] = useState('');
  const [myfileName, setMyFileName] = useState('');

  const name = user.name
  const email = user.email
  const phone = user.phone
const user_id = user._id




  const { cat, order_type } = useParams();


  if (!price) {
    if (order_type === 'liquid') {
    setPrice(22)
    } else if (order_type === 'solid'){
      setPrice(20)
  }else if (order_type === 'glass'){
      setPrice(25)
  }

 }
  console.log("cat ordertype",cat, order_type)
  const history = useHistory()


   useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
      }, [])
  

  console.log(delivaryAdd,pickupAdd,weight,date,type,user,name,email,phone,liquid,trans)

  const handleChange = (e) => {
      
      setPickupAdd(e.target.value)
  }
  
   const handleChange1 = (e) =>{
      setDelivaryAdd(e.target.value)
  }
  const handleChange2 = (e) =>{
    setWeight(e.target.value)
    
  }
  const handleChange3 = (e) =>{
    setDate(e.target.value)
    
  }
    const handleChange4 = (e) =>{
      setType(e.target.value)
      if (e.target.value == 1) {
        setPrice(price + 2)
      } else {
        setPrice(price)
      }
  }

     const handleChange5 = (e) =>{
       setLiquid(e.target.value)
       setPrice()
  }
     const handlechange6 = (e) => {
            setTrans(e.target.value)
      }

    const handleChange9 = (e) => {
    setMyfile(e.target.files[0])
    setMyFileName(e.target.files[0].name)
    
  };

  const handleSubmit = e => {
      e.preventDefault();
    if (delivaryAdd && pickupAdd && weight) {


     
    

     let data = new FormData();
      data.append('categoryImage', myfile);
      data.append('file_name', myfileName);
      data.append('name', name);
      data.append('email', email);
      data.append('price', temp);
      data.append('phone', phone);
      data.append('delivaryAdd', delivaryAdd);
      data.append('pickupAdd', pickupAdd);
      data.append('weight', weight);
      data.append('date', date);
      data.append('category', user_id);     
      data.append('trans', trans);
      data.append('order_type', order_type);
      data.append('cat', cat);  

    
    
      console.log("data", data)

      axios
        .post('/api/order/create', data)
        .then((res) => {
           toast.warn("Order successfully completed !");
          setPickupAdd("")
          setDelivaryAdd("")
          setPrice(10)
           setWeight("")
          setDate("")
          setType("")
          setSuccess(true)
          setTrans(" ")
          console.log("success")
            history.push("/")
         
        })
        .catch((err) => {
          console.log(err.response);
          toast.error(err.response.data.error);
                   
          setPickupAdd("")
          setDelivaryAdd("")
          setPrice(10)
          setWeight("")
          setDate("")
          setType("")
          setTrans(" ")
          history.push("/")
             
        });
    
    } else {
      toast.error("All field are required");
    } 

            
  }


  const handleSubmit1 = () => {
    if (delivaryAdd && pickupAdd && weight) {
         setConfirm(true)
    } else {
       toast.error("All field are required !")
       }
      
  }

        if (success) {
       setTimeout(() => {
       history.push('/')
            
}, 3000);
}

      
  const HandCash = (e) => {
    e.preventDefault()
    
 if (delivaryAdd && pickupAdd && weight) {

    
         
          let data = new FormData();
      data.append('categoryImage', myfile);
      data.append('file_name', myfileName);
      data.append('name', name);
      data.append('email', email);
      data.append('price', temp);
      data.append('phone', phone);
      data.append('delivaryAdd', delivaryAdd);
      data.append('pickupAdd', pickupAdd);
      data.append('weight', weight);
      data.append('date', date);
      data.append('category', user_id);     
      data.append('trans', trans);
      data.append('order_type', order_type);
      data.append('cat', cat);  

    
    
      console.log("data", data)


   axios
        .post('/api/order/create', data)
        .then((res) => {
      toast.warn("Order successfully completed !");
          setPickupAdd("")
          setDelivaryAdd("")
          setPrice(10)
           setWeight("")
          setDate("")
          setType("")
          setSuccess(true)
          setTrans(" ")
            setHandCash(true)
            history.push("/")
        })
        .catch((err) => {
          console.log("data", data)
          setPickupAdd("")
          setDelivaryAdd("")
          setPrice(10)
          setWeight("")
          setDate("")
          setType("")
          setTrans(" ")
         
             toast.error("Server problem") 
             
        });
    
    
    } else {
      toast.error("All field are required !")
    }





          
            
  }
  
  const OnlinePayment = () => {
    setOnlineCash(true)
  }


  // if (success) {
  //   history.push('/payment_type')
  // }

  const temp =  weight > 2?price+(4*(weight-2)):price


  const dateshow = 2;
      return (
        <>
          

        


                  <div class="container">
      <div class="section">
           <strong>  <h5 class="pagetitle"> YOUR ORDER,s FORM</h5></strong>
            </div>
      </div>
      
          <ToastContainer />
          
          {
            !Confirm?<div class="container">
  <div class="section">


    <div class="row ">
    <div class="pad-15">

        <div class="row">
        <div class="input-field col s12">
          <input onChange={handleChange} id="first_name1" value={pickupAdd} type="text" class="validate"/>
          <label for="first_name1">Pickup Address</label>
        </div>
        </div>

        <div class="row">
        <div class="input-field col s12">
          <input id="delivary_address" onChange={handleChange1} value={delivaryAdd} type="text" class="validate"/>
          <label for="delivary_address">Delivary Address</label>
        </div>
                  </div>
 <div class="row ">

    <label for="">Delivary Date</label>
          <p>
            <label>
              <input onChange={handleChange4} value="1" type="radio" name="group4"  class="with-gap danger" />
              <span>Same Day Delivary</span>
            </label>
          </p>
          <p>
            <label>
              <input type="radio" onChange={handleChange4} value="2" name="group4"   class="with-gap info" />
              <span>Standard  Delivary</span>
            </label>
                    </p>
                    <p>
            <label>
              <input  type="radio" onChange={handleChange4} value="3" name="group4"  class="with-gap info" />
              <span>Scheduled</span>
            </label>
          </p>
         
       


    
                  </div>
                  {
                    type == 3 ?                   <div class="row">
        <div class="input-field col s12">
          <i class="mdi mdi-clock-outline prefix"></i>
          <input onChange={handleChange3} type="date" id="datepicker-input1" value={date} class="datepicker datepicker1"/>
          <label for="datepicker-input1">Manual Date</label>
        </div>
        </div>:""
}

        <div class="row">
        <div class="input-field col s5">
          <input onChange={handleChange2} id="first_name2" value={weight} type="number" class="validate"/>
          <label class="active" for="first_name2">Weight</label>
                    </div>

          {/* <div class="input-field col s5">
          <input onChange={handleChange5} id="Liquid" value={liquid} type="number" class="validate"/>
          <label class="active" for="Liquid">Liquid</label>
                    </div> */}
               
        </div>

        <div class="row">
        <div class="input-field col s12">
          {/* <input id="password" name="price" type="text" class="validate"/> */}
                      <label for="password">{ temp}</label>
        </div>
                                          </div>
<div class="row">
        <div class="file-field col input-field s12">
          <div class="btn">
            <span>File</span>
            <input type="file" onChange={handleChange9}/>
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text"/>
          </div>
        </div>
                  </div>
                  

                                          
 
       
           <button onClick={handleSubmit1} class="waves-effect waves-info btn-large bg-info ">Make Payment</button>
       

         

         
    </div>

    </div>
    </div>
    
    

  
    

    
</div>: !onlineCash ? <div class="ui-profile" style={{ marginTop: "35%" }}>

        <div class="prinfo card-panel" style={{ marginBottom: "12%", }} >
          <div class="prname">
            <Link  ><h6 onClick={HandCash} class="name" style={{color:"black", fontWeight:"1200"}} >Hand Cash<i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>

        <div class="prinfo card-panel" style={{ marginBottom: "12%", }} >
          <div class="prname">
            <a onClick={OnlinePayment}><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Online Cash<i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </a>

          </div>
        </div>
        
              </div> : <>
              
                
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
                                                      <input id="email" onChange={handlechange6} value={trans} type="text" class="validate" />
                                                      <label for="email">Transection Id</label>
                                                </div>
                                          </div>
                                          <div class="row center">
                                                <a onClick={handleSubmit} class="waves-effect waves-light btn-large bg-primary"   >Payment Pay</a>
                                                <div class="spacer"></div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
</>
 
            
        
        
          }

        


        
        
        
        </>
      )
}

export default OrderConfirm
