import { revalidatePath } from "next/cache"
import { db } from "../utils/dbConnection"
import { redirect } from "next/navigation"
import "./create-posts.css" 



// Give your user some naviagtion controls
// remember to add metadata for the page 

export const metadata = {
    title: "Travel and Thoughts post form",
    description: "Form to create a post",
};

export default function NewPostPage() {
    // I need to handle the submit of the posts form 

    async function handleSubmit (formValues){
        "use server"

        const postTitle = formValues.get("post_title")

        db.query(`INSERT INTO posts(post_title)
            VALUES($1)`, [postTitle])

        revalidatePath("/posts")
        redirect("/posts")
    }

    return (
        <>
            {/* <Link href={"/"}>Home</Link> | <Link href={"/posts"}>Posts</Link> */}

            {/* I need to write a form to collect user data */}

            <div className="container">

            <form className="form-container" action={handleSubmit}>
                <label htmlFor="post_title">✈️ Post: </label>
                <br/>
                <input
                    type="text"
                    name="post_title"
                    id="post_title"
                    required
                    placeholder="Enter the post name"
                />
                <br/>
                <button
                    type="submit">Submit Post</button>
            </form>
            </div>
        </>
    )
}