// export const getUsers = () => {

//     return fetch("http://localhost:8088/users")
//         .then(response => response.json())
//         .then(parsedResponse => {
//             // do something with response here
//             return parsedResponse;
//         })
// }

export const createPost = postObj => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
  }
  

const loggedInUser = {
    id: 1,
    name: "Jacob Lesniack",
    email: "jakeyboy33@gmail.com"
}

export const getLoggedInUser = () => {
    return loggedInUser;
}

export const getUsers = () => {
    return fetch("http://localhost:8088/users")
        .then(response => response.json())

}
// export const getPosts = () => {
//     return fetch("http://localhost:8088/posts")
//         .then(response => response.json())
// }

let postCollection = [];
// place holder for the data
export const usePostCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...postCollection];
}
export const getPosts = () => {
  return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
      postCollection = parsedResponse
      return parsedResponse;
    })


}
