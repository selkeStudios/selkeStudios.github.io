import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { seedPosts } from './data/posts'
import { useEffect } from 'react'
import Composer from './components/Composer'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

export default function App() {
  const [posts, setPosts] = useState(seedPosts)

  useEffect(() => {
    const saved = localStorage.getItem('mini-insta-posts')
    if (saved) setPosts(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('mini-insta-posts', JSON.stringify(posts))
  }, [posts])

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 680, margin: '0 auto' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Composer setPosts={setPosts} />
                <Feed posts={posts} setPosts={setPosts} />
              </>
            }
          />
          <Route
            path="/u/:handle"
            element={<Profile posts={posts} setPosts={setPosts} />}
          />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </main>
    </>
  )
}