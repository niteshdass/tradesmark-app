import React,{useEffect,useState} from 'react'
import { isAuth } from '../Api/Auth/authApi';
import axios from 'axios'
import { BrowserRouter, Route, Link,Redirect,useParams } from "react-router-dom";
 
const OrderDetails = () => {
      const [myOrder, setMyOrder] = useState([])
      
      const { id } = useParams();
      
            useEffect(() => {
            
                  axios.get(`/api/order/${id}`).then(resp => {
                        console.log(resp.data);
                      setMyOrder(resp.data)
                  });
            }, [])
      
      if (myOrder) {
            console.log("my",myOrder)
      }
 

              if(!isAuth()){
        return <Redirect to={`/login`} />
  }
      return (
            <>
                  <div class="container">
                        <div class="section">
                              <h5 class="pagetitle">Order Details</h5>
                        </div>
                  </div>

                  { myOrder.length > 0 ? <div class="container full">
                        <div class="section">


                              <ul class="collection invoice-item">

                                    {
                                          myOrder.map(item => (<li class="collection-item avatar">
                                                <div class="item-det">
                                                      <img src={`uploads/${item.image}`} alt="" class="circle" />
                                                      <span class="title">Price:{item.price } Tk</span>
                                                      <p>Delivary date: { item.date}</p>
                                                      <p>ID: { item.category}</p>
                                                </div>

                                                <div class="secondary-content">
                                                      <h6 class="top-0 ">{ item.status}</h6>
                                                </div>

                                          </li>
                                          ))
                                    }





                              </ul>


                        </div>
                  </div> : <h5 style={{textAlign:"center"}}>Empty Order</h5>}
            
            
  
            </>
      )
}

export default OrderDetails
