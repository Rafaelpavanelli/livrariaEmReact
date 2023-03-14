import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
 import {AiOutlineShoppingCart}   from 'react-icons/ai';
import './LivroInfo_modules.css';
const LivroDescricao=()=>{
  const data=useLocation()
  const Livro=data.state;
  console.log(Livro.Info);
  return (
    <>
    <Navbar />
    <div className="Livro-Info">
      <div className="container">
        <div className="container-left">
          <h1>{Livro.Info.Titulo}</h1>
        </div>
        <div className="container-right">
          <div className="livros">
        <span>
            <h2>Titulo</h2>
            <h3>{Livro.Info.Titulo}</h3>
          </span>
          <span>
            <h2>Editora</h2>
            <h3>{Livro.Info.Editora}</h3>
          </span>
          <span>
            <h2>Autor(a)</h2>
            <h3>{Livro.Info.Autor}</h3>
          </span>
          <span>
            <h2>Assunto</h2>
            <h3>{Livro.Info.Assunto}</h3>
          </span>
          <span>
            <h2>Codigo ISBN</h2>
            <h3>{Livro.Info.CodigoISBN}</h3>
          </span>
          <span>
            <h2>Estoque</h2>
            <h3>2</h3>
          </span>
          </div>
          <button><AiOutlineShoppingCart />Comprar<br/>Livro</button>
        </div>
      </div>
      </div> 
    </>
  )
}
export default LivroDescricao;