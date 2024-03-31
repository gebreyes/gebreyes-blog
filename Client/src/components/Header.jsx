import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link, BrowserRouter } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa'

export default function Header() {
  //const path = useLocation(); 
  return (
    <BrowserRouter>
    <Navbar className = "border-b-2">
      <Link to = '/' 
      className = "self-center whitespace-nowrap font-semibold text-sm sm:text-xl dark:text-white font-serif"> 
      <span className = "px-2 py-1 bg-gradient-to-r from-indigo-500
       via-purple-700 to-pink-700 rounded-xl font-bold text-xl
        text-white">Gebreyes</span>
      Blog
      </Link>
      <form>
        <TextInput 
        type = "text"
        placeholder = "Search"
        rightIcon = {AiOutlineSearch}
        className = "hidden lg:inline "/>
      </form>
      <Button 
      className = 'w-15 h-15 lg:hidden' color = 'purple' pill><AiOutlineSearch/></Button>

      
        <div className = 'flex gap-2 md:order-2'>
          <Button  color = 'blue' pill outline>
            <FaMoon/>
          </Button>
          <Link to = '/login'>
            <Button gradientDuoTone = "purpleToPink" outline pill className="font-bold text-md">
              Sign-In
            </Button>
          </Link>
          <Navbar.Toggle/>         
        </div>
        <Navbar.Collapse>
          <Navbar.Link  >
            <Link to = '/' className = "text-xl font-bold shadow-red-700
              font-serif bg-gradient-to-r
             from-slate-400 via-neutral-800 to-purple-700 text-white rounded" pill outline>Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to = '/about' className = "text-xl
              font-bold shadow-red-700
              from-amber-400 font-serif bg-gradient-to-r from-slate-00
               via-neutral-800 to-purple-200 text-white rounded" outline>
              About Us
              </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to = '/project' className = "text-xl font-bold shadow-red-700
             font-serif bg-gradient-to-r
              from-slate-400 via-neutral-800 to-purple-700 text-white rounded" outline>
              Projects
              </Link>
          </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </BrowserRouter>
  )
}
