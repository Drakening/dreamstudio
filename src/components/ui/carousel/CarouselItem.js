import React, { forwardRef } from 'react';

const CarouselItem = forwardRef(({ title, num, imgSrc }, ref) => {
  return (
    <div className="carousel-item" ref={ref}>
      <div className="carousel-box">
        <div className="title">{title}</div>
        <div className="num">{num}</div>
        <img src={imgSrc} alt={title} />
      </div>
    </div>
  );
});

export default CarouselItem;