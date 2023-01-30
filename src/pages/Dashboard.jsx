import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { saveToLocal } from "../utils/storage";

const Dashboard = ({ user, setUser }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  const navigate = useNavigate();

  useEffect(() => {
    saveToLocal(user);
  }, [user]);

  const handleClick = () => {
    setUser();
    navigate("/login");
  };

  return (
    <div className=" bg-gray-200 h-screen">
      <div className="dashboard mx-auto w-[88%] md:max-w-[60em]">
        <div className="flex pt-5 items-center justify-between">
          <h2 className="text-lg font-semibold">AnyApp</h2>
          <button
            onClick={handleClick}
            className="bg-indigo-500 p-3 px-7 text-white rounded-md"
          >
            Log out
          </button>
        </div>
        <h1 className="mt-8 text-3xl font-semibold">
          Hello, {user?.firstName}
        </h1>
        <p className="text-gray-600 mt-2 mb-10">Below are your details.</p>
        <div className="user-details bg-white p-6 rounded-md">
          <div className="details font-semibold  ">First Name</div>
          <span className="block mb-5 text-lg text-gray-600">
            {user?.firstName}
          </span>
          <div className="details font-semibold ">Username</div>
          <span className="block mb-5 text-lg text-gray-600">
            {user?.userName}
          </span>
          <div className="details font-semibold  ">Email</div>
          <span className="block text-lg text-gray-600">{user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
