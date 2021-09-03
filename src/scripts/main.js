//import { getUsers } from "./dataManager.js";

//const allUsers = getUsers().then(apiUsers => {
//console.log("now we got it", apiUsers)
//})

/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
import { getPosts } from "./dataManager.js";

const startGiffyGram = (number, string) => {
    const postElement = document.querySelector(".postList");
	postElement.innerHTML = `Hello Cohort ${number} ${string}`
}
// Are you defining the function here or invoking it?
startGiffyGram(51, "is the best");


// const startPosts = () => {
//     const postElement = document.querySelector(".postList");

//     getPosts().then(arrayOfPosts => {
//         for (let post of arrayOfPosts){

        
//         let html = `<section class="post">
//         <header>
//             <h2 class="post__title">${post.title}</h2>
//         </header>
//         <img class="post__image" src="${post.imageURL}" />
//       </section>`
//       postElement.innerHTML += html;
//         }
//     })
     
// }
// startPosts()

