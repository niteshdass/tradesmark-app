import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link, Redirect,useParams } from "react-router-dom";
import { isAuth } from '../Api/Auth/authApi';
import axios from 'axios'
import Pack from './Pack'
const PackageDetails = () => {

            const [myPack, setMyPack] = useState([])
      
      const { id,pack_id } = useParams();
      
            useEffect(() => {
            
                  axios.get(`/api/packorder/${id}/${pack_id}`).then(resp => {
                        console.log(resp.data);
                      setMyPack(resp.data)
                  });
            }, [])
      
      
      
      if (myPack) {
            console.log("my", myPack.length)
            localStorage.setItem('orderNo',myPack.length)
      }


                if(!isAuth()){
        return <Redirect to={`/login`} />
      }

      
      return (
            <>
                  
                  
                  <div class="container">
                        <div class="section">
                              <h5 class="pagetitle">Package Details</h5>
                        </div>
                  </div>

                  {
                        myPack?<Pack id={id} user_id={myPack.user_id}  orderNo={myPack.length} validDate={myPack.validity}  />:''
                  }
                                    
                  <div class="container">
                        <div class="section">
                              <h5 class="pagetitle">Package Order Details</h5>
                        </div>
                  </div>

                  { myPack.length > 0 ? <div class="container full">
                        <div class="section">


                              <ul class="collection invoice-item">

                                    {
                                          myPack.map(item => (<li class="collection-item avatar">
                                                <div class="item-det">
                                                      <img src={`uploads/${item.image}`} alt="" class="circle" />
                                                      <span class="title">Price  Tk</span>
                                                      <p>Delivary date:  </p>
                                                      <p>ID:  </p>
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

export default PackageDetails
