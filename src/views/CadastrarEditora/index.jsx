import './CadastrarEditora_modules.css';
import Navbar from '../../components/navbar'
const CadastrarEditora=()=>{
  return(
    <>
    <Navbar />
    <div className="Cadastrar-Editora">
      <div className="container">
        <div className="container-left">
        <h2>Cadastrar Editora</h2>
       </div>
        <div className="container-right">
        <div className="inputs">
          <label>
            <p>Nome da Editora</p>
            <input type="text" name="name" id="name" />
          </label>
          <label>
            <p>Código</p>
            <input type="text" name="code" id="code" />
          </label>
          <label>
            <p>Endereço</p>
            <input type="text" name="andress" id="andress" />
          </label>
          <label>
            <p>Telefone</p>
            <input type="text" name="phone" id="phone" />
          </label>
          <label>
            <p>Nome do gerente</p>
            <input type="text" name="manager" id="manager" />
          </label>
        </div>
        <div className="button">
          <button>Cadastrar</button>
          <button>Cancelar</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default CadastrarEditora;