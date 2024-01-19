import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function AllDisplay  (props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className="w-56 h-56 relative">
        <Slider {...settings} className="w-full h-full">
          {props.allImages.map((image, index) => (
            <div key={index} className="relative flex">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover rounded-lg w-56 h-56 "
              />
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AllDisplay;
