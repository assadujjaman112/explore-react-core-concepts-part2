import "./App.css";
import "./Counter"
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";


function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick2 = () => {
    alert("Button 2 clicked");
  };
  const addFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>
      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click me </button>
      <button onClick={handleClick2}>Click me 2</button>
      <button
        onClick={() => {
          alert("Button 3 clicked");
        }}
      >
        Click me 3
      </button>
      <button
        onClick={() => {
          addFive(3);
        }}
      >
        Click me 4
      </button>
    </>
  );
}

export default App;
