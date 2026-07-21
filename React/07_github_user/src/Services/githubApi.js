const BASE_URL = `https://api.github.com/users`
export async function fetchUser(username) {
    const response = await fetch(`${BASE_URL}/${username}`)
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("No GitHub user found.");
        }
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}

export async function fetchRepositories(username) {
    const response = await fetch(`${BASE_URL}/${username}/repos`)
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("No repositories found.")
        }
        throw new Error("Something went wrong")
    }
    const data = await response.json()
    return data
}