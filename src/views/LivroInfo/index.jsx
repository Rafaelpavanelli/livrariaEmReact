import { useLocation } from "react-router-dom";
const LivroDescricao=()=>{
  const data=useLocation()
  const Livro=data.state
  console.log(Livro.Info)
  return <h1>Livro descricao</h1>
}
export default LivroDescricao;