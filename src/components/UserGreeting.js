import React from "react"
export default function UserGreeting() {
  const isLoggedIn = false
  return <div>welcome {isLoggedIn ? "customer" : null}</div>
}
