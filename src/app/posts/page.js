import { db } from "../utils/dbConnection"
import Link from "next/link" // give your user some navigation controls!
// remember to add metadata for the page 
// We need to be able to sort the posts by asc and desc order. Query strings!

export default async function PostsPage(){
    const posts = await db.query(`SELECT * FROM posts`)
    console.log(posts)

    const wrangledPosts = await posts.rows
    console.log(wrangledPosts)
    return (
        <>
            <Link href={"/"}>Home</Link> | <Link href={"/new-post"}>Add Post</Link>
            <h1>Posts Page</h1>

            {/* I need to get all posts from my database */}
            {/* I need to render all of the posts */}

            {wrangledPosts.map((item) => (
                <div key={item.id}>
                    <h2>{item.post_title}</h2>
                </div>
            ))}
        </>
    )
}