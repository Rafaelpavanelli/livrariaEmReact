import Navbar from "../../components/navbar";
import { NavLink } from "react-router-dom";
import './Menu_modules.css';
const Menu=()=>{
  return(
    <>
    <Navbar />
    <div className="Menu">
      <div className="container">
        <div className="container-left">
          <h1>Menu</h1>
        </div>
        <div className="container-right">
          <div className="itens">
          <NavLink to="/Livros">Livros</NavLink>
          <NavLink to="">Usuarios</NavLink>
          <NavLink to="">Estoque</NavLink>
          <NavLink to="">Historico de compras</NavLink>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Menu;