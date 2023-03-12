import Navbar from '../../components/navbar';
import './CadastrarLivro_modules.css';
const CadastrarLivro=()=>{
  return(
    <>
    <Navbar />
    <div className="Cadastrar-Livro">
      <div className="container">
        <div className="container-left">
    <h3>Cadastrar<br/> Livro</h3>
        </div>
        <div className="container-right">
        <div className="inputs">
          <label>
            <p>Titulo</p>
            <input type="text" name="title" id="title" />
          </label>
          <label>
            <p>Editora</p>
            <input type="text" name="editora" id="editora" />
          </label>
          <label>
            <p>Autor</p>
            <input type="text" name="writer" id="writer" />
          </label>
          <label>
            <p>Numero ISBN</p>
            <input type="text" name="isbn" id="isbn" />
          </label>
          <select name="theme" id="theme">
            <option value="Romance">Romance</option>
            <option value="Suspense">Suspense</option>
            <option value="Ficção">Ficção</option>
            <option value="Drama">Drama</option>
            <option value="Terror">Terror</option>
            <option value="ação">ação</option>
          </select>
          <label>
            <p>Estoque</p>
            <input type="number" name="stock" id="stock" defaultValue={1} min={1} />
          </label>
        </div>
        <div className="buttons">
          <button>Cadastrar</button>
          <button>Cancelar</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default CadastrarLivro;