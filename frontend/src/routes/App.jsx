import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Listings from "../pages/Listings"

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path= "/" element= {<Home/>}/>
          <Route path= "/login" element= {<Login/>}/>
           <Route path= "/register" element= {<Register/>}/>
           <Route path= "/listings" element= {<Listings/>}/>
           
           {/* Protected Routes - Will be implemented with authentication */}
           {/* <Route path= "/admin" element= {<ProtectedRoute><Admin/></ProtectedRoute>}/> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App