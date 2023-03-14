import { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import './navbar_modules.css';
const Navbar = ()=>{
  const[active,setActive]=useState(true);
  const handleClick=()=>{setActive(!active)}
  return(
    <div className="navbar">
      <button onClick={()=>{handleClick()}}>
        {active?<GiHamburgerMenu />:<AiOutlineClose />}
      </button>
      <ul className={!active?"navbar-open":"navbar-closed"}>
        <li><NavLink to={"/Menu"}>Menu</NavLink></li>
        <li><NavLink to={"/Livros"}>Livros</NavLink></li>
        <li><NavLink to={"/Livros"}>Clientes</NavLink></li>
        <li><NavLink to={"/Livros"} style={{"textAlign":"center"}}>Historico<br />de <br/>compras</NavLink></li>
      </ul>
    </div>
  )
}
export default Navbar;