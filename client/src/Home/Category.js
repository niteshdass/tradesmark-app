import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { getCategories } from '../Api/Categories/CatApi'

const Category = () => {


    const [cat,setCat] = useState([])

     useEffect(() => {
       getCategories().then(item => {
        setCat(item)
      })
     }, [])
    
  
  

    
  return (<>
                    <div style={{height:"300px"}}>

            </div>
            <div >
                      {/* category */}

            <div class="container">
                  <div class="section">
                      
                    <h5 class="pagetitle">Category</h5>
                </div>
                  </div>
                  
{cat ?<div class="scrollmenu" style={{ overflow: "auto", whiteSpace: "nowrap", textAlign:"center" }}>



                  {
                      cat.map(item => (
                          <Link to={`/zone/${item.name}`} class=""   style={{width: "120px", borderRadius: "50%", display: "inline-block",marginLeft:"10px" }}>
                    <img   style={{ width: "100%", borderRadius: "50%" }} src="assets/images/cat2.jpg" />
                              <h6 class="title-area center" style={{color:"black"}}>{ item.name}</h6>
                     </Link>
                      ))
               }
                

      
            </div> : <h6 style={{textAlign:"center"}}> Empty Category</h6> }
    </div>
    
    </>
      )
}

export default Category

