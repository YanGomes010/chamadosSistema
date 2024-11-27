import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesApp from "./Routes";
import AuthProvider from "./Contexts/auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
