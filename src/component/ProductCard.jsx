

import React from 'react';

function ProductCard({ product }) {
  const { name, description, image, avgRating, totalRatings } = product;

  return (
    <div>
      <img src={image} alt={name} width="300" height="200" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Rating: {avgRating} </p>
      <p>Total Ratings: {totalRatings}</p>
    </div>
  );
}

export default ProductCard;
