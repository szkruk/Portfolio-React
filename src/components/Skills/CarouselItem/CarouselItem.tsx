import React, { FC } from 'react';
import './Carousel.css';

interface CarouselItemProps {
  key: number;
  src: string;
  alt: string;
}

const CarouselItem: FC<CarouselItemProps> = (props): JSX.Element => {
  return (
    <div key={props.key}>
      <img src={props.src} alt={props.alt} className="logo-of-technology" />
    </div>
  );
};

export default CarouselItem;
