import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/auth";


export default function SignIn() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
   


  const {signUp, loadingAuth} = useContext(AuthContext)

    async function handleSubmit(e){
        e.preventDefault();

        if(nome!== '' && senha !=='' && email!==''){
          await signUp(email, senha,nome)
          
        }else{
          alert("preencha todos os campos")
          return
        }
    }




    return (
      <div className="container-center">
        <div className="login">
          <div className="login-area">
            <img src={logo} alt="logo sistema" />
          </div>
  
          <form onSubmit={handleSubmit}>
            <h1>Nova conta</h1>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit">{loadingAuth? 'Carregando': 'Cadastrar'}</button>
          </form>
  
          <Link to="/">Já possui uma conta? Faça login.</Link>
        </div>
      </div>
    );
  }
  