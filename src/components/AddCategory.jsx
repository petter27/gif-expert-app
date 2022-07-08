import { useState } from 'react';

export const AddCategory = ({ setCategories}) => {

  const [InputValue, setInputValue ] = useState('');

  const onInputChange = (event) => ( setInputValue(event.target.value) );

  const onSubmit = (event) =>{
    event.preventDefault();

    if(InputValue.trim().length <= 1 ){ return; }

    setCategories( categories => [...categories, InputValue ]); // podemos usar un callback o pasar las categorias como props

    // una vez insertado limpiamos el campo 
    setInputValue('');
  };

  return (
    <form onSubmit={ onSubmit } >
      <input
        type="text"
        placeholder="buscar gifs"
        value={ InputValue }
        onChange={ (event) => onInputChange(event) }
      />
    </form>
  )
}
