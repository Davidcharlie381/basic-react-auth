import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login bg-gray-200 h-screen w-screen flex justify-center">
      <form className="box bg-white rounded-md justiify-center items-center h-[400px] w-[300px] md:w-[450px] mt-20 flex flex-col">
        <h2 className="text-center text-2xl font-semibold m-6">Log in</h2>
        <label htmlFor="username" className="block w-[80%] mx-auto mb-[6px]">
          <span>Username</span>
        </label>
        <input
          type="text"
          className="bg-gray-200 focus:bg-slate-50 duration-300 transition-[background] w-[80%] mx-auto p-2 mb-3 rounded-sm"
          id="username"
        />
        <label htmlFor="email" className="block w-[80%] mx-auto mb-[6px]">
          <span>Email</span>
        </label>
        <input
          type="email"
          className="bg-gray-200 focus:bg-slate-50 duration-300 transition-[background] w-[80%] mx-auto p-2 mb-6 rounded-sm"
          id="email"
        />
        <input
          type="submit"
          value="Log in"
          className="bg-indigo-500 text-white w-[80%] rounded-sm mx-auto p-2 mb-4"
        />
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
