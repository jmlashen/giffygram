import { getPosts, getUsers } from "./data/dataManager.js"
import { PostList } from "./feed/postList.js"
import { NavBar } from "./NavBar.js";
import { Footer } from "./footer/NavFooter.js"

const showPostList = () => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".postList");
    getPosts().then((allPosts) => {
        postElement.innerHTML = PostList(allPosts);
    })
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
    navElement.innerHTML = NavBar();
}

const showFooter = () => {
    //Get a reference to the location on the DOM where the nav will display
    const footerElement = document.querySelector("Footer");
    footerElement.innerHTML = Footer();


}

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", event => {
    if (event.target.id === "logout") {
        console.log("You clicked on logout")
    }
})


//applicationElement.addEventListener("click, handleGiffyClick")




const startGiffyGram = () => {
    showNavBar();
    showPostList();
    showFooter();

}

    startGiffyGram();






