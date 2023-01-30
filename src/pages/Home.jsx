import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col pt-24 items-center">
      {/* <Loader /> */}
      <h1 className="text-center text-3xl font-semibold pt-12">
        Welcome to AnyApp
      </h1>
      <div className="mx-auto mt-10 gap-3 flex justify-center items-center">
        <Link
          to="login"
          className="bg-indigo-500 p-3 px-7 text-white rounded-sm"
        >
          Login
        </Link>{" "}
        or{" "}
        <Link
          to="signup"
          className="bg-indigo-500 p-3 px-6 text-white rounded-sm"
        >
          Sign up
        </Link>
      </div>
      <Link to="dashboard" className="mx-auto flex justify-center mt-12 underline text-indigo-400">Go to my dashboard</Link>
    </div>
  );
};

export default Home;
