import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import smartphone from "../assets/Category/women-dress2.jpg";
import laptop from "../assets/Category/laptop1.jpg";
import fragrances from "../assets/Category/fragrances1.jpg";
import { homeimage ,imageTexts } from '../Data';

function Carousel  (props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    [smartphone],
    [laptop],
    [fragrances]
  ];
  
function handleClick(product){
 
    props.setSearchProduct(product);
    props.setShowHome(!props.showHome);
  
}
  return (
    <div className='flex justify-center items-center mt-6 mb-12'>
      <div className="w-2/5 relative">
        <Slider {...settings} className="w-full h-full">
          {homeimage.map((image, index) => (
            <div key={index} className="relative flex">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover rounded-lg w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center  ">
                <button className="text-black text-3xl font-bold z-20 uppercase bg-white opacity-60 w-full text-center p-2 hover:text-4xl h-16 flex items-center justify-center cursor-pointer" onClick={()=>{
                  handleClick(imageTexts[index])
                }}>{imageTexts[index]}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
