import React from "react";

function HomeTab(props) {
  function handleClick() {
    props.setSearchProduct(props.title);
    props.setShowHome(!props.showHome);
  }
  return (
    <button className="bg-pink-e-600 flex flex-col shadow-xl items-center justify-center "  onClick={handleClick}>
      <img src={props.image} alt="" className=" w-52 h-52 object-cover object-center  m-1.5" />
      <button className=" flex flex-col  justify-center items-center    p-2 text-white hover:cursor-pointer rounded-b-md ">
        <span className="capitalize font-bold">{props.title}</span>
        <span className="text-2xl font-semibold text-grey-text-800">30-70 % OFF</span>
        <button
          className="text-xl font-bold hover:text-2xl  mb-2 hover:mb-0 "
         
        >
          Shop Now
        </button>
      </button>
    </button>
  );
}

export default HomeTab;
