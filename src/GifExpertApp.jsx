import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Demon Slayers','Black Clover', 'Hunter x Hunter', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    // includes verifica si un valor ya existe en el arreglo 
    if ( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ]);
  }

  return ( 
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <AddCategory 
        //setCategories={setCategories} 
        onNewCategory={ event => onAddCategory(event) }
      />
      { categories.map(category => (
        <GifGrid 
          key={ category } 
          category={ category } 
        />
        )
      )}
    </>
   );
}
 
export default GifExpertApp;