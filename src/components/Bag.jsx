import React, { useEffect, useState } from "react";
import BagDisplay from "./BagDisplay";
function Bag(props) {
  return (
    <div>
      {props.showBag && (
        <div className="bg-white w-full p-2 flex flex-col justify-center items-center mt-1 border">
          {props.allProduct.map((product, index) => {
            return (
              <BagDisplay
              index={index}
                productId={product.id}
                productName={product.title}
                productImage={product.thumbnail}
                productPrice={product.price}
                brand={product.brand}
                discount={product.discountPercentage}
                rating={product.rating}
                bagCount={props.bagCount}
                setBagCount={props.setBagCount}
                addtobagId={props.addtobagId}
                setAddToBagId={props.setAddToBagId}
              />
            );
          })}
          <div className="flex gap-2 justify-between w-full p-2">
            <span className="font-semibold text-lg font-sans">Total Amount :</span>
            <span className="font-bold text-lg font-sans">₹ {props.totalAmount}</span>
          </div> 
          <div className="w-full p-2 bg-orange-400 font-bold text-xl text-center mt-3 font-mono text-white">Place Order

          </div>
        </div>
      )}
      {!props.showBag && <div className="text-center border p-2 bg-white mt-2 font-bold">Empty Bag !</div>}
    </div>
  );
}

export default Bag;
