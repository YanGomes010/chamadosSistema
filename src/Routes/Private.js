import { useContext } from "react"
import { AuthContext } from "../Contexts/auth"
import { Navigate } from "react-router-dom"

export default function Private({children}){

    const {signed, Loading} = useContext(AuthContext)

    if(Loading){
        return(
            <div></div>
        )
    }

    if(!signed){
        return <Navigate to="/"/>
    }

    return children;
}