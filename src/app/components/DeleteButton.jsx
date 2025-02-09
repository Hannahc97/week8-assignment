"use client"

import { handleDeletePost } from "./DeleteFunction"

export default function DeleteButton ({postId}){

    return (
        <>
        <button type="submit" onClick={()=>handleDeletePost(postId)}>Delete Post</button>
        </>
    )

}