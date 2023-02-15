import { useState } from "react";
import Form from "./Form";

const Entry = ({ el, index, updateEntry, addEntry }) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handleClick = () => {
    setIsBoxOpen((prev) => !prev);
  };

  const handleUpdate = (e) => {
    updateEntry(index, e.target.value);
  };

  const renderBox = () => {
    if (isBoxOpen) {
      return (
        <Form addEntry={addEntry} index={index} setIsBoxOpen={setIsBoxOpen} />
      );
    }

    return <div className="clickable" onClick={handleClick} />;
  };

  return (
    <li className="entry">
      <div className="entry-content">
        <input type="text" value={el} onChange={handleUpdate} />
      </div>
      <div>{renderBox()}</div>
    </li>
  );
};

export default Entry;
