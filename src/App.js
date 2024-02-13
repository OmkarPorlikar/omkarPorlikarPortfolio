import React, { Suspense } from 'react'
import {Navbar }from './Component/Navbar/Navbar'
import './index.css'
import Hero from './Component/Hero/Hero'
import Services from './Component/Services/Services'
import Project from './Component/Project/Project'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import { BrowserRouter , Routes , Route ,NavLink , Navigate } from 'react-router-dom'
import Missing from './Component/Missing/Missing'
import ProjectDetails from './Component/ProjectDetails/ProjectDetails'
import Education from './Component/Education/Education'
function App() {
const location  = window.location.pathname;
  return (
    <div>
    <Suspense fallback > 
    {(location === '404') ?<Missing/> : <Navbar />}
  <BrowserRouter>
  <Routes>
    <Route path='/navlink' element={<Navbar/>}> </Route>
    <Route path='/' element={<Home/>}>    </Route>
    <Route path='/project' element={<Project/>} > </Route>
    <Route path='/about' element={<Education/>} > </Route>
    <Route path='/projects/:id' element={<ProjectDetails/>} > </Route>
    <Route path='/contact' element={<Contact/>}> </Route>
    <Route path="/404" element={<Missing />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
  </Routes>
  </BrowserRouter>
  </Suspense>  
    </div>
  )
}

export default App

