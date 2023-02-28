import { useState } from "react"

function Message(props) {
  const [message, setMessage] = useState("Welcome, visitor")

  return (
    <div className="message">
      <h1>{message}</h1>
      <button className="subscribe" onClick={() => setMessage("Thank you!")}>
        subscribe
      </button>
    </div>
  )
}

export default Message
