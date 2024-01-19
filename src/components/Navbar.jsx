import React, { useState } from "react";
import searchImg from "../assets/search4.svg";
import user from "../assets/user.svg";
import cart from "../assets/bag.png";
import logout from "../assets/power.png";
import { navbarTab } from "../Data";
import NavbarTabs from "./NavbarTabs";
import { useNavigate } from "react-router-dom";
import AllRecentSearches from "./AllRecentSearches";
import { Link } from "react-router-dom";
import Bag from "./Bag";
function Navbar(props) {
  const [showProfile, setShowProfile] = useState(false);
  const [bag, setBag] = useState(false);
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const navigate = useNavigate();
  const [showRecentTab, setShowRecentTab] = useState(false);
  function handleRefresh() {
    props.setShowHome(true);
    navigate("/dashboard", {
      state: {
        userIsAuthenticated: true,
        username: props.username,
        token: localStorage.getItem("token"),
      },
    });
  }
  function handleLogout() {
    localStorage.removeItem("token");

    navigate("/login");
  }
  return (
    <div className=" z-10 sticky top-0  shadow-md h-20 md:w-full flex md:items-center justify-around md:pl-2 md:pr-2 bg-blue-e-500">
      <button
        className="  border-2 border-white 
       rounded-lg rounded-r-full text-orange-400 bg-white  flex flex-col md:flex-row p-1 md:p-2  text-xs md:text-lg font-bold  tracking-widest"
        onClick={handleRefresh}
      >
        <span>Shop</span><span>Ease</span>
      </button>

      <div className=" pl-5 pr-5 md:flex gap-6  h-full  hidden">
        {navbarTab.map((elem, index) => {
          return (
            <NavbarTabs
              title={elem}
              setSearchProduct={props.setSearchProduct}
              setShowHome={props.setShowHome}
              showHome={props.showHome}
            />
          );
        })}
      </div>
      <div className=" absolute top-9 left-4  md:static flex justify-center items-center bg-white  md:w-1/3 rounded-md">
        <img src={searchImg} alt="" className="h-9 w-9 p-2 ml-1 " />
        <input
          type="text"
          className={`outline-none bg-white w-full md:p-3 p-1 rounded-md ${
            showRecentTab ? "highlight-input" : ""
          }`}
          placeholder="Search for Product, brands and more"
          required
          value={search}
          onChange={(e) => {
            const inputValue = e.target.value;
            setSearch(inputValue);

            if (!inputValue.length) {
              setShowRecentTab(false);
            } else {
              setShowRecentTab(true);
            }
          }}
        />
        {recentSearches.length > 0 && showRecentTab && (
          <span className=" absolute top-16 right-50   p-1 w-1/3 gap-4 bg-white mt-2 ">
            {recentSearches.map((elem, index) => (
              <AllRecentSearches
                Product={elem}
                setRecentSearches={setRecentSearches}
                recentSearches={recentSearches}
                key={index}
              />
            ))}
          </span>
        )}
        <button
          className="text-white font-bold  md:py-3 md:px-2 bg-orange-400 tracking-wider rounded-l-full"
          onClick={() => {
            props.setSearchProduct(search);
            setShowRecentTab(false);
            if (!recentSearches.includes(search)) {
              setRecentSearches([...recentSearches, search]);
            }

            if (search) {
              props.setShowHome(false);
            }
            setSearch("");
          }}
        >
          Search
        </button>
      </div>
      <div className="flex gap-6 h-full pl-2">
        <div
          className="md:flex hidden justify-center items-center cursor-pointer gap-2 h-full hover:border-b-4 hover:border-orange-400 border-b-4 border-blue-e-500"
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          <img src={user} className=" w-5 h-5 bg-orange-400 rounded-full" />
          <span className=" text-lg  font-bold ">Profile</span>
          {showProfile && (
            <div className=" absolute top-24 right-20  z-2 bg-white shadow-lg drop-shadow-lg p-4 flex flex-col gap-3 border-2 border-orange-400 rounded-lg">
              <span className="font-bold text-gray-600 ">
                Hello ! {props.username}
              </span>
              <div className="w-full border-2 border-orange-400"></div>
              <button
                className="flex  text-gray-600 hover:font-bold "
                onClick={handleLogout}
              >
                Edit Profile
              </button>
              <button
                className="flex  text-gray-600 hover:font-bold "
                onClick={handleLogout}
              >
                LOGOUT <img src={logout} alt="" className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

        <div
          className="  flex flex-col md:flex-row justify-center items-center  cursor-pointer h-full md:gap-2 hover:border-b-4 hover:border-orange-400 border-b-4 border-blue-e-500"
          onClick={() => {
            // handleShowBagPage(props.addtobagId);
            setBag(!bag);
          }}
        >
          <img src={cart} className="w-5 h-5" />
          <span className=" text-lg  font-bold">Bag</span>

          {props.addtobagId.length > 0 && (
            <div className=" rounded-full absolute top-2 right-12 bg-red-600 opacity-70 px-3 py-0.5 text-center">
              <span className="text-white "> {props.addtobagId.length}</span>
            </div>
          )}

          {bag && (
            <div
              className="absolute top-20 right-0
             w-80"
            >
              <Bag
                allProduct={props.allProduct}
                showBag={props.showBag}
                totalAmount={props.totalAmount}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
