import React, {useState} from  'react'
import img1 from '../../imagenes/cachorro1.jpg'
import img2 from '../../imagenes/cachorro2.jpeg'
import img3 from '../../imagenes/cachorro3.jpg'

const Cachorros = () => {

    const [imagen, setImagen] = useState ({ 
        imagen1 : null,
        imagen2: null,
        imagen3: null
    })
    
    const cargarImg1 = () => { 
        setImagen({...imagen, imagen1: img1})
    }
    const cargarImg2 = () => { 
        setImagen({...imagen, imagen2: img2})
    }
    const cargarImg3 = () => { 
        setImagen({...imagen, imagen3: img3}) 
    } 
  
  return (
    <div>
        
        <button onClick={() => cargarImg1()} className= "btn-1" >Imágen 1</button>
        <div> {imagen.imagen1} </div>
        <button onClick={() => cargarImg2()} className= "btn-2">Imágen 2</button>
        <div> {imagen.imagen2} </div>
        <button onClick={() => cargarImg3()} className= "btn-3">Imágen 3</button>
        <div> {imagen.imagen3} </div>

      
    </div>
  )
}

export default Cachorros
