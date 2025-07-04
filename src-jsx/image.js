import React from 'react';
import product from './product';

const Image = () => {
  return <img src={product.image} alt={product.name} style={{ maxWidth: '200px' }} />;
};

export default Image;
