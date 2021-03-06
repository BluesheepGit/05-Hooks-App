import React from "react";
import {useForm} from "../../hooks/useForm";

export const TodoAdd=({handleAddTodo})=>{

    const [{description},handleInputChange,reset]= useForm({
        description: '',

    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (description.trim().length <1){
            return;
        }
        const newToDo={
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newToDo);
        reset();
    }


    return(
        <>
            <h4>Agregar Tarea</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder=" describir tarea...."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-3 md-block"
                    >
                        Aggregar
                    </button>
                </div>

            </form>
        </>
    )
}