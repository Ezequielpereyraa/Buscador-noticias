import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

const App = () => {
  //Definir la categoria
  const [catForm, setCatForm] = useState('');
  const [newNoticias, setNewNoticias] = useState([]);
  //Ejecutar la primera vez
  useEffect(() => {
    const consultaApi = async () => {
      const api_key = '3b77cdb5f85f47b7b02a570e8c923514';
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${catForm}&apiKey=${api_key}`;
      const noticiasFetch = await fetch(url);
      const datosNoticias = await noticiasFetch.json();
      setNewNoticias(datosNoticias.articles);
    };
    consultaApi();
  }, [catForm]);

  return (
    <>
      <Header title='Noticias' />
      <div className='container '>
        <Formulario setCatForm={setCatForm} />
        <ListadoNoticias newNoticias={newNoticias} />
      </div>
    </>
  );
};

export default App;
