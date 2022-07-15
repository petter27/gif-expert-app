import { useState,useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {


  const [images, setImages] = useState([])

  // si un un hook useEffect las dependecias se dejan vacias solo se disparara una vez
  useEffect( () => {
    getGifs(category)
    .then( newImages => setImages(newImages));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <h3>{ category }</h3>
      <ol>
        { images.map(item => (<li key={item.id}>{item.title}</li>))}
      </ol>
    </>
  )
}
