import Link from "next/link" // give your user some navigation controls!
// remember to add metadata for the page 
// We need to be able to sort the posts by asc and desc order. Query strings!

export default function PostsPage(){
    return (
        <>
            <Link href={"/"}>Home</Link>
            <h1>Posts Page</h1>
            {/* I need to get all posts from my database */}
            {/* I need to render all of the posts */}
            Sort the 
        </>
    )
}