const initialState=[{
    id:1,
    toDo:'comprar pan',
    done:false
}]


const toDoReducer =(state=initialState,action)=>{

    if(action?.type==='add'){
        return[...state,action.payload]
    }

    return state;
}

let toDo=toDoReducer();

const newToDo={
    id:2,
    toDo:'lavar platos',
    done:false
}

const action={
    type:'add',
    payload:newToDo
}

toDo=toDoReducer(toDo,action);

console.log(toDo);
