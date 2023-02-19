import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { simNetReq } from "../utils/loader";
import { getFromLocal } from "../utils/storage";
import { useContext } from "react";
import { UserContext } from "../App";

const Signup = () => {
  const [fName, setfName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [, setUser] = useContext(UserContext);

  const btnRef = useRef();
  const formRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    btnRef.current.setAttribute("disabled", "true");
    setTimeout(() => {
      if (getFromLocal(fName)) {
        alert("You already have an account. Please Login!");
        navigate("/login");
      } else {
        setUser({ firstName: fName, userName, email });
        setIsLoading(false);
        btnRef.current.removeAttribute("disabled");
        navigate("/dashboard");
      }
    }, simNetReq() * 1000);
  };

  const handleSetfName = (e) => {
    setfName(e.target.value);
  };

  const handleSetUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="signup bg-gray-200 h-screen w-screen flex justify-center">
        <form
          ref={formRef}
          className="box bg-white rounded-md justiify-center items-center h-[490px] w-[300px] md:w-[450px] mt-20 flex flex-col"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-2xl font-semibold m-6">Sign up</h2>
          <label htmlFor="fname" className="block w-[80%] mx-auto mb-[6px]">
            <span>First name</span>
          </label>
          <input
            onChange={handleSetfName}
            type="text"
            className="bg-gray-200 focus:bg-slate-50 duration-300 transition-[background] w-[80%] mx-auto p-2 mb-3 rounded-sm"
            id="fname"
            value={fName}
          />
          <label htmlFor="username" className="block w-[80%] mx-auto mb-[6px]">
            <span>Username</span>
          </label>
          <input
            onChange={handleSetUserName}
            type="text"
            className="bg-gray-200 focus:bg-slate-50 duration-300 transition-[background] w-[80%] mx-auto p-2 mb-3 rounded-sm"
            id="username"
            value={userName}
          />
          <label htmlFor="email" className="block w-[80%] mx-auto mb-[6px]">
            <span>Email</span>
          </label>
          <input
            onChange={handleSetEmail}
            type="email"
            className="bg-gray-200 focus:bg-slate-50 duration-300 transition-[background] w-[80%] mx-auto p-2 mb-6 rounded-sm"
            id="email"
            value={email}
          />
          <button
            ref={btnRef}
            type="submit"
            className="bg-indigo-500 grid place-content-center disabled:bg-indigo-400 text-white w-[80%] rounded-sm mx-auto p-2 mb-4"
          >
            {isLoading ? <Loader /> : <span>Sign up</span>}
          </button>

          <Link
            to="/login"
            className="mx-auto flex justify-center mt-4 underline text-indigo-400"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
