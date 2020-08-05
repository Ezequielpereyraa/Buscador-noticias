import React, { useState } from 'react';

const useSelect = (stateIncial, opciones) => {
  //Inicializa el state
  const [state, setState] = useState(stateIncial);
  // Lo que se muestra en la interfaz
  const SelectNoticias = () => (
    <select
      className='browser-default'
      value={state}
      onChange={(e) => setState(e.target.value)}>
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
