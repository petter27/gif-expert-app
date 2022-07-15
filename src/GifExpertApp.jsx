import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Demon Slayers','Black Clover', 'Hunter x Hunter', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
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
      <ol>
        { categories.map(category => {
         return <li key={ category }>{ category }</li>;
        }) }
      </ol>
    </>
   );
}
 
export default GifExpertApp;