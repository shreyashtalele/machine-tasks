export function validateName(name) {
    if (name.trim() === "") {
        return "Name is required";
    }

    if (name.trim().length < 3) {
        return "Name must be at least 3 characters";
    }

    return "";
}

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        return "Email is required";
    }

    if (!emailRegex.test(email.trim())) {
        return "Please enter a valid email";
    }

    return "";
}

export function validateDepartment(department) {
    if (department === "") {
        return "Please select a department";
    }

    return "";
}

export function validateSalary(salary) {
    if (salary === "") {
        return "Salary is required";
    }

    if (Number(salary) <= 0) {
        return "Salary must be greater than 0";
    }

    return "";
}

export function validateJoiningDate(date) {
    if (!date) {
        return "Joining date is required";
    }

    const selectedDate = new Date(date);
    const today = new Date();


    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
        return "Joining date cannot be in the future";
    }

    return "";
}

export function validateEmployee(employee) {
    return {
        name: validateName(employee.name),
        email: validateEmail(employee.email),
        department: validateDepartment(employee.department),
        salary: validateSalary(employee.salary),
        joiningDate: validateJoiningDate(employee.joiningDate),
    };
}