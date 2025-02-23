import { db } from "../utils/dbConnection"
// give your user some navigation controls!
import Link from "next/link" 
import DeleteButton from "../components/DeleteButton"
// remember to add metadata for the page 
// We need to be able to sort the posts by asc and desc order. Query strings!

export const metadata = {
    title: "Travel and Thoughts Posts",
    description: "All travel posts",
};

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
            <div>
                <h1 className="text-center text-5xl mt-5 p-5">Posts Page</h1>
                <br/>
                <Link  className="text-2xl ml-5" href={`/posts?sort=asc`}>A-Z </Link> |
                <Link className="text-2xl" href={`/posts?sort=desc`}> Z-A</Link>
                <br/>
                {/* I need to get all posts from my database */}
                {/* I need to render all of the posts */}
                <br/>

                <div className="flex flex-col items-center justify-around ">
                    {wrangledPosts.map((item) => (
                        <div className="border-2 rounded-md m-6 p-10 border-black" 
                        key={item.id}>
                            <Link className="text-2xl font-bold hover:text-gray-500" 
                            href={`/posts/${item.id}`}>
                            <h2>{item.post_title}</h2>
                            </Link>
                            <div className="flex justify-center p-2"> 
                            <DeleteButton postId={item.id}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
