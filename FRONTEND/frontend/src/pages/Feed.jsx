import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Feed = () => {

    const [posts,setpost]=useState([
        {
            _id:"1",
            image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
            caption:"hello",
        
        }
    ]);
//axios frontend ko backend se connect krta hai
useEffect(()=>{
    //yaha hmne localhost:3000 pr jo get api hai "getpost" uska data lee rhe hain backend se aur aur aur ye jo data hai wo sb hamare DB se save hain "
axios.get("http://localhost:3000/getPost")
.then((res) =>{
    console.log(res.data)
    setpost(res.data.post)

})
//jis get api k zariya ham get method use krrr rhe hainusa link dalna hoga 

},[])



  return (
    <section className='feed-section'>
        {
            posts.length > 0 ? (
                posts.map((post) =>(
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption}  />
                        <p>{post.caption}</p>
                    </div>

                ))
                    
                
            ) : (<h1>NO POSTS AVAILABLE</h1>)
        }


    </section>
  )
}
export default Feed
