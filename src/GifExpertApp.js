import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
 const [categorias, setCategorias] = useState(["one punch"]) ;
  return (
    <>
    <h2> GiftExpertApp </h2>
    <AddCategory setCategorias={ setCategorias } />
    <hr/>
    
    <ol>
      { 
        categorias.map( category => (
          <GifGrid 
            key = { category }
            category = { category }/>
        ))
      }
    </ol>
    </>
  )
};