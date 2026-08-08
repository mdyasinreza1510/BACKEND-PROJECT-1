import React from 'react'

export const Createpost = () => {
  return (
    <section className='create-post-section'>

        <h1>Create Post</h1>
        <form action="">
            <input type="file" name="image" accept='image/*' />
            <textarea type="text" name="caption" required placeholder='Add Caption' />
            <button> Create</button>
        </form>

    </section>
  )
}
export default Createpost