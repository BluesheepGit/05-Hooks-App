import React, {useEffect,useState} from "react";
import './effects.css';
import {Message} from "./Message";

export const SimpleForm=()=>{


    const [formState, setState] = useState({
        name:'',
        email:''
    });

    const {name,email}=formState;

    useEffect(()=>{
       //console.log('hey!!');
   },[]);
    /* se manda como argumento de dependencias un arreglo vacio para que se ejecute una vez*/

    useEffect(()=>{
        //console.log('formState cambio');
    },[formState]);
    /*la gente de reaact recomienda crear un segundo efecto con dependencias
     en caso de que se requiera un efecto en un evento especifico*/

    useEffect(()=>{
        //console.log('email cambio');
    },[email]);

    const handleInputChange=({target})=>{

       setState({
           ...formState,
           [target.name]:target.value
       })
    }

    return(
        <>
            <h1> useEffect </h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Escribe tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Escribe tu e-mail"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {name && <Message/>}
        </>
    )
}