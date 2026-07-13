import { useState } from "react";
import { validateEmployee } from "../utils/validator";
function EmployeeForm() {
  const [error, setError] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
    joiningDate: "",
  });
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
    joiningDate: "",
  });
  const handleChange = (e) => {
    setEmployee((prevEmp) => ({
      ...prevEmp,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateEmployee(employee);
    setError(validationErrors);
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== "",
    );
    if (hasErrors) {
      return;
    }

    console.log(employee);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Employee Registration Form{" "}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter Your Name{" "}
          </label>
          {error.name && (
            <p className="text-red-500 text-sm mt-1">{error.name}</p>
          )}
          <input
            id="name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500  transition "
            type="text"
            value={employee.name}
            name="name"
            autoComplete="name"
            onChange={handleChange}
          />

          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter Your Email{" "}
          </label>
          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}
          <input
            id="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500  transition "
            type="email"
            value={employee.email}
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="department"
          >
            {error.department && (
              <p className="text-red-500 text-sm mt-1">{error.department}</p>
            )}
            Department
          </label>
          <select
            id="department"
            name="department"
            value={employee.department}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500  transition "
          >
            <option value="">Select Department</option>
            <option value="Engineering">Engineering</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
          </select>

          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {error.salary && (
              <p className="text-red-500 text-sm mt-1">{error.salary}</p>
            )}
            Salary
          </label>
          <input
            id="salary"
            name="salary"
            type="number"
            onChange={handleChange}
            value={employee.salary}
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500  transition "
          ></input>

          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Joining Date
          </label>

          {error.joiningDate && (
            <p className="text-red-500 text-sm mt-1">{error.joiningDate}</p>
          )}
          <input
            id="date"
            name="joiningDate"
            type="date"
            value={employee.joiningDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500  transition "
          ></input>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition duration-200 cursor-pointer"
            type="submit"
          >
            Create{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
