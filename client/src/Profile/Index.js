import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link,Redirect,useHistory } from "react-router-dom";
import { isAuth, removeCookie, removeLocalStorage } from '../Api/Auth/authApi';
import MyImage from './uploads/nitesh-1616236855018.jpg'
const Index = () => {

  const [user, setUser] = useState({})
  const [validity, setValidity] = useState("")
  
  const history = useHistory()

      useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        setValidity(JSON.parse(localStorage.getItem('validity')))
      }, [])
  
         if(!isAuth()){
        return <Redirect to={`/login`} />
  }

console.log("user",user,validity)

  const Logout = () => {
    
    removeCookie("token")
    localStorage.removeItem("user")
    history.push('/login')
   
  }
  const pack_id = localStorage.getItem("pack_id")
  const my_package_id = localStorage.getItem("my_package_id")
  
  const date = new Date(validity)
  const StringDate = date.toString()
  
  return (
    <>

      <div class="ui-profile">
        <div class="primg">
<img  style={{  width: "50%", height: "50%", marginLeft: "25%", marginTop: "15%" }} src={`uploads/${user.image}`} alt="" class="circle" />
           

        </div>
        <div class="prinfo card-panel">
          <div class="prname">
            <h4 class="name">{user.name} </h4>
            <div class="pos">{user.email} </div>
          </div>
          



        </div>
      </div>

      <div class="ui-profile" style={{ marginTop: "15%" }}>

        <div class="prinfo card-panel" style={{ marginBottom: "12%", }} >
          <div class="prname">
            <Link to={`/OrderDetails/${user._id}`}><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Order Details <i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>

        <div class="prinfo card-panel" style={{ marginBottom: "12%", }} >
          <div class="prname">
            <Link to={`/PackageDetails/${user._id}/${my_package_id}`}><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Package Details <i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>




        <div class="prinfo card-panel" style={{ marginBottom: "12%", backgroundColor: "#ffad33" }} >
          <div class="prname">
            <h6 onClick={Logout} class="name">Logout</h6>

          </div>
        </div>
      </div>


    </>
  )
}

export default Index
