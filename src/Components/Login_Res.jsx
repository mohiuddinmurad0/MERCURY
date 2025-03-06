import React, { useContext, useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {  Eye, EyeOff } from "lucide-react";
import { AllContext } from "../Context/AllContext";
import { toast } from "react-toastify";
import axios from "axios";


const Login_Res = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const {backendUrl, token , setToken } = useContext(AllContext) ;
  const navigate = useNavigate();




  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password || (isRegister && !name)) {
      toast.error("All fields are required!");
      return;
    }
  
    try {
      const endpoint = isRegister
        ? `${backendUrl}/api/customer/register`
        : `${backendUrl}/api/customer/login`;
  
      const payload = isRegister ? { name, email, password } : { email, password };
  
      const { data } = await axios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });
  
      if (data.status) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success(isRegister ? "Registered Successfully!" : "Logged In Successfully!");
        props.setDemo(true);
        navigate("/dashboard");
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Network Error! Please try again.");
    }
  };
  


  

  useEffect(() => {
    if (token) navigate("/dashboard");
  }, [token, navigate]);




  return (


    <div className="flex justify-center items-center min-h-screen bg-[#E7E9F4] px-4">
      

      <div className="absolute top-6 left-6">
    {token ? (
    <Link to="/">
      <h2
        onClick={() => props.setDemo(true)}
        className="text-xl font-bold mb-6 cursor-pointer"
      >
        Mercury
      </h2>
    </Link>
  ) : (
    <h2
      onClick={() => props.setDemo(false)}
      className="text-xl font-bold mb-6 cursor-pointer"
    >
      Mercury
    </h2>
  )}
</div>


      <form
      
        onSubmit={handleFormSubmit}
        className={`bg-white p-10 rounded-2xl shadow-lg w-[470px] h-[400px] mx-4 transition-all ${
          isRegister ? "h-[490px]" : "h-[415px]"
        }`}
      >
        <h2 className="text-[19px] text-[#1e1e2a] font-bold mb-6">
          {isRegister ? "Register" : "Log In"}
        </h2>

        {isRegister && (
          <div className="mb-4">
            <label className="block text-[13px] text-[#535461] mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
        )}

        <div className="mb-4">
          <label
            className={`block text-[13px] text-[#535461] mb-1 font-semibold transition-colors ${
              isEmailFocused || email ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="mb-2">
          <label
            className={`block text-[13px] text-[#535461] mb-1 font-semibold transition-colors ${
              isPasswordFocused || password ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Password
          </label>
          <div className="relative flex items-center border border-gray-300 rounded-md focus-within:border-blue-400">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              className="w-full px-3 py-2 focus:outline-none"
            />
            <button
              type="button"
              className="flex items-center justify-center w-11 h-10 border-l border-gray-300 hover:bg-gray-100 transition-all"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} className="text-gray-500" />
              ) : (
                <Eye size={20} className="text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <a
          href="/for"
          className="text-[#70707d] text-[12px] hover:underline block"
        >
          Forgot password?
        </a>

        <button
          type="submit"
          className="mt-8 py-2.5 px-8 rounded-full font-semibold transition-all bg-[#CFD5F2] text-white hover:bg-[#bcc4e9]"
        >
          {isRegister ? "Register" : "Log In"}
        </button>

        <div className="mt-4 text-center">
          <p
            onClick={() => setIsRegister(!isRegister)}
            className="text-[#70707d] text-[14px] cursor-pointer p-4"
          >
            {isRegister
              ? "Already have an account? Log In"
              : "Don't have an account? Register"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login_Res;
