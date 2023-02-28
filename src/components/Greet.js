function Greet({ name, heroName, children }) {
  return (
    <div className="app-greet">
      <h1 className="app-greet-greet">
        Hello, {name}! (AKA {heroName})
      </h1>
      {children}
    </div>
  );
}

export default Greet;
