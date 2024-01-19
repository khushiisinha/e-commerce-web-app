import { React , useState} from 'react'
import Loginicon from "../assets/user.svg";
import user from "../assets/user (1).png"
import key from "../assets/key.png"
import show from "../assets/show1.png"
import hide from "../assets/hide1.png"

function Signup(props) {
    const [showPassword,setShowPassword]=useState(false);
  return (
    <div className='w-full h-full'>
    <div className="  px-12  rounded  flex flex-col justify-center items-center gap-5 w-1/2">
    <div className='border-2 border-white rounded-xl text-orange-400 bg-white  p-2 h-fit w-full text-center text-3xl font-bold  tracking-widest'>ShopEase</div>
      
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={Loginicon} alt=""  className="h-14 w-14  " />{" "}
        <span className=" text-3xl font-bold text-white tracking-wider underline">Welcome!!</span>
      </div>

      <div className="flex w-full bg-yellow-50 justify-center items-center">
        <img src={user} alt="" className="w-10 h-10 p-1" />
        <input
          type="text"
          className="p-2 px-2 bg-yellow-50 w-full outline-none  text-lg"
          placeholder="Username"
        />
      </div>
      <div className="flex w-full bg-yellow-50 justify-center items-center">
        <img src={user} alt="" className="w-10 h-10 p-1" />
        <input
          type="text"
          className="p-2 px-2 bg-yellow-50 w-full outline-none  text-lg"
          placeholder="Username"
        />
      </div>

      <div className="flex w-full bg-yellow-50 justify-center items-center">
        <img src={key} alt="" className="w-10 h-10 p-1" />
        <input
          type={showPassword? "text" : "password"} 
          className="p-2 px-2 bg-yellow-50 w-full outline-none  text-lg"
          placeholder="Password"
        />
         <button onClick={()=> {setShowPassword(!showPassword)}} className="flex justify-center items-center p-2">
            {showPassword && <img src={show} alt="" className="h-6 w-8"/>}
            {!showPassword && <img src={hide} alt="" className="h-6 w-8"/>}
        </button> 
       
      </div>
      
       <button className="p-2 w-32 text-white bg-orange-600 hover:bg-orange-100 font-semibold text-xl  rounded-2xl hover:text-orange-400 mb-2">SIGN UP</button>
       
    </div>
    <div className="flex justify-center text-xl p-1 px-2 gap-1 text-amber-500 bg-white mt-2">
            <span>Already have a account !</span> <button className='font-bold hover:text-amber-700 hover:underline' onClick={()=>{props.isLogin(true)
            props.isSignup(false)}}>Login</button>
          </div>
    </div>
  )
}

export default Signup