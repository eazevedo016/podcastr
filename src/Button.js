import { useState } from 'react'

export default function Button(props){

    const [contador,setContador] = useState(1);
    
    


    function increment() {
        setContador(contador + 1)
    }

    return (
        <>
            <span>{contador}</span>
            <button onClick={increment}>{props.children}</button>
        </>
    )

}