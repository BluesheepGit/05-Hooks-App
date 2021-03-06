import React, {useMemo, useState} from 'react';
import {useCounter} from "../../hooks/useCounter";
import {procesopesado} from "../../helpers/procesoPesado";

import '../02-useEffect/effects.css'


export const MemoHook=()=>{

    const {counter,increment}=useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesopesado(counter), {counter});


    return(
        <>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small>  </h3>
            <hr/>
            <p>{memoProcesoPesado}</p>
            <button className="btn btn-primary"
                    onClick={increment}
            >
                +1
            </button>

            <button className="btn btn-outline-primmary ml-3"
                    onClick={()=>{
                        setShow(!show)
                    }}
            >
                Show /hide {JSON.stringify(show)}
            </button>
        </>
    )
}