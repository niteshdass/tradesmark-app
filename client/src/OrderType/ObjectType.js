import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link,Redirect,useHistory,useParams } from "react-router-dom";
import { isAuth, removeCookie, removeLocalStorage } from '../Api/Auth/authApi';

const ObjectType = () => {
      const { cat } = useParams();
      console.log("cat",cat)
  
  return (
    <>

                  
                  <div className="container">
                        <div className="section">
                              <h5 className="pagetitle">Your Order Type</h5>
                        </div>
                  </div>

                  <div className="container full">
                        <div className="section">

        <div className="prinfo card-panel" style={{ marginBottom: "4%", height:"70px" }} >
          <div className="prname">
            <Link to={`/order/${cat}/liquid`} ><h6 className="name" style={{color:"black", fontWeight:"1200"}} >Liquid <i style={{ width: "20px", }}
              className="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>


                  <div className="prinfo card-panel" style={{ marginBottom: "4%", height:"70px" }} >
          <div className="prname">
            <Link to={`/order/${cat}/solid`}><h6 className="name" style={{color:"black", fontWeight:"1200"}} >Solid <i style={{ width: "20px", }}
              className="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>

                          
                          
                  <div className="prinfo card-panel" style={{ marginBottom: "4%", height:"70px" }} >
          <div className="prname">
            <Link to={`/order/${cat}/glass`}><h6 className="name" style={{color:"black", fontWeight:"1200"}} >Glass <i style={{ width: "20px", }}
              className="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
                          </div>
                          
            
                  <div className="prinfo card-panel" style={{ marginBottom: "4%", height:"70px" }} >
          <div className="prname">
            <Link to={`/contact`}><h6 className="name" style={{color:"black", fontWeight:"1200"}} >Customize <i style={{ width: "20px", }}
              className="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>




                        </div>
                  </div>
            
            
 


    </>
  )
}

export default ObjectType
