import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Createpost = () => {
  const navigate=useNavigate();

  const handlesubmit = async (e)=>{
    //form submit hone k baad page reload na ho iske liye prevent ka use krte hain
    e.preventDefault()

    //new FormData ka kaam  HTML form ka sara data collect karna jaise name age img etc.

    const formdata = new FormData(e.target)

    //yha pe axios.post ne formdata ka data send kiya bckend p data jate hi wo db aur imgekit me save hua aur wahase res me img aur caption aya jo console m print hua
    axios.post("http://localhost:3000/create-post",formdata)
    .then((res)=>{
      //aur jb response ayega hm navigate krdenge  feed page pe 
      navigate("/seePosts")
    })

  }
  return (
    <section className='create-post-section'>

        <h1>Create Post</h1>
        <form onSubmit={handlesubmit}>
          <label htmlFor="image" className='upload-button'> Choose Image</label>
            <input type="file" name="image" accept='image/*' hidden  id='image'/>
            <textarea type="text" name="caption" required placeholder='Add Caption' />
            <button type='submit'> Create</button>
        </form>

    </section>
  )
}
export default Createpost