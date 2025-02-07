import { db } from "@/app/utils/dbConnection"

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
        `SELECT comments.comment, comments.author FROM posts
        JOIN comments ON comments.post_id = posts.id WHERE posts.id = $1`, [postParams.id])
    console.log(postComment)
    const wrangledPostComment = postComment.rows
    console.log(wrangledPostComment)





    return (
        <>
            <h1> Dynamic route for individual post </h1>

            <h2> Param: {postParams.id} </h2>

            {wrangledPost.map((item)=>(
                <div key={item.id}>
                    <h3>Post Title: {item.post_title}</h3>
                </div>
            ))}
            <br/>
            {wrangledPostComment.map((item)=> (
                <div key={item.id}>
                    <h4>{item.comment}</h4>
                    <h5>By: {item.author}</h5>
                    <br/>
                </div>

            ))}

            <form>
                <label>Comment: </label>
                <br/>
                <textarea
                    className="text-black m-px rounded-md"
                    type="text"
                    name="comment"
                    id="comment"
                    required
                    placeholder="Enter your comment">
                </textarea>
                <br/>
                <label>Author: </label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    required
                    placeholder="Enter your name"
                    />
                <button type="submit">Submit Comment</button>
            </form>

            {/* Display the individual form */}
            {/* Display any comments on the post */}
            {/* Need to display the comments form to capture the users comments  */}
        </>
    )
}