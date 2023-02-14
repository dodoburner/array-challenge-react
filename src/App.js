import { useState } from "react";
import "./App.css";
import Entry from "./Entry";

function App() {
  const [array, setArray] = useState(["a", "b", "c"]);

  const addEntry = (index, el) => {
    setArray((prevArray) => {
      prevArray.splice(1, 0, el);
    });
  };

  const updateEntry = (index, el) => {
    setArray((prevArray) => {
      let entry = prevArray.find((el, i) => i === index);
      entry = el;
      return [...prevArray];
    });
  };

  return (
    <div className="App">
      <ul>
        {array.map((el, index) => {
          const first = index === 0;

          return (
            <Entry
              el={el}
              index={index}
              updateEntry={updateEntry}
              addEntry={addEntry}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
