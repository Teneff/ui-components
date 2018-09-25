import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Core/Image';
import Price from '../Core/Price';
import Rating from '../Rating';
import Button from '../Core/Button';

export function Link({ children, ...props }) {
  return <a {...props}>{children}</a>;
}

function Name({ value }) {
  return <span>{value}</span>;
}

Name.propTypes = {
  value: PropTypes.string.isRequired,
};

const style = {
  float: 'left',
  margin: '10px',
  maxWidth: '300px',
};

export default function Mini({
  image, name, link, price, rating,
}) {
  return (
    <div style={style}>
      <Link title={name} href={link}>
        <Image src={image} />
      </Link>
      {price && <Price value={price} />}
      <Link title={name} href={link}>
        <Name value={name} />
      </Link>
      {rating && <Rating {...rating} />}
      <div>
        <Link title={name} href={link}>
          <Button text="More Info" />
        </Link>
      </div>
    </div>
  );
}

Mini.defaultProps = {
  price: undefined,
  rating: undefined,
};

Mini.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  price: PropTypes.number,
  rating: PropTypes.shape({
    value: PropTypes.number.isRequired,
    total: PropTypes.number,
  }),
};
