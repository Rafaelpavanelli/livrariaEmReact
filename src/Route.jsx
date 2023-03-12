import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./views/Login";
import CadastrarVendedor from "./views/CadastrarVendedor";
const route=()=>{
  return(
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/CadastrarVendedor' element={<CadastrarVendedor />} />
   </Routes>
   </BrowserRouter>
  )
}
export default route;