import React, { useState,useEffect } from 'react'
import {  Link,Redirect, useHistory,useParams } from "react-router-dom";
import MyImage from './uploads/s1.jpg'
const PackDetails = () => {
 
    
      const [user, setUser] = useState({})
  

      useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
      }, [])
    
    
   const { id, name, price, quantity, validity, description } = useParams();
      
      return (
                   
                    <>
                                      <div class="container">
                <div class="section">
                    <h5 class="pagetitle">Package Details</h5>
                </div>
            </div>


            <div class="container">
                <div class="section">

                   <div class="row ui-mediabox team-box">
                          
                     
                              <div style={{ margin: "1%" }} class="col s12 m5 pad-0  team-member z-depth-1 card">
                                  <a class="img-wrap"    >
                                                <img class="z-depth-1" style={{ width: "100%" }} src={ MyImage }/>
                                  </a>
                                  <h5 class="bot-0 name">{name}</h5>

                                  <p style={{ fontWeight: "900" }} class="bot-0 name">Price- {price} Tk | Order- {quantity} | time- {validity} Month</p>
                                  
                                  <div class="brief">{description}</div>



                                          <Link to={`/PackagePayment/${user.name}/${user._id}/${name}/${id}/${validity}/${quantity}`} style={{ marginLeft: "45%" }} class="btn-floating btn waves-effect waves-light green lighten-2 "><i class="mdi mdi-plus"></i></Link>




                                  <div class="spacer"></div>
                              </div>
                

                       
                     

                      </div>  

{/* 
                      <div class="scrollmenu" style={{ overflow: "auto", whiteSpace: "nowrap", textAlign:"center" }}>



                  {
                      cat.map(item => (
                          <Link to={`/packageDetail/${item._id}/${item.name}/${item.price}/${item.quantity}/${item.validity}/${item.description}`} class=""   style={{width: "180px", borderRadius: "50%", display: "inline-block",marginLeft:"10px" }}>
                    <img   style={{ width: "100%", borderRadius: "50%" }} src="assets/images/cat.jpg" />
                              <h6 class="title-area center" style={{color:"black"}}>{ item.name}</h6>
                     </Link>
                      ))
               }
                

      
            </div> */}


                </div>
            </div>
            </> 
           
      )
}

export default PackDetails
