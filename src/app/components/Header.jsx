import Link from "next/link"

export default function Header () {

    return (
        <>
            <nav className = "w-full h-20 shadow-xl bg-white" >
                <div className="flex justify-between items-center h-full w-full px-4">   
                    <div className="title-container"> 
                        <Link href={"/"}>                        
                            <h1 className="text-xl hover:border-b-4">Travel and Thoughts</h1>
                        </Link>
                    </div>
                    <div>
                        <ul className="flex flex-wrap">
                            <Link href={"/posts"}>
                                <li className="ml-10 text-lg hover:border-b-4">Posts</li>
                            </Link>
                            <Link href={"/new-post"}>
                                <li className="ml-10 text-lg hover:border-b-4">Create Post</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}