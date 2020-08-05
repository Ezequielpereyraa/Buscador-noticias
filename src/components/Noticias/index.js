import React from 'react';
import PropTypes from 'prop-types';

const index = ({ noticias }) => {
  // Destructuracion de Articles
  const { description, title, urlToImage, source, url } = noticias;
  const imagen = urlToImage ? (
    <div className='card-image'>
      <img src={urlToImage} alt='Imagen Noticia' />
      <span className='card-title'>{source.name}</span>
    </div>
  ) : null;

  return (
    <div className='col s12 md8'>
      <div className='card'>
        {imagen}
        <div className='card-content'>
          <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
          <p>{description}</p>
        </div>
        <div className='card-action'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='waves-effect waves-ligth btn'>
            Ver Noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
};
index.propTypes = {
  noticias: PropTypes.object.isRequired,
};
export default index;
