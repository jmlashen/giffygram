
// export const Post = (postObject) => {
//   return `
//     <section class="post">
//       <header>
//           <h2 class="post__title">${postObject.title}</h2>
//       </header>
//       <img class="post__image" src="${postObject.imageURL}" />
//     </section>
//   `
// }
import { getLikes } from './../data/dataManager.js';

//this needs to be located above the Post declaration
//this could also be imported to this module
let result = undefined;
const getNumberOfLikes = (postId) => {
  getLikes(postId)
    .then(response => {
      document.querySelector(`#likes__${postId}`).innerHTML = `👍 ${response.length}`;
      const user = JSON.parse(sessionStorage.getItem("user"));
      result = response.find(({ userId }) => userId === user.id);
      if (result == undefined) {
        document.getElementById(`likes__${postId}`).innerHTML = 
        `<button id="like__${postId}">Like</button>`
      }
      
    })
}




export const Post = (postObject) => {
    return `
  
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
            <h2 class="post__title">${postObject.user.name}</h2>
        </header>
        
        <img class="post__image" src="${postObject.imageURL}" />

        <div id="buttonMoveAll">

        <button id="delete--${postObject.id}">Delete</button>

        <button id="edit__${postObject.id}">Edit</button>
        
        <p class="likeButton" id="likes__${postObject.id}">👍 ${getNumberOfLikes(postObject.id)}</p>

        </section>`
}

// add a different button with a differnt id to delete : trade out buttons 

