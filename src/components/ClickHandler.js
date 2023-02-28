function ClickHandler() {
  const clickHandler = (e, count = 1) => console.log("button clicked!", count)
  return (
    <div>
      <button onClick={clickHandler}>click</button>
      <button onClick={(e) => clickHandler(e, 5)}>Click 5</button>
    </div>
  )
}

export default ClickHandler
