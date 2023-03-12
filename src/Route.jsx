import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./views/Login";
import CadastrarVendedor from "./views/CadastrarVendedor";
import CadastrarUsuario from "./views/CadastrarUsuario";
import CadastrarEditora from './views/CadastrarEditora'

const route=()=>{
  return(
      
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/CadastrarVendedor' element={<CadastrarVendedor />} />
    <Route path='/CadastrarUsuario' element={<CadastrarUsuario/>} />
    <Route path='/CadastrarEditora' element={<CadastrarEditora/>} />
    
   </Routes>
   </BrowserRouter>
  )
}
export default route;