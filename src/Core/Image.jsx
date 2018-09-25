import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, alt }) {
  return (
    <picture>
      <img itemProp="image" className="primary-image" src={src} alt={alt} />
    </picture>
  );
}

Image.defaultProps = {
  alt: '',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
