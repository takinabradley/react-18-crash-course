export default function ChildComponent({ onClick }) {
  return (
    <div>
      <button onClick={() => onClick("child")}>Greet Parent</button>
    </div>
  )
}
