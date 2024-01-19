import React from "react";
import { useState, useEffect } from "react";
import Display from "./Display";
import Carousel from "./Carousel";
function HomeSearch(props) {
  const [changeColor, setChangeColor] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterPrice, setFilterPrice] = useState(null);
  const [filterArray, setFilterArray] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [showAllImages,setShowAllImages]=useState([]);
  async function handleShowProducts(productName) {
    productName = productName.toLowerCase();
    if (!productName) {
      console.log("invalid input!");
      return;
    }

    try {
      var Url;
      if (productName == "shop-now") {
        Url = `https://dummyjson.com/products`;
      } else {
        Url = `https://dummyjson.com/products/category/${productName}`;
      }
      const res = await fetch(Url);
      if (!res.ok) {
        alert("Product not found");
        return;
      }
      const response = await res.json();
      if (response && response.products) {
        setAllProducts(response.products);
        setProducts(response.products);
      } else {
        console.log("No response");
      }
    } catch (error) {
      console.log("Error fetchinf product Data", error);
    }
  }

  function handleFilterProducts(price) {
    const filteredProducts = allProducts.filter(
      (product) => product.price <= price
    );
    if (!filteredProducts.length) {
      alert("no products found");
      return;
    }

    setProducts(filteredProducts);
  }

  useEffect(() => {
    handleShowProducts(props.searchProduct);
  }, [props.searchProduct]);

  useEffect(() => {
    if (isChecked) {
      handleFilterProducts(filterPrice);
    } else {
      handleShowProducts(props.searchProduct);
    }
  }, [isChecked, props.searchProduct]);

  useEffect(() => {
    const filterPriceArray = allProducts
      .map((product) => product.price)
      .sort((a, b) => a - b);

    setFilterArray([
      filterPriceArray[1],
      filterPriceArray[2],

      filterPriceArray[filterPriceArray.length - 1],
    ]);
  }, [allProducts]);
  return (
    <div className="ml-40 mr-40 flex flex-grow">
      <div className="basis-1/5 flex flex-col items-center">
        <div className="mt-20 text-xl font-semibold">Refine By</div>
        <div className="mt-16 gap-2 flex flex-col border-y-2 py-4">
          <div className="font-bold">Filter by price</div>

          {products.length > 0 &&
            filterArray.map((price) => (
              <div key={price} className="flex gap-2">
                <input
                  type="checkbox"
                  name="priceFilter"
                  id={`below${price}`}
                  value={price}
                  className="accent-black"
                  checked={isChecked && filterPrice === price}
                  onChange={() => {
                    setIsChecked(!isChecked);
                    if (!isChecked) {
                      setFilterPrice(price);
                    } else {
                      setFilterPrice(null);
                    }
                  }}
                />
                <label htmlFor={`below${price}`}>Below {price}</label>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="uppercase mt-16 text-3xl font-bold tracking-widest">
          {props.searchProduct}
        </div>

        <div className="flex justify-between w-full p-4 border-y-2 mt-4 bg-[#FFFFFF] mb-6">
          <span className="font-bold">Items Found : {products.length}</span>
          <span className="font-bold">Sort By</span>
        </div>
       
        <div className="flex  gap-20 justify-center  flex-wrap">
          {products.map((product, index) => {
            return (
              <Display
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
                allProduct={props.allProduct}
            setAllProduct={props.setAllProduct}
            totalAmount={props.totalAmount}
            setTotalAmount={props.setTotalAmount}
            showBag={props.showBag}
            setShowBag={props.setShowBag}
            allImages={product.images}
            
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
