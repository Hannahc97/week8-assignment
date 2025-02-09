"use client"

import { handleDeletePost } from "./DeleteFunction"

export default function DeleteButton ({postId}){

    return (
        <>
        <button className="border-2 rounded-md p-1 bg-blue-500 mt-8 -mb-10"
        type="submit" 
        onClick={()=>handleDeletePost(postId)}>Delete Post</button>
        </>
    )

}