import React, { useState } from "react"
export default function Form() {
  const [userName, setUserName] = useState("")
  const [selection, setSelection] = useState("default")
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(userName)
  }
  const handleSelection = (e) => {
    console.log("fired")
    setSelection(e.target.value)
    console.log(selection)
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <select name="" id="" value={selection} onChange={handleSelection}>
          <option value="option1">optionOne</option>
          <option value="option2">optionTwo</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
