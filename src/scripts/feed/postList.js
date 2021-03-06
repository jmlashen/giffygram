import { Post } from "./posts.js"; 
import { Footer } from "../footer/NavFooter.js";


export const PostList = (allPosts) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const postObject of allPosts) {
			//what is a postObject?
			postHTML += Post(postObject)
		}
		return postHTML;
	
}

export const FooterList = (footerData) => {
	let footerHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const footerObject of footerData) {
			//what is a postObject?
			footerHTML += Footer(footerObject)
		}
		return footerHTML;
	}

