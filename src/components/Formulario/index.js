import React from 'react';
import styles from './index.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({ setCatForm }) => {
  const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'technology', label: 'Tecnologia' },
  ];

  // Custom hooks
  const [categorias, SelectNoticas] = useSelect('general', OPCIONES);

  // Funcion onSubmit
  const leerDatos = (e) => {
    e.preventDefault();
    setCatForm(categorias);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className='col s12 m8 offset-m2'>
        <form onSubmit={leerDatos}>
          <h2 className={styles.heading}>Encuentra Noticias por Categorias</h2>
          <SelectNoticas className={`${styles.select}`} />

          <div className='input-field col s12'>
            <input
              type='submit'
              value='Buscar'
              className={`${styles.btnBlock} btn-large blue-grey lighten-1`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
Formulario.propTypes = {
  setCatForm: PropTypes.func.isRequired,
};
export default Formulario;
