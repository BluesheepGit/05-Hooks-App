import React from 'react';
import {useFetch} from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks=()=>{



    const {counter,increment,decrement} =useCounter(1);

    const {loading,data,error}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author,quote}=!!data &&data[0];


    return(
        <>
            <h1>Breaking Bad Quotes!!</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            loading....
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote ">
                            <p className="mb-8 ">{quote} </p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            {
                counter>1
                ?
                (
                    <button
                    className="btn btn-primary "
                    onClick={decrement}>
                        &lt;&lt;
                    </button>
                )
                :
                (
                    <button
                    className="btn btn-secondary " >
                        &lt;&lt;
                    </button>
                )
            }

        <button
        className="btn btn-primary "
        onClick={increment}>
            &gt;&gt;
        </button>


        </>
    )
}