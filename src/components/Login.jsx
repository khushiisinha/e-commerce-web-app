import { React, useState } from "react";
import Loginicon from "../assets/user.svg";
import user from "../assets/user (1).png";
import key from "../assets/key.png";
import show from "../assets/show1.png";
import hide from "../assets/hide1.png";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleLogin() {
    if (!username || !password) {
      setError("All fields are mandatory");
      return;
    }
      
    try {
      const Response = await fetch(`https://dummyjson.com/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (Response.ok) {
        const data = await Response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        navigate("/dashboard", {
          state: {
            userIsAuthenticated: true,
            username: username,
            token: token,
          },
        });
      } else {
        const data = await Response.json();
        setError(data.message || "Login-Failed");
        console.log(error);
        
      }
    } catch {
      console.log("Error during fetch", error);
    }
  }
  return (
    <div className="md:w-full md:h-full ">
        <div className=" absolute top-2 left-2 border-2 border-white rounded-lg rounded-r-full text-orange-400 bg-white  p-4   text-3xl font-bold  tracking-widest">
          ShopEase
        </div>
      <div className="  px-12  rounded  flex flex-col justify-around items-center gap-7 md:w-1/2 md:h-full ">

        <div className="flex flex-col justify-center items-center gap-2">
          <img src={Loginicon} alt="" className="h-14 w-14  " />
          <span className=" text-4xl font-bold text-white tracking-wider ">
            WELCOME !!
          </span>
        </div>

        <div className="flex w-full bg-yellow-50 justify-center items-center">
          <img src={user} alt="" className="w-10 h-10 p-2" />
          <input
            type="text"
            className="p-4 bg-yellow-50 w-full outline-none  text-lg"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />
        </div>

        <div className="flex w-full bg-yellow-50 justify-center items-center">
          <img src={key} alt="" className="w-10 h-10 p-2" />
          <input
            type={showPassword ? "text" : "password"}
            className="p-4 bg-yellow-50 w-full outline-none  text-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          <button
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="flex justify-center items-center p-2"
          >
            {showPassword && <img src={show} alt="" className="h-6 w-8" />}
            {!showPassword && <img src={hide} alt="" className="h-6 w-8" />}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-full mb-8 gap-3">
          {error && (
            <div className="p-1 px-2  text-red-600 font-bold">{error}</div>
          )}
          <button
            className="p-2 w-32 text-white bg-orange-600 hover:bg-orange-100 font-semibold text-xl  rounded-lg hover:text-orange-400 "
            onClick={handleLogin}
          >
            LOGIN
          </button>
        </div>
      </div>
      {/* <div className="flex justify-center text-xl p-1 px-2 gap-1 text-amber-500 bg-white mt-2">
            <span>Don't have a account ?  </span> <button className='font-bold hover:text-amber-700 hover:underline' onClick={()=>{props.isLogin(false)
            props.isSignup(true)}}>Signup</button>
          </div> */}
    </div>
  );
}

export default Login;
