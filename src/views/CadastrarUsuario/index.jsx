import './CadastrarUsuario_modules.css';
import { useState } from 'react';
const CadastrarUsuario=()=>{
  const [dados,setDados]=useState(1);
return(
  <div className="cadastrar-usuario">
    <div className="container">
      <div className="container-left">
      <h2>Cadastrar usuário</h2>
      </div>
      <div className="container-right">
        <div className="input">
        <label>
          <p>Nome Completo</p>
          <input type="text" name="name" id="name" />
        </label>
        <label>
          <p>Endereço</p>
          <input type="text" name="endress" id="endress" />
        </label>
        <label >
        <select name="dados" onChange={e=>setDados(e.target.value) } id="select">
          <option value="1">CPF</option>
          <option value="2">CNJP</option>
        </select>
        </label>
        <label>
          <p>Dados</p>
          {dados==1?<input type="text" id='cpf' name="cpf" placeholder='Digite o CPF' maxlength="11"/>:<input type="text" name="cnpj" id='cnpj' placeholder='Digite o CNPJ' maxlength="14"/>}
        </label>
        <label>
          <p>Data de nascimento</p>
          <input type="date" name="DTN" id="DTN" />
        </label>
        <label>
          <p>Telefone</p>
          <input type="text" name="ddd" id="ddd" placeholder='DDD' maxlength="2"/>
          <input type="text" name="telefone" id="telefone" placeholder='Telefone' maxlength="9"/>
        </label>
        </div>
        <div className="button">
        <button>Cadastrar</button>
        <button>Cancelar</button>
        </div>
      </div>
    </div>
  </div>
)
};
export default CadastrarUsuario;