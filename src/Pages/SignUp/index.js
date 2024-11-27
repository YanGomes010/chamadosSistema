import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png"
import { useState } from "react";


export default function SignIn() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
  
    function handleSubmit(e){
        e.preventDefault();

        if(nome!== '' && senha !=='' && email!==''){
            
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
            <button type="submit">Cadastrar</button>
          </form>
  
          <Link to="/">Já possui uma conta? Faça login.</Link>
        </div>
      </div>
    );
  }
  