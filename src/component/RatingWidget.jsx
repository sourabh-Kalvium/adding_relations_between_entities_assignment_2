import React, { useState } from 'react';

const RatingWidget = ({productId,ratingClick}) => {
  const [rating, setRating] = useState(0);

  const ratingUpdate=(val)=>{
    setRating(val)
    ratingClick(productId,val)
  }

  return (
    <div className='ratingdiv'>
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={star <= rating ? 'ratingclicked' : 'rating'}
          onClick={()=>ratingUpdate(star)}
        >
        </div>
      ))}
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default RatingWidget;
