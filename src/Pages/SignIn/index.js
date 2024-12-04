import "./signin.css";
import logo from "../../Assets/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
    const {signIn, loadingAuth} = useContext(AuthContext)

    function HandleSignIn(e){
        e.preventDefault();

        if(senha !=='' && email!==''){
            signIn(email,senha);
        }
    }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="logo sistema" />
        </div>

        <form onSubmit={HandleSignIn}>
          <h1>Entrar</h1>
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
          <button type="submit">{loadingAuth ? "Carregando...":"Acessar"}</button>
        </form>

        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}
