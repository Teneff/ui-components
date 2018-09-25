import React from 'react';
import PropTypes from 'prop-types';

export default function Price({ value }) {
  return (
    <div className="product-mini__row flex-grid flex-grid--stretch">
      <div className="product-mini__price prices-align-left">
        <div className="product__price product__price-medium">
          <div className="product__price-row">
            <span className="product__price-value">{`£${value}`}</span>
          </div>
        </div>
      </div>
      <div className="product-mini__sfl">
        <div className="save-for-later sfl-product-mini">
          <span className="icon hover-sfl sfl-default sfl-heart-grey" />
          <span className="icon status-sfl sfl-default sfl-blank" />
        </div>
      </div>
    </div>
  );
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
};
