import { db } from "@/app/utils/dbConnection"
import { revalidatePath } from "next/cache";
// import Link from "next/link";
import { redirect } from "next/navigation"
import "./idpage.css"


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

    // need comment.id so it has a unique key to refer to when mapping the data
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

            <br/>

            

            {/* <h2> Param: {postParams.id} </h2> */}

            <div>
            <br/>
            {wrangledPost.map((item)=>(
                <div key={item.id}>
                    <h3 className="title">{item.post_title}</h3>
                </div>
            ))}

            <div className="container">
            <form className="form-container"  action={handleSubmit}>
                <label htmlFor="comment">Comment: </label>
                <textarea
                    className=""
                    type="text"
                    name="comment"
                    id="comment"
                    required
                    placeholder="Enter your comment">
                </textarea>
                <br/>
                <label htmlFor="author">Author: </label>
                <input
                    className=""
                    type="text"
                    name="author"
                    id="author"
                    required
                    placeholder="Enter your name"
                    />
                <br/>
                <button
                    type="submit">
                    Submit Comment</button>
            </form>
            </div>            
            <br/>
            <div className="comments-container"> 
            {wrangledPostComment.map((commentItem)=> (
                <div className="comment-box" key={commentItem.id}>
                    <h4 className="comment">ߵ{commentItem.comment}ߴ</h4>
                    <h5 className="author">✍️ By: {commentItem.author}</h5>
                </div>
            ))}
            </div>
            </div>

            

            {/* Display the individual form */}
            {/* Display any comments on the post */}
            {/* Need to display the comments form to capture the users comments  */}
        </div>
    )
}