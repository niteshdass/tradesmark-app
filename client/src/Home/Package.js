import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { getPackage } from '../Api/Package/packApi';
const Package = () => {

     const [cat,setCat] = useState([])

     useEffect(() => {
       getPackage().then(item => {
        setCat(item)
      })
     }, [])
    
   
    
    
      return (
            <>
                <div class="container">
                <div class="section">
                    <h5 class="pagetitle">Package</h5>
                </div>
            </div>


            <div class="container">
                <div class="section">

                      {/* {cat ? <div class="row ui-mediabox team-box">
                          
                          {cat.map(item => (
                              <div style={{ margin: "1%" }} class="col s12 m5 pad-0  team-member z-depth-1 card">
                                  <a class="img-wrap"    >
                                      <img class="z-depth-1" style={{ width: "100%" }} src="assets/images/s2.jpg" />
                                  </a>
                                  <h5 class="bot-0 name">{item.name}</h5>

                                  <p style={{ fontWeight: "900" }} class="bot-0 name">Price- {item.price} Tk | Order- {item.quantity} | time- {item.validity} Month</p>
                                  
                                  <div class="brief">{item.description}</div>



                                  <a style={{ marginLeft: "45%" }} class="btn-floating btn waves-effect waves-light green lighten-2 "><i class="mdi mdi-plus"></i></a>




                                  <div class="spacer"></div>
                              </div>
                          ))}

                       
                     

                      </div> : <h6 style={{textAlign:"center"}}> Empty Category</h6> } */}
                      {cat ?<div class="scrollmenu" style={{ overflow: "auto", whiteSpace: "nowrap", textAlign:"center" }}>



                  {
                      cat.map(item => (
                          <Link to={`/packageDetail/${item._id}/${item.name}/${item.price}/${item.quantity}/${item.validity}/${item.description}`} class=""   style={{width: "180px", borderRadius: "50%", display: "inline-block",marginLeft:"10px" }}>
                    <img   style={{ width: "100%", borderRadius: "50%" }} src="assets/images/cat.jpg" />
                              <h6 class="title-area center" style={{color:"black"}}>{ item.name}</h6>
                     </Link>
                      ))
               }
                

      
            </div>: <h6 style={{textAlign:"center"}}> Empty Category</h6> }


                </div>
            </div>
            </>
      )
}

export default Package
