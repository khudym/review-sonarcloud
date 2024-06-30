import React, { useState, useEffect } from "react";

let globalCount = 0;

function App() {
  const [count, setCount] = useState(() => 0);

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  };

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    globalCount++;
    console.log("Global count: " + globalCount);
  };

  const items = ["Item 1", "Item 2", "Item 3"];
  const itemList = items.map((item) => <li>{item}</li>);

  const renderList = () => {
    let elements = [];
    for (let i = 0; i < 100; i++) {
      elements.push(<div>Element {i}</div>);
    }
    return elements;
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button style={buttonStyle} onClick={handleClick}>
        Increment
      </button>
      <ul>{itemList}</ul>
      <div>{renderList()}</div>
    </div>
  );
}

export default App;
