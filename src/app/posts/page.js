import { db } from "../utils/dbConnection"
import Link from "next/link" // give your user some navigation controls!
// remember to add metadata for the page 
// We need to be able to sort the posts by asc and desc order. Query strings!

export default async function PostsPage({searchParams}){
    const posts = await db.query(`SELECT * FROM posts`)
    console.log(posts)

    const wrangledPosts = await posts.rows
    console.log(wrangledPosts)

    const postSearchParams = await searchParams
    if (postSearchParams.sort === "asc") {
        wrangledPosts.sort((a,b) => {
            return a.post_title.localeCompare(b.post_title);
        })
    } else if (postSearchParams.sort === "desc") {
        wrangledPosts.sort((a,b) => {
            return b.post_title.localeCompare(a.post_title)
        })
    }


    return (
        <>
            <Link href={"/"}>Home</Link> | <Link href={"/new-post"}>Add Post</Link>
            <h1>Posts Page</h1>
            <br/>
            <Link href={`/posts?sort=asc`}>A-Z </Link> |
            <Link href={`/posts?sort=desc`}> Z-A</Link>
            <br/>
            {/* I need to get all posts from my database */}
            {/* I need to render all of the posts */}
            <br/>

            {wrangledPosts.map((item) => (
                <div key={item.id}>
                    <h2>{item.post_title}</h2>
                </div>
            ))}
        </>
    )
}