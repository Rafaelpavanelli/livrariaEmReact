import { NavLink } from 'react-router-dom';
import {FaRegUserCircle,FaKey,FaRegAddressBook} from 'react-icons/fa';
import {MdAlternateEmail} from 'react-icons/md';
import './CadastrarVendedor_modules.css';
const CadastrarVendedor=()=>{
  return (
    <div className="cadastrar">
      <div className="container">
        <div className="container-left">
          <h2>Olá Vendedor!</h2>
          <h3>Se Confundiu e lembrou que ja está cadastrado?</h3>
          <NavLink to={"/"} >Login</NavLink>
        </div>
        <div className="container-right">
          <h2>OLÁ E BEM VINDO!</h2>
          <div className="input">
          <span>
            <FaRegUserCircle />
            <input type="text" name="name" id="name" placeholder='Digite seu nome' required/>
          </span>
          <span>
            <MdAlternateEmail />
            <input type="email" name="email" id="email" placeholder='Digite seu email' required/>
          </span>
          <span>
            <FaKey />
            <input type="password" name="password" id="password" placeholder='Digite sua senha' required/>
          </span>
          <span>
            <FaRegAddressBook />
            <input type="text" name="key" id="key" placeholder='Digite codigo para cadastro' required/>
          </span>
          </div>
          <button>Cadastrar</button>
        </div>
      </div>
    </div>
  )
    
  
}
export default CadastrarVendedor;