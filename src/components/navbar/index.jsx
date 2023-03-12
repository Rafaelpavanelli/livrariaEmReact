import { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi';
import './navbar_modules.css';
const Navbar = (children)=>{
  const[active,setActive]=useState(true);
  const handleClick=()=>{setActive(!active)}
  return(
    <div className="navbar">
      <button onClick={()=>{handleClick()}}>
        {active?<GiHamburgerMenu />:<AiOutlineClose />}
      </button>
      <ul className={!active?"navbar-open":"navbar-closed"}>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Livros</a></li>
        <li><a href="#">Clientes</a></li>
      </ul>
    </div>
  )
}
export default Navbar;