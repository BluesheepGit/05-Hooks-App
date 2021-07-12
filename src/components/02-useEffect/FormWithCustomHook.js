import React from "react";
import './effects.css';
import {useForm} from "../../hooks/useForm";


export const FormWithCustomHook=()=>{


    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        pass:''
    });

    const {name,email,pass}=formValues;

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(formValues);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1> Form with custom hook </h1>
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
            <div className="form-group">
                <input
                    type="password"
                    name="pass"
                    className="form-control"
                    placeholder="Escribe tu contraeña"
                    value={pass}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}