import { NavLink,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {MdAlternateEmail,MdKey} from 'react-icons/md'
import './Login_modules.css';
import verificarLogin from '../../modules/VerificarLogin';
const Login=()=>{
  const[email,setEmail]=useState("");
  const[senha,setSenha]=useState("");
  const navigate=useNavigate();
  function Redirecionar(){
    if(verificarLogin(email,senha) === true){
      return navigate("/Menu");
    }
  }

  return(
    <>
    
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
              <input type="email" name="email-login" id="email" placeholder='Digite seu email' onChange={e=>setEmail(e.target.value)}/>
              </span>
              <span>
                <MdKey />
              <input type="password" name="password-login" id="password" placeholder="Digite sua"  onChange={e=>setSenha(e.target.value)}/>
              </span>

            </div>
            <button onClick={()=>Redirecionar()}>Login</button>
        
          </div>
        </div>
    </div>
   
    </>
  )
}
export default Login;