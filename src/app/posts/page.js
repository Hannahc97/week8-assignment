import { db } from "../utils/dbConnection"
import Link from "next/link" // give your user some navigation controls!
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"
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

    // async function handleDelete(postId){
    //     "use server"

    //     await db.query(`DELETE FROM posts WHERE id = $1`, [postId])
    //     revalidatePath("/posts")
    //     redirect("/posts")
    // }

    async function handleDeletePost (postId) {
        "use server"
        await db.query(`DELETE FROM posts WHERE id = $1`, [postId])
        revalidatePath("/posts")
        redirect("/posts")
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
                    <button type="submit"
                            // onClick={() => handleDelete(item.id)}
                            onClick={async function deletePost (){
                                "use server"
                                await db.query(`DELETE FROM posts WHERE id = $1`, [item.id])
                                revalidatePath("/posts")
                                redirect("/posts")
                            }}
                        >Delete Post</button>
                    <br/>
                </div>
            ))}
        </>
    )
}