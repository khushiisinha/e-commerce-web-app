import React from "react";
import empty from "../assets/cross.png"
function AllRecentSearches(props) {
  function handleClick() {
    const Products = [...props.recentSearches];
    Products.splice(props.key,1);
    props.setRecentSearches(Products);
  }
  return (
    <div
      className="bg-white text-black p-2 flex justify-between m-1 mb-2 border-b-2"
      
    >
      <span className="capitalize font-medium">{props.Product}</span> <span onClick={handleClick}><img src={empty} alt=""  className="w-5 h-5"/></span> 
    </div>
  );
}

export default AllRecentSearches;
