import React from 'react'
import { useState } from 'react'

export const Feed = () => {

    const [posts,setpost]=useState([
        {
            _id:"1",
            image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
            caption:"hello",
        
        }
    ]);
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
