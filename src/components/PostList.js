import React, { useEffect, useState } from "react"
export default function PostList() {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const parsedData = await data.json()
    console.log("parsedData", parsedData)
    setPosts(parsedData)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
