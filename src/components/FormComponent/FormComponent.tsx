
import { useForm } from "../../hooks/useForms";
export const FormComponent = () => {
  
  
    const {values,handleCange: handleChange, resetForm} = useForm({
        name:'',
        email:'',
        edad:0
    })

    const{email,name, edad}= values;
    const handleSubmitForm = () => {
        console.log(values);
    }
    const handleResetForm = () => {
        resetForm();
    }

    return (
    <div>
        <div>
        <h2>Formulario</h2>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
            <input value={email} name="email" onChange={handleChange} type="email" placeholder="example@example.com"/>
            <input value={name}  name="name" onChange={handleChange}type="text" placeholder="Nombre" />
            <input value={edad}  name="edad" onChange={handleChange}type="number" placeholder="Edad" />
        </div>
        <div>
            <button onClick={handleSubmitForm}>Enviar</button>
            <button onClick={handleResetForm}>Resetear</button>
        </div>
    </div>
  )
}
