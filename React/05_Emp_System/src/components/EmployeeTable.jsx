import React from "react";

function EmployeeTable({
  employees,
  deleteEmployee,
  editEmployee = { editEmployee },
}) {
  return (
    <div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Department
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Salary
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Joining Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr
                  key={employee.id}
                  className="hover:bg-gray-50 even:bg-gray-50"
                >
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {employee.name}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {employee.email}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {employee.department}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {employee.salary}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    {employee.joiningDate}
                  </td>
                  <td className="px-4 py-3 border-b text-sm text-gray-700">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md mr-2"
                      onClick={() => editEmployee(employee.id)}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
                      onClick={() => deleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;
