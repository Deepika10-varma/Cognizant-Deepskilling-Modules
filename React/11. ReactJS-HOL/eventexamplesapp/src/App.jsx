import { useState } from "react";
import "./App.css";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div className="container">
      <h3>{count}</h3>

      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>
      <br />
      <button onClick={onPress}>Click on me</button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;