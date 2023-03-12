import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./views/Login";
const route=()=>{
  return(
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />} />
   </Routes>
   </BrowserRouter>
  )
}
export default route;