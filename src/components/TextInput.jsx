import { useState } from "react";

function TextInput({ title, state, setState }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = Number(e.target.value);

    if (
      title.toLowerCase().includes("interest") ||
      title.toLowerCase().includes("processing")
    ) {
      if (value > 100) {
        setError("Value cannot be greater than 100");
        return;
      }
      if (value < 0) {
        setError("Value cannot be negative");
        return;
      }
    }

    setError("");
    setState(value);
  };

  return (
    <>
      <span className="title">{title}</span>
      <input
        type="number"
        value={state}
        onChange={handleChange}
        placeholder={title}
        className={`border ${error ? "border-red" : ""}`}
      />
      {error && <p className="color-red">{error}</p>}
    </>
  );
}

export default TextInput;
