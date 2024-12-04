import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesApp from "./Routes";
import AuthProvider from "./Contexts/auth";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000}/>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
