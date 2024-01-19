import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import HomeFooter from "../components/HomeFooter";
import HomeSearch from "../components/HomeSearch";
import AllDisplay from "../components/AllDisplay";
function Dashboard() {
  const [searchProduct, setSearchProduct] = useState("");
  const [showHome, setShowHome] = useState(true);
  const [bagCount, setBagCount] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [addtobagId, setAddToBagId] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [totalAmount, setTotalAmount] = useState(null);
  const [showBag, setShowBag] = useState(false);
  useEffect(() => {
  if (
    location.state == null ||
    !location.state.userIsAuthenticated ||
    token !== location.state.token
  ) {
    navigate("/login"); 
  }
  if (location.state != null) {
    setUsername(location.state.username);
  }
}, [location, navigate]);

  return (
    <div className=" w-full h-full bg-grey-bg ">
      {/* <RouterProvider router={router} /> */}
      <Navbar
        username={username}
        setSearchProduct={setSearchProduct}
        setShowHome={setShowHome}
        showHome={showHome}
        setBagCount={setBagCount}
        bagCount={bagCount}
        addtobagId={addtobagId}
        setAddToBagId={setAddToBagId}
        allProduct={allProduct}
            setAllProduct={setAllProduct}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            showBag={showBag}
            setShowBag={setShowBag}
      />

      <div>
        
        {showHome ? (
          <Home
            setSearchProduct={setSearchProduct}
            setShowHome={setShowHome}
            showHome={showHome}
          />
        ) : (
          <HomeSearch
            searchProduct={searchProduct}
            setBagCount={setBagCount}
            bagCount={bagCount}
            addtobagId={addtobagId}
            setAddToBagId={setAddToBagId}
            allProduct={allProduct}
            setAllProduct={setAllProduct}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            showBag={showBag}
            setShowBag={setShowBag}

          />
        )}
        
      </div>

      <div className="p-10 flex  justify-center mt-36 flex-grow  border-t-2 ml-64 mr-64">
        <HomeFooter />
      </div>
    </div>
  );
}

export default Dashboard;
