import React, { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeSearch from "../components/EmployeeSearch";
import { saveEmployees, getAllEmployees } from "../utils/localstorage";

function EmployeeManagement() {
  const initialEmployee = {
    name: "",
    email: "",
    department: "",
    salary: "",
    joiningDate: "",
  };
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(initialEmployee);
  const [editingID, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id),
    );
  };

  const editEmployee = (id) => {
    const employeeToEdit = employees.find((employee) => employee.id === id);

    if (!employeeToEdit) return;

    setEmployee(employeeToEdit);
    setEditingId(employeeToEdit.id);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return employee;
      }),
    );
  };

  const filteredEmployee = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    saveEmployees(employees);
  }, [employees]);

  useEffect(() => {
    const savedEmployees = getAllEmployees();
    setEmployees(savedEmployees);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <EmployeeForm
          employee={employee}
          setEmployee={setEmployee}
          addEmployee={addEmployee}
          initialEmployee={initialEmployee}
          eidtingID={editingID}
          setEditingId={setEditingId}
          updateEmployee={updateEmployee}
        />
        <EmployeeSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <EmployeeTable
          employees={employees}
          deleteEmployee={deleteEmployee}
          editEmployee={editEmployee}
        />
      </div>
    </div>
  );
}

export default EmployeeManagement;
