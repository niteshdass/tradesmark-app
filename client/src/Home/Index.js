import React,{useEffect,useState} from 'react'
import Category from './Category'
import Footer from './Footer'
import Nav from './Nav'
import Package from './Package'
import { BrowserRouter, Route, Link,Redirect } from "react-router-dom";
import Slide from './Slide'
import { isAuth } from '../Api/Auth/authApi';
import { getCategories } from '../Api/Categories/CatApi'

const Index = () => {

  useEffect(() => {
   console.log("hello")
  }, [])
  
  
           if(!isAuth()){
        return <Redirect to={`/login`} />
  }
  

    return (
        <>
            

          <Slide/>
          
            <Category />
            <Package />
      



        </>
    )
}

export default Index
