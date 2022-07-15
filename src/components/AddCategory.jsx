import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue ] = useState('');

  const onInputChange = (event) => ( setInputValue(event.target.value) );

  const onSubmit = (event) =>{
    event.preventDefault();

    if(inputValue.trim().length <= 1 ){ return; }

    //setCategories( categories => [...categories, InputValue ]); // podemos usar un callback o pasar las categorias como props
    onNewCategory(inputValue.trim());

    // una vez insertado limpiamos el campo 
    setInputValue('');
  };

  return (
    <form onSubmit={ onSubmit } >
      <input
        type="text"
        placeholder="buscar gifs"
        value={ inputValue }
        onChange={ (event) => onInputChange(event) }
      />
    </form>
  )
}
