import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Demon Slayers','Black Clover', 'Hunter x Hunter', 'Dragon Ball']);

  return ( 
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <AddCategory setCategories={setCategories} />
      <ol>
        { categories.map(category => {
         return <li key={ category }>{ category }</li>;
        }) }
      </ol>
    </>
   );
}
 
export default GifExpertApp;