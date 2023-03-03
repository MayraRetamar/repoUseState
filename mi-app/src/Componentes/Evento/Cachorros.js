import React, {useState} from  'react'
import './cachorros.css'
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


    <div className='contenedorPrincipal'>
        
        <h2>Elegi una imágen</h2>
        
            <button onClick={() => cargarImg1()} className= "btn" >Imágen 1</button>
            <div>
                <img src= {imagen.imagen1} alt= "cachorro numero 1" className='img-tamaño' />
            </div>
            <button onClick={() => cargarImg2()} className= "btn">Imágen 2</button>
            <div> 
                <img src={imagen.imagen2} alt="cachorro numero 2" className='img-tamaño'/>
            </div>
            <button onClick={() => cargarImg3()} className= "btn">Imágen 3</button>
            <div> 
                <img src={imagen.imagen3} alt= "cachorro numero 3" className='img-tamaño'/>
            </div>

      
    </div>
  )
}

export default Cachorros
