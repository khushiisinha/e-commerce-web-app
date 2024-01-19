import React from "react";
import bag from "../assets/bag2.png";
import { useState } from "react";
import AllDisplay from "./AllDisplay";
function Display(props) {
  const [showAllImages,setShowAllImages]=useState(false);

  async function fetchData(bagId) {
    if (bagId.length === 0) {
      props.setShowBag(false);
      return;
    }

    try {
      const promises = bagId.map(async (elem) => {
        const res = await fetch(`https://dummyjson.com/products/${elem}`);
        const response = await res.json();
        return response;
      });

      const products = await Promise.all(promises);
      
      props.setAllProduct([...products]);
      const newTotalAmount = products.reduce(
        (acc, product) => acc + product.price,
        0
      );
      props.setTotalAmount(newTotalAmount);

      props.setShowBag(true);
    } catch (error) {
      console.log("Error during fetch", error);
    }
  }

  async function handleAddToBag() {
    const newAddToBagId = [...props.addtobagId, props.productId];
    props.setAddToBagId(newAddToBagId);
    await fetchData(newAddToBagId);
  }
function handleQuickView(){

        setShowAllImages(true);       
}
function handleBack(){
  setShowAllImages(false)
}
  return (
    <div className=" flex flex-col  items-center justify-center w-60  ">
      <div className="relative w-56 h-56">
      { showAllImages && <div className="absolute top-0 bottom-0"> <AllDisplay allImages={props.allImages}/>
      <span className=" absolute bottom-1 bg-white left-1 p-1 text-sm border-2">
          {props.rating}⭐
        </span>
      <button className=" absolute bottom-1 bg-white right-1 p-2 text-sm border-2 opacity-65 font-bold" onClick={handleBack}>
          go to back
        </button></div>}
     {!showAllImages && <div className="relative  " 
      >
        <img
          src={props.productImage}
          alt=""
          className="w-56 h-56 object-cover "
        />
        <span className=" absolute bottom-1 bg-white left-1 p-1 text-sm border-2">
          {props.rating}⭐
        </span>
        <button className=" absolute bottom-1 bg-white right-1 p-2 text-sm border-2 opacity-65 font-bold" onClick={handleQuickView}>
          Quick View
        </button>
      </div>}
      </div>
      <div className="flex flex-col justify-center items-center w-full p-2">
       
        <div className="font-bold p-1 text-center mt-1">{props.brand}</div>
        <div className="p-2 text-center">{props.productName}</div>
        <div className="flex gap-2 font-bold">
          <span>₹{props.productPrice}</span>{" "}
          <span className="text-orange-400 font-bold">
            ({props.discount}% OFF){" "}
          </span>
        </div>
        <button
          className="bg-blue-e-500 m-2 text-lg font-bold p-2 flex items-center gap-2 w-full justify-center"
          onClick={handleAddToBag}
        >
          Add to Bag <img src={bag} alt="" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Display;
