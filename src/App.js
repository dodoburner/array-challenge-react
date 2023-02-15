import { useState } from "react";
import "./App.css";
import Entry from "./Entry";
import Form from "./Form";

function App() {
  const [array, setArray] = useState(["a", "b", "c"]);
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  const addEntry = (index, el) => {
    setArray((prevArray) => {
      const newArray = prevArray.slice();
      newArray.splice(index + 1, 0, el);
      return [...newArray];
    });
  };

  const updateEntry = (index, el) => {
    setArray((prevArray) => {
      prevArray.splice(index, 1, el);
      return [...prevArray];
    });
  };

  const handleClick = () => {
    setIsBoxOpen((prev) => !prev);
  };

  const handleJoin = () => {
    setIsJoined((prev) => !prev);
  }

  const renderBox = () => {
    if (isBoxOpen) {
      return (
        <Form addEntry={addEntry} index={-1} setIsBoxOpen={setIsBoxOpen} />
      );
    }

    return <div className="clickable" onClick={handleClick} />;
  };

  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <div>{renderBox()}</div>
          </li>
          {array.map((el, index) => {
            return (
              <Entry
                el={el}
                key={index}
                index={index}
                updateEntry={updateEntry}
                addEntry={addEntry}
              />
            );
          })}
        </ul>

        <button className="join-btn" onClick={handleJoin}>
          {isJoined ? "UNJOIN" : "JOIN"}
        </button>
        <p className="join-result">{isJoined ? array.join("") : ""}</p>
      </div>
    </div>
  );
}

export default App;
