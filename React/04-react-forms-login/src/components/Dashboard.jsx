import React from "react";
import { useLocation } from "react-router-dom";
function Dashboard() {
  const location = useLocation();
  const email = location.state?.email;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div>
        <h1 className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          Welcome to the Dashboard !
        </h1>
      </div>
      <div>
        <h3>Email : {email}</h3>
      </div>
    </div>
  );
}

export default Dashboard;
