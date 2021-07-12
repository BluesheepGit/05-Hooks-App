import React, {useContext} from "react";
import {UserContext} from "./UserContext";

export const LoginScreen=()=>{

    const {setUser}=useContext(UserContext);

    const nO={
        id: 19,
        name: "Flonne"
    }

    return(
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
            className="btn btn-primary"
            onClick={()=>setUser(nO)}
            >
            LOGIN!!

            </button>
        </div>

    )
}