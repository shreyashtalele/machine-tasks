const BASE_URL = 'http://localhost:8000/todos'

async function createTodo(todo) {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })

    if (!response.ok) {
        throw new Error("Failed to Create Todo")
    }

    const data = await response.json()
    return data;

}

async function getAllTodos() {

    const response = await fetch(BASE_URL, {
        method: "GET",
    })
    if (!response.ok) {
        throw new Error("Data not Found")
    }
    const data = await response.json()
    return data
}
export {
    createTodo,
    getAllTodos,

}