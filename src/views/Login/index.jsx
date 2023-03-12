import { NavLink } from 'react-router-dom';
import {MdAlternateEmail,MdKey} from 'react-icons/md'
import './Login_modules.css';
const Login=()=>{
  return(
    <div className="Login" >
        <div className="container" >
          <div className="container-left" >
            <h2>Olá vendedor!</h2>
            <p>Ainda não está cadastrado? 
                Cadastre-se aqui agora</p>
                <NavLink to={'/CadastrarVendedor'} >Cadastrar-se</NavLink>
          </div>
          <div className="container-right" >
            <h2>Olá e boas vendas!</h2>
            <div className="input">
              <span>
                <MdAlternateEmail />
              <input type="email" name="email-login" id="email" placeholder='Digite seu email' />
              </span>
              <span>
                <MdKey />
              <input type="password" name="password-login" id="password" placeholder="Digite sua" />
              </span>

            </div>
            <button>Login</button>
          </div>
        </div>
    </div>
  )
}
export default Login;