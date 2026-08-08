import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Createpost from './pages/Createpost.jsx'
import Feed from './pages/Feed.jsx'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/createPost' element={<Createpost/>}/>
        <Route path='/seePosts' element={<Feed/>}/>
      </Routes>
    </Router>
  )
}
export default App
