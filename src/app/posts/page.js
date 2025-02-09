import { db } from "../utils/dbConnection"
// give your user some navigation controls!
import Link from "next/link" 
import DeleteButton from "../components/DeleteButton"
// remember to add metadata for the page 
// We need to be able to sort the posts by asc and desc order. Query strings!

export default async function PostsPage({searchParams, params}){
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

    const id = await params
    console.log(id)

    return (
        <>
            <div>
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
                        <br/>
                        <Link href={`/posts/${item.id}`}>
                        <h2>{item.post_title}</h2>
                        </Link>
                        {/* <h2>{item.post_title}</h2> */}
                        <DeleteButton postId={item.id}/>
                    </div>
                ))}
            </div>
        </>
    )
}
