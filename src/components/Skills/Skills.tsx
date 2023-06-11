import React from 'react';
import './Skills.css';
import data from './carousel.json';
import CarouselItem from './CarouselItem/CarouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Skills = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 1200,
    autoplay: true
  };

  return (
    <section id="skills">
      <h1 className="heading-of-section">SKILLS</h1>
      <Slider {...settings} className="slider">
        {data.map((skill, index) => (
          <CarouselItem alt={skill.name} src={skill.src} key={index} />
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
