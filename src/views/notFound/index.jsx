import { NavLink } from "react-router-dom";
import './notFound_modules.css';
const notFound=()=>{
  return(
    <div className="notFound">
      <h1>Pagina não encontrada</h1>
      <NavLink to={'/'} >IR PARA O MENU</NavLink>
    </div>
  )
}
export default notFound;