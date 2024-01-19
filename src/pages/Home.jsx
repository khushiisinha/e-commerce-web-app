import React from "react";

import HomeTab from "../components/HomeTab";
import { categories, categoryImage } from "../Data";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";
function Home(props) {
  
  return (
    <div className=" flex flex-col flex-grow">
      <Carousel setSearchProduct={props.setSearchProduct} showHome={props.showHome} setShowHome={props.setShowHome}/>
      <div className="flex flex-col w-full">
        
          <div className="text-3xl tracking-widest font-extrabold text-zinc-800 rounded-md p-2 ml-40 mt-12 mb-4">
            SHOP BY CATEGORY
          </div>
        
        <div className=" flex  gap-24 justify-center  flex-wrap p-6">
          {categories.map((elem,index)=>{
            return <HomeTab key={index} title={elem} image={categoryImage[index]} setSearchProduct={props.setSearchProduct} showHome={props.showHome} setShowHome={props.setShowHome}/>
          })}
        </div>
      </div>
      
    </div>
  );
}

export default Home;
