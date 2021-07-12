import React from 'react';
import "./counter.css";
import {useCounter} from "../../hooks/useCounter";


export const CounterWCH = () => {

    const {state:valor,increment,decrement,reset}=useCounter(100);

    return (
        <>
            <h1>Counter with hook: {valor}</h1>
            <hr/>
            <button className="btn btn-primary" onClick={()=>increment(2)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>RESET</button>
            <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>
        </>
    );
};


