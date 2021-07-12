import React,{useEffect,useState} from "react";


export const Message=()=>{

    const [cordenadas, setCordenadas] = useState({x:0,y:0});
    const {x,y}=cordenadas;


    useEffect(() => {
            //cuerpo del efecto

        const mouseMove =(e)=>{

                const cordenadas={x:e.x,y:e.y}
                setCordenadas(cordenadas);
        }


        window.addEventListener('mousemove',mouseMove);

        return () => {
            //cleanUp del efecto
            window.removeEventListener("mousemove",mouseMove );
        }
    }, []);//dependencias
    
    
    return(
        <>

            <h3> UwU </h3>
            <p>
                x :{ x }  y :{ y }
            </p>
        </>
    )
    
}