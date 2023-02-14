import { useState } from "react";

const Entry = ({ el, index, updateEntry }) => {
  const [value, setValue] = useState(el);
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handleClick = () => {
    setIsBoxOpen((prev) => !prev);
  };

  const handleUpdate = (e) => {
    setValue(e.target.value);
    updateEntry(index, e.target.value);
  };

  const renderBox = () => {
    if (isBoxOpen) {
      return (
        <div className="box">
          <input type="text" />
        </div>
      );
    }

    return <div className="clickable" onClick={handleClick} />;
  };

  return (
    <li className="entry">
      {/* {isFirst ? <div>{renderBox()}</div> : null} */}
      <input type="text" value={value} onChange={handleUpdate} />
      <div>{renderBox()}</div>
    </li>
  );
};

export default Entry;
