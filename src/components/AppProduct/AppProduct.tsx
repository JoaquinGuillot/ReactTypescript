import { useState } from "react"
import { FormProduct } from "./FormProducts/FormProduct"
import { Header } from "./Header/header"
import { ListProducts } from "./ListProducts/ListProducts";


interface ItemProduct{
    precio: number,
    imagen: string,
    nombre: string;
}

export const AppProduct = () => {

    const [products,setProducts]= useState<ItemProduct[]>([])
    console.log(products)
    const handleAddProduct = (newItem: ItemProduct) =>{
        setProducts((prev)=> [...prev,newItem])
    }
  return (
    <div>
        <Header/>
        <h2 className="text-center">Formulario</h2>
        <h2 className="text-center">Productos</h2>
        <FormProduct handleAddProduct={handleAddProduct}/>

        {
            products.length > 0 ? 
            (<ListProducts arrItems={products} />) : 
            <h3 className="text-center">No hay productos</h3>
        }
    </div>
  )
}
