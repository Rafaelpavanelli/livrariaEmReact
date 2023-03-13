import "./MostrarLivros_modules.css";
import Navbar from "../../components/navbar";
import Data from '../../data.json';
import {BsCartCheckFill,BsInfoCircleFill} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import { NavLink,Navigate} from "react-router-dom";
const MostrarLivros=()=>{
  const Livros=Data.Livros;
  
  return(
    <>
    <Navbar />
    <div className="Livros">
      <div className="container">
        <div className="container-left">
          <h3>Livros</h3>
        </div>
        <div className="container-right">
          <span className="span">
          <input type="text" placeholder="Area de busca" />
          <BiSearchAlt/>
          </span>
          <ul>
          {
            Livros.map(livro =>{
             return(
              <>
            <li key={livro.id}><span><p >{livro.Titulo}</p><p>({livro.Autor})</p> </span><span><NavLink><BsCartCheckFill /></NavLink><NavLink to={"/LivrosDescricao"} state={{Info:livro}} ><BsInfoCircleFill /></NavLink></span></li>
              </>
             )
            })
          }
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
export default MostrarLivros;