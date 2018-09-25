import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text }) {
  return (
    <button
      type="button"
      className="btn btn-primary btn-default  more-info-btn chevron"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
