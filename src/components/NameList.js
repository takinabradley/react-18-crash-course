import React from "react"
export function NameList() {
  const names = ["a", "b", "c"]
  return (
    <div>
      {names.map((name) => (
        <h2 key={name}>{name}</h2>
      ))}
    </div>
  )
}
