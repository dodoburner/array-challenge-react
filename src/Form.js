import { useState, useEffect, useRef } from "react";

const Form = ({ addEntry, index, setIsBoxOpen }) => {
  const [value, setValue] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBoxOpen(false);
    addEntry(index, value);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isFirstRender && ref.current && !ref.current.contains(e.target)) {
        setIsBoxOpen(false);
      } else {
        setIsFirstRender(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isFirstRender, setIsBoxOpen]);

  return (
    <form className="box" onSubmit={handleSubmit} ref={ref}>
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
