import React from 'react';
import PropTypes from 'prop-types';

function Total({ value }) {
  return (
    <React.Fragment>
      <span className="parentheses">(</span>
      <span className="reviews__text">{value}</span>
      <span className="parentheses">)</span>
    </React.Fragment>
  );
}

Total.defaultProps = {
  value: 0,
};

Total.propTypes = {
  value: PropTypes.number,
};

function Star({ active }) {
  const style = {
    div: {
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'middle',
      paddingLeft: '1px',
      paddingRight: '1px',
    },
    svg: {
      width: '16px',
      height: '16px',
      transition: 'transform 0.2s ease-in-out 0s',
    },
  };
  return (
    <div className="star-container" style={style.div}>
      <svg viewBox="0 0 16 16" className="widget-svg" style={style.svg}>
        {active ? (
          <path
            className="star"
            d="M8 0l2.473 5.009L16 5.812l-4 3.899.945 5.506L8 12.617l-4.944 2.6L4 9.71 0 5.812l5.528-.803z"
          />
        ) : (
          <React.Fragment>
            <path
              d="m8,2.126l-1.847,3.744l-4.13,0.6l2.989,2.913l-0.706,4.114l3.694,-1.943l3.695,1.942l-0.706,-4.114l2.988,-2.913l-4.13,-0.6l-1.847,-3.743zm0,-2.126l2.473,5.009l5.527,0.803l-4,3.899l0.945,5.506l-4.945,-2.6l-4.944,2.6l0.944,-5.507l-4,-3.898l5.528,-0.803l2.472,-5.009z"
              fill="#b9b9b9"
            />
            <path
              className="star"
              d="M8 0l2.473 5.009L16 5.812l-4 3.899.945 5.506L8 12.617l-4.944 2.6L4 9.71 0 5.812l5.528-.803z"
            />
          </React.Fragment>
        )}
      </svg>
    </div>
  );
}

Star.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default function Rating({ value, total, count }) {
  return (
    <div className="product-mini__rating">
      <div className="rating-grid ratings_align-left">
        <div className="stars-container">
          {new Array(count).fill().map((i, key) => (
            <Star active={value * count >= key + 1} />
          ))}
        </div>
        <Total value={total} />
      </div>
    </div>
  );
}

Rating.defaultProps = {
  count: 5,
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  count: PropTypes.number,
};
