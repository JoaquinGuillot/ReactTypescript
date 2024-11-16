import { useState } from "react";

export const ComponentCounter = () => {
  
    const [counter, setCounter] = useState<number>(0);
   
    const handleIncrement = () => {
        setCounter(counter + 1);
        }

    const handleDecrement = () => {
        if(counter>0){
            setCounter(counter-1)
        }
    }

    return (
    <div>
        <h2>valor de counter: {counter}</h2>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>

    </div>
  )
}
