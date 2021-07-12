import React from "react";
import PropTypes from 'prop-types';
import {TodoListItems} from "./TodoListItems";

export const TodoList=({toDos,handleDelete,handleToggle})=>{
    return (
        <div>
            <ul className="list-group list-group-flush">
                {
                    toDos.map((toDo,i)=>(
                        <TodoListItems
                            key={toDo.id}
                            toDo={toDo}
                            index={i}
                            handleToggle={handleToggle}
                            handleDelete={handleDelete}
                        />
                    ))

                }

            </ul>

        </div>
    )
}
TodoList.propTypes={
    toDos: PropTypes.array.isRequired,
    handleDelete:PropTypes.func.isRequired,
    handleToggle:PropTypes.func.isRequired
}
