import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './../pages/Home';
import About from './../pages/About';
import Dashboard from './../pages/Dashboard';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Projects from './../pages/Projects';
export default function Pages() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/dashboard" element = {<Dashboard/>}/>
      <Route path = "/login" element ={<Login/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/project" element = {<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}
