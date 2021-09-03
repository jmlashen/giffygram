export const getUsers = () => {

    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

const loggedInUser = {
	id: 1,
	name: "Jacob Lesniack",
    email: "jakeyboy33@gmail.com"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}

export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
    .then (response => response.json())
    .then (parsedResponse => {
        return parsedResponse;
    })
}

