import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.css';
import CarouselItem from './CarouselItem';
import Cursor from './Cursor';

const Carousel = () => {
  const [progress, setProgress] = useState(50);
  const [active, setActive] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const startX = useRef(0);
  const speedWheel = 0.02;
  const speedDrag = -0.1;
  const $items = useRef([]);

  // Calculate zIndex based on the active index
  const getZindex = useCallback(
    (array, index) => array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i))),
    []
  );

  // Display items with updated zIndex and active properties
  const displayItems = useCallback(
    (item, index, active) => {
      const zIndex = getZindex([...$items.current], active)[index];
      item.style.setProperty('--zIndex', zIndex);
      item.style.setProperty('--active', (index - active) / $items.current.length);
    },
    [getZindex]
  );

  // Animate items based on progress
  const animate = useCallback(() => {
    const newProgress = Math.max(0, Math.min(progress, 100));
    const newActive = Math.floor(newProgress / 100 * ($items.current.length - 1));
    setProgress(newProgress);
    setActive(newActive);
    $items.current.forEach((item, index) => displayItems(item, index, newActive));
  }, [progress, displayItems]);

  useEffect(() => {
    animate();
  }, [progress, animate]);

  const handleWheel = useCallback((e) => {
    const wheelProgress = e.deltaY * speedWheel;
    setProgress((prev) => prev + wheelProgress);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (e.type === 'mousemove') {
        document.querySelectorAll('.cursor').forEach(($cursor) => {
          $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
      if (!isDown) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const mouseProgress = (x - startX.current) * speedDrag;
      setProgress((prev) => prev + mouseProgress);
      startX.current = x;
    },
    [isDown]
  );

  const handleMouseDown = useCallback((e) => {
    setIsDown(true);
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDown(false);
  }, []);

  useEffect(() => {
    const element = document.querySelector('.carousel');
    if (element) {
      element.addEventListener('wheel', handleWheel);
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseup', handleMouseUp);
      element.addEventListener('touchstart', handleMouseDown);
      element.addEventListener('touchmove', handleMouseMove);
      element.addEventListener('touchend', handleMouseUp);

      return () => {
        element.removeEventListener('wheel', handleWheel);
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseup', handleMouseUp);
        element.removeEventListener('touchstart', handleMouseDown);
        element.removeEventListener('touchmove', handleMouseMove);
        element.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [handleWheel, handleMouseDown, handleMouseMove, handleMouseUp]);

  return (
    <div className="carousel">
      {Array.from({ length: 10 }).map((_, i) => (
        <CarouselItem
          key={i}
          ref={(el) => ($items.current[i] = el)}
          title={`Item ${i + 1}`}
          num={i + 1}
          imgSrc={`https://via.placeholder.com/300?text=Item+${i + 1}`}
        />
      ))}
      <Cursor />
    </div>
  );
};

export default Carousel;
