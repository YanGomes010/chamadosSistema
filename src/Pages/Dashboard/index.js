import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";

export default function Dashboard() {
  const { logOut } = useContext(AuthContext);

    async function HandleLogout(){
        await logOut();
    }

  return (
    <div>
      Dashboard
      <button onClick={HandleLogout}>Sair</button>
    </div>
  );
}
