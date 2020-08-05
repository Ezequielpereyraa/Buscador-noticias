import React from 'react';
import Noticias from '../Noticias';
import PropTypes from 'prop-types';

const index = ({ newNoticias }) => {
  return (
    <div className='grid'>
      {newNoticias.map((noticias) => (
        <Noticias key={noticias.url} noticias={noticias} />
      ))}
    </div>
  );
};

index.propTypes = {
  newNoticias: PropTypes.array.isRequired,
};
export default index;
