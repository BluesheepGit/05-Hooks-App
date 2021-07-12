import React, {useEffect, useReducer} from "react";
import {toDoReducer} from './toDoReducer'
import {TodoList} from "./TodoList";
import {TodoAdd} from "./TodoAdd";

import './toDo.css'




const init=()=>{

    return JSON.parse(localStorage.getItem('toDos')) || [];



    // return[{
    //     id:new Date().getTime(),
    //     desc: 'aprender react',
    //     done: false
    // }];
}


export const ToDoApp=()=>{


    const [toDos,dispatch] = useReducer(toDoReducer,[],init );


    useEffect(() => {
        localStorage.setItem("toDos",JSON.stringify(toDos))
    }, [toDos]);


    const handleDelete=(todoId)=>{


        const action={
            type:'delete',
            payload: todoId
        };
        dispatch(action);
    }

    const handleToggle=(todoId)=>{

        dispatch({
            type:'toggle',
            payload:todoId

        })
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type:'add',
            payload: newTodo
        });
    }
    return (
        <>
            <h1>Todo App  ({ toDos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">

                    <TodoList
                        toDos={toDos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>

                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />

                </div>


            </div>

        </>
    )
}