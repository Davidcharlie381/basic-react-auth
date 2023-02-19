import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { simNetReq } from "../utils/loader";
import { getFromLocal } from "../utils/storage";
import { useContext } from "react";
import { UserContext } from "../App";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const btnRef = useRef();

  const handleSetUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    btnRef.current.setAttribute("disabled", "true");
    setTimeout(() => {
      let user = getFromLocal(userName);
      if (!user) {
        alert("User not found. Please sign up or use a registered account.");
        setUserName("");
        setEmail("");
      } else {
        let parsedUser = JSON.parse(user);
        setUser(parsedUser);
        navigate("/dashboard");
      }
      btnRef.current.removeAttribute("disabled");
      setIsLoading(false);
    }, simNetReq() * 1000);
  };

  return (
    <div className="login bg-gray-200 h-screen w-screen flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="box bg-white rounded-md justiify-center items-center h-[400px] w-[300px] md:w-[450px] mt-20 flex flex-col"
      >
        <h2 className="text-center text-2xl font-semibold m-6">Log in</h2>
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
          to="/signup"
          className="mx-auto flex justify-center mt-5 underline text-indigo-400"
        >
          Don't have an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
