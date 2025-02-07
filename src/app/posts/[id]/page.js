// Give your user some naviagtion controls
// remember to add metadata for the page 
// We need params to render the post data dunamically!

export default function IdPage ({params}){
    // I need to get posts from supabase but filtered by the id 
    // (WHERE id = ${1/params })
    //  I need to handle the submit of the comments form 

    return (
        <>
            <h1> This is a post: </h1>
            <h1> Dynamic route for individual post </h1>
            {/* Display the individual form */}
            {/* Display any comments on the post */}
            {/* Need to display teh comments form to capture the users comments  */}
        </>
    )
}