import React, { useState } from 'react';
import ProductCard from "./component/ProductCard";
import RatingWidget from "./component/RatingWidget"
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2, 
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8
  }
];



function App() {

  const [products, setProducts] = useState(initialProducts);

  const ratingClick = (productId, newRating) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        const totalRatingSum = product.avgRating * product.totalRatings;
        const newTotalRatings = product.totalRatings + 1;
        const newAvgRating = (totalRatingSum + newRating) / newTotalRatings;

        return {
          ...product,
          avgRating: newAvgRating.toFixed(1),
          totalRatings: newTotalRatings
        };
      }
      return product;
    });
     console.log(updatedProducts )
    setProducts(updatedProducts);
  };



  return (
    <div>
      {products.map(product => (
        <div>
          <ProductCard key={product.id} product={product} />
          <RatingWidget productId={product.id} ratingClick={ratingClick} />
        </div>
        
      ))}
    </div>
  );
}

export default App;
