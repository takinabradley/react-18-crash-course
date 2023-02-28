import React, { useState } from "react"
export default function PostForm() {
  const [postData, setPostData] = useState({ userId: "", title: "", body: "" })

  const onFormInput = (e) => {
    const inputName = e.target.name
    setPostData({
      ...postData,
      [inputName]: e.target.value,
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const { title, body, userId } = postData
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        type="text"
        name="userId"
        value={postData.userId}
        placeholder="User ID"
        onChange={onFormInput}
      />
      <input
        type="text"
        name="title"
        value={postData.title}
        placeholder="Title"
        onChange={onFormInput}
      />
      <input
        type="text"
        name="body"
        value={postData.body}
        placeholder="Body"
        onChange={onFormInput}
      />

      <button type="submit">Submit</button>
    </form>
  )
}
