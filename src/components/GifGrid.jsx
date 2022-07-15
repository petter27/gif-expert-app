import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

  // si un un hook useEffect las dependecias se dejan vacias solo se disparara una vez
  useEffect( () => {
    getGifs(category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <h3>{ category }</h3>
      <p>Hola Mundo</p>
    </>
  )
}
