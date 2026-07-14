
export const saveEmployees = (employees) => {
    localStorage.setItem("employees", JSON.stringify(employees))
}

export const getAllEmployees = () => {
    return JSON.parse(localStorage.getItem("employees")) || [];
}