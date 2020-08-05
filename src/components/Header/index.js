import React from 'react';
import PropTypes from 'prop-types';

const index = ({ title }) => {
  return (
    <nav className='nav-wrapper blue-grey darken-4'>
      <a href='#!' className='brand-logo center'>
        {title}
      </a>
    </nav>
  );
};
index.propTypes = {
  title: PropTypes.string.isRequired,
};
export default index;
