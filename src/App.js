// import logo from "./logo.svg";

import "./App.css"
import names from "./components/data.json"
import Form from "./components/Form"
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import { useState, useTransition } from "react"

function App() {
  const [isPending, startTransition] = useTransition()
  const [filter, setFilter] = useState("")
  const [inputValue, setInputValue] = useState("")

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value)
    startTransition(() => {
      setFilter(e.target.value)
    })
  }

  const filteredNames = names.reduce((names, name) => {
    const [firstName, lastName, filterText] = [
      name.first_name.toLowerCase(),
      name.last_name.toLowerCase(),
      filter.toLowerCase(),
    ]

    if (firstName.includes(filterText) || lastName.includes(filterText)) {
      return [
        ...names,
        <li key={name.id}>
          {name.first_name} {name.last_name}
        </li>,
      ]
    } else {
      return names
    }
  }, [])

  return (
    <div>
      <input type="search" value={inputValue} onChange={onChangeInputValue} />
      {isPending ? <p>Updating List...</p> : null}

      <ul>{filteredNames}</ul>
    </div>
  )
}

export default App
