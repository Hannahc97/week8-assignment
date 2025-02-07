import Link from "next/link"
export default function HomePage () {
  return (
    <>
      <Link href={"/posts"}>Posts</Link> | <Link href={"/new-post"}>Add Post</Link>

      <h1>Home page!</h1>
    </>
  )
}