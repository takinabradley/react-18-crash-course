import ChildComponent from "./ChildComponent"

export function ParentComponent() {
  const greetParent = (name) => alert(`Hello, ${name}!`)

  return <ChildComponent onClick={greetParent} />
}
