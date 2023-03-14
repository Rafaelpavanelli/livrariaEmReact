import User from '../users.json';
const verificarLogin=(email,senha)=>{
  const user=User.Users.filter(e=>e.Email===email)
  if(user!== ''){
    if(senha === user[0].Senha){
       console.log("Redirecionado")
    }else{
    return console.log("Senha Invalida")
    }
  }else{
    console.log("Email não localizado")
  }

}
export default verificarLogin;