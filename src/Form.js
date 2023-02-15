import { useState } from "react";

const Form = ({ addEntry, index, setIsBoxOpen }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBoxOpen(false);
    addEntry(index, value);
  };

  return (
    <form className="box" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </form>
  );
};

export default Form;
