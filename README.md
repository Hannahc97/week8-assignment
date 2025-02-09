# Planning

## Database
 - Start with the database
 - Draw out your tables in words.
 - Create the schema!
 - Write the SQL to create your tables!
 - Considerations: foreign/primary keys, data types...


## Wireframe
- Lofi wireframes for each part of your app
- Possibly design mobile first?

## Break up your task into 20ish minute chunks, then have a little break 

## Lock in your MVP features early 
- Rewrite the MVP features from teh assignment requirements?
- What are the smallest building blocks of each different feature, start by implementing those! 

## Main requirements
- Routes! Static ones AND dynamic ones
    - building blocks would be configuring your routes to match your plan
- Rendering db data
    - configure your DB connection
    - Test your DB connection, seed? Postman?
- Sending data to the db
    - configure your DB connection
    - Test your DB connection, seed? Postman?
    - Create a very basic form with one input for testing 




# Reflection


Required
- 🎯 What requirements did you achieve?
- I displayed all posts on the page, with an option to sort them in ascending or descending order.
- I created a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.

![schema](screenshots/drawSQL-image-export-2025-02-09.png)

![Posts table](<screenshots/Screenshot 2025-02-09 at 21.51.51.png>)

![Comments table](<screenshots/Screenshot 2025-02-09 at 21.51.57.png>)

- I created a delete button on posts that allows users to delete the post from the database.
- I created a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
- Users can comment on individual posts in their dynamic routes. Comments are associated with posts, and have a dynamic route (e.g. /posts/:postid).
- I added a redirect so when a user creates a post it redirects them to the posts page.

🎯 Were there any requirements or goals that you were unable to achieve?
- I wasn't able to achieve the stretch goals but I think in my free time I would try them out. 

🎯 If so, what was it that you found difficult about these tasks?
- I tried the tailwind css but got a bit frustrated with it when it came to styling the forms and containers. I think as I'm still new to the shorthand abbreviations it will take some time to get used it. I mainly used it for little things like text and headers. 
- Also If I had more time I would add some more styling. I tried to do a minimalistic style but think it was a bit too minimal. 
- In the future I think I would add more entries so the user can attach an image to the comment/post. 
- I got a bit stuck on adding meta data for the dynamic page, could you please advise how to do it when querying the db?
- I struggled with creating the delete function as it I got a bit stuck on whether it's a server or client component. Then after some research I realised that it's best to put the delete function as a server component and the onClick event as a client component and then nest them. However I also saw a way where you could put the function inside the onClick event as one block of code rather than separating, can you advise if that's better or not? For mine I made separate components. 
For e.g. 
``` jsx
onClick={async function handleDelete() {
    "use server"
    await db.query(`DELETE.....), [item.id]
    revalidatePath("/posts");
    redirect("/posts");
} }
```

What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
- https://www.youtube.com/watch?v=ffWt0Bs3llw&list=PLynWqC6VC9KOvExUuzhTFsWaxnpP_97BD&index=33&ab_channel=DailyTuition 

- Navbar 
    - https://www.youtube.com/watch?v=8s4DK5PkRNQ&ab_channel=BrettWestwood-SoftwareEngineer


## Trello Board
![Trello board ](<screenshots/Screenshot 2025-02-09 at 21.49.38.png>)

## Wireframe

![Wirefram](screenshots/week8_assignment___blog_posts.jpg)
