
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

export const Post = (postObject) => {
  return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <button id="edit__${postObject.id}">Edit</button>
        <div id="buttonMove"><button id="delete--${postObject.id}">Delete</button></div>


      </section>
    `
}


