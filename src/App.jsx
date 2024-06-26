 import React from 'react'
import Header from './Component/Header/Header'
import Workout from './Component/Workou/Workout'
import Gallery from './Component/Gallery/Gallery'
import Pricing from './Component/Pricing/Pricing'
import Content from './Component/Content/Content'
import Bmi from './Component/Bmi/Bmi'
 
import { BrowserRouter,Router } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Component/Footer/Footer'
// import { Router } from 'lucide-react'

 const App = () => {
   return (
    <>
    {/* <Router> */}

        <Header></Header>
        <Workout/>
        <Gallery></Gallery>
        <Pricing></Pricing>
        <Content></Content>
        <Bmi></Bmi>
        <Footer/>
        <ToastContainer />
        {/* </Router> */}

     </>
   )
 }
 
 export default App