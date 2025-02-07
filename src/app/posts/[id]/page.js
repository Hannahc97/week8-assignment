import { db } from "@/app/utils/dbConnection"
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation"


// Give your user some naviagtion controls
// remember to add metadata for the page 
// We need params to render the post data dunamically!

export default async function IdPage ({params}){
    // I need to get posts from supabase but filtered by the id 
    // (WHERE id = ${1/params })
    //  I need to handle the submit of the comments form 

    const postParams = await params;
    console.log(postParams)

    const post = await db.query(`SELECT * FROM posts WHERE id = $1`, [postParams.id])
    console.log(post)

    const wrangledPost = post.rows
    console.log(wrangledPost)

    const postComment = await db.query(
        `SELECT comments.id, comments.comment, comments.author FROM posts
        JOIN comments ON comments.post_id = posts.id WHERE posts.id = $1`, [postParams.id])
    console.log(postComment)
    const wrangledPostComment = postComment.rows
    console.log(wrangledPostComment)

    async function handleSubmit (formValues){
        "use server"
        const formData = {
            comment: formValues.get("comment"),
            author: formValues.get("author")
        }
        db.query(`INSERT INTO comments (comment, author, post_id)
                VALUES ($1, $2, $3)`, [formData.comment, formData.author, postParams.id])

        revalidatePath(`/posts/${postParams.id}`)
        redirect(`/posts/${[postParams.id]}`)
    }

    return (
        <div>
            <Link href={"/"}>Home</Link> | <Link href={"/posts"}>Posts</Link> | <Link href={"/new-post"}>Add Post</Link>
            <br/>
            <h1> Dynamic route for individual post </h1>
            <h2> Param: {postParams.id} </h2>
            <br/>
            {wrangledPost.map((item)=>(
                <div key={item.id}>
                    <h3>Post Title: {item.post_title}</h3>
                </div>
            ))}
            <br/>
            {wrangledPostComment.map((commentItem)=> (
                <div key={commentItem.id}>
                    <h4>{commentItem.comment}</h4>
                    <h5>By: {commentItem.author}</h5>
                    <br/>
                </div>
            ))}

            <form action={handleSubmit}>
                <label htmlFor="comment">Comment: </label>
                <br/>
                <textarea
                    className="border-black text-black m-px rounded-md"
                    type="text"
                    name="comment"
                    id="comment"
                    required
                    placeholder="Enter your comment">
                </textarea>
                <br/>
                <label htmlFor="author">Author: </label>
                <input
                    className="border-black"
                    type="text"
                    name="author"
                    id="author"
                    required
                    placeholder="Enter your name"
                    />
                <br/>
                <button
                    className="border-blue-400 border-8 m-2 hover:bg-blue-400 rounded-lg"
                    type="submit">
                    Submit Comment</button>
            </form>

            {/* Display the individual form */}
            {/* Display any comments on the post */}
            {/* Need to display the comments form to capture the users comments  */}
        </div>
    )
}