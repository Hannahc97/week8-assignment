import Image from "next/image"
import travel1 from "@/../public/assets/travel1.jpg"

// import Link from "next/link"
export default function HomePage () {
  return (
    <>
      <h1 className="text-2xl mt-11 ml-6 mr-6 mb-5 p-2 text-pink-500 text-center">Hello and welcome to Travel and Thoughts! This is a travel blogging website where you can share a post about a place that you have travelled to, and would love for other explorers to visit! You can also comment on other posts and give tips or your experiences about that particular city. Happy exploring! </h1>

      <Image
        className="image"
        src={travel1} 
        alt={"a map"} 
        width={800} 
        height="fill"
        // Knows it doesn't have to prioritise this image
        // priotity tells next to either preload (true) or not (false)
        priority="false"
        // If image is too large we can have placeholder so user know there's something but still loading instead of empty space 
        placeholder="blur"/> 

    </>
  )
}