import { NavLink } from 'react-router-dom';
import './Login_modules.css';
const Login=()=>{
  return(
    <div className="Login">
        <div className="container">
          <div className="container-left">
            <h2>Olá vendedor!</h2>
            <p>Ainda não está cadastrado? 
                Cadastre-se aqui agora</p>
                <NavLink >Cadastrar-se</NavLink>
          </div>
          <div className="container-right">
            <h2>Ola mundo</h2>
          </div>
        </div>
    </div>
  )
}
export default Login;