import React, { useState } from 'react';

const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  
  const handleAdd = () => {
    
    //let nombre = prompt('Agregar a la lista', '');

    setCategories([...categories, 'One Piece']);
    //setCategories( cates=> [...cates, nombre]); // tambien se puede usando un call back

  }

  return ( 
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <button onClick={ handleAdd }>Agregar</button>
      <ol>
        { categories.map(category => {
         return <li key={ category }>{ category }</li>;
        }) }
      </ol>
    </>
   );
}
 
export default GifExpertApp;