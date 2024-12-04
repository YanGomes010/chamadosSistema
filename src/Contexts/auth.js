import { useState, createContext, useEffect } from "react";
import { auth, db } from "../services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setloadingAuth] = useState(false);
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem("@tickets");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  //LOGAR USUARIO

  async function signIn(email, senha) {
    setloadingAuth(true);

    await signInWithEmailAndPassword(auth, email, senha)
      .then(async (value) => {
        let uid = value.user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        let data = {
          uid: uid,
          nome: docSnap.data().nome,
          email: value.user.email,
          avatarUrl: docSnap.data().avatarUrl,
        };

        setUser(data);
        storageUser(data);
        setloadingAuth(false);
        navigate("/dashboard");
        toast.success("Seja bem vindo ao sistema");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Verifique sua senha!");
        }
        setloadingAuth(false);
        toast.error("Ops... Algo deu erro!");
      });
  }

  //CADASTRAR USUARIO

  async function signUp(email, senha, nome) {
    setloadingAuth(true);
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(async (value) => {
        let uid = value.user.uid;

        await setDoc(doc(db, "users", uid), {
          nome: nome,
          avatarUrl: null,
        });

        let data = {
          uid: uid,
          nome: nome,
          email: value.user.email,
          avatarUrl: null,
        };

        setUser(data);
        storageUser(data);
        setloadingAuth(false);
        if (signUp) {
          navigate("/dashboard");
        }
        toast.success("Seja bem vindo ao sistema");
      })

      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Este email já está sendo utilizado");
          setloadingAuth(false);
          return;
        }
      });
  }

  function storageUser(data) {
    localStorage.setItem("@tickets", JSON.stringify(data));
  }

  async function logOut() {
    await signOut(auth);
    localStorage.removeItem("@tickets");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        loadingAuth,
        Loading,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
