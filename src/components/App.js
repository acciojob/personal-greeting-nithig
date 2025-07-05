import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const onInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onClear = () => {
    setInput("");
  };

  // Styles as objects
  const containerStyle = {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    color: "#fff",
    textAlign: "center",
  };

  const labelStyle = {
    fontSize: "1.2rem",
    marginBottom: "10px",
    display: "block",
    fontWeight: "500",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "10px",
    outline: "none",
    marginBottom: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#333",
    transition: "background-color 0.3s ease",
  };

  const greetingStyle = {
    marginTop: "15px",
    fontSize: "1.4rem",
    color: "#00ffe0",
    fontWeight: "bold",
    animation: "fadeIn 0.5s ease-in-out",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#00ccff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 204, 255, 0.3)",
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 6px 15px rgba(0, 204, 255, 0.5)",
    backgroundColor: "#0099cc",
  };

  return (
    <div style={containerStyle}>
      <label htmlFor="nameInput" style={labelStyle}>
        Enter your name:
      </label>
      <input
        id="nameInput"
        type="text"
        value={input}
        onChange={onInput}
        placeholder="Your name..."
        style={inputStyle}
      />
      {!!input.length && (
        <p style={greetingStyle}>Hello {input}!</p>
      )}
      <button
        onClick={onClear}
        style={{
          ...buttonStyle,
          ...(input.length ? buttonHoverStyle : {}),
        }}
        disabled={!input.length}
      >
        Clear
      </button>
    </div>
  );
};

export default App;