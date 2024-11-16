import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {

  const [state, setState] = useState(false);
  useEffect(()=>{
    console.log("Componente montado")
    return () =>{
      console.log("Componente desmontado")
    }
  },[])
  useEffect(()=>{
    console.log(state)  
  },[state])
  return (
    <div>
      ComponentUseEffect
      <p>{state ? "Es True" : "Es False"}</p>
      <button onClick={()=>
        setState(!state)
        }>
          CambiarState
          </button>

    </div>
  )
}
