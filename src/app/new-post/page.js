import { revalidatePath } from "next/cache"
import { db } from "../utils/dbConnection"
import { redirect } from "next/navigation"
// import Link from "next/link"



// Give your user some naviagtion controls
// remember to add metadata for the page 

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

            <h1>A form to let the user add a New post</h1>

            {/* I need to write a form to collect user data */}

            <form action={handleSubmit}>
                <label htmlFor="post_title">Post: </label>
                <br/>
                <input
                    className="text-black m-px rounded-md"
                    type="text"
                    name="post_title"
                    id="post_title"
                    required
                    placeholder="Enter the post name"
                />
                <br/>
                <button
                    className="border-blue-400 border-8 m-2 hover:bg-blue-400 rounded-lg" 
                    type="submit">Submit Post</button>
            </form>
        </>
    )
}