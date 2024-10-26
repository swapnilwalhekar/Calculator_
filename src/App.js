import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState({
    addition: 0,
    subtraction: 0,
    multiplication: 0,
  });
  const [error, setError] = useState("");

  const handleCalculation = (operation) => {
    const numbers = inputValue.split(/[\s,]+/).map(Number);

    // Check for invalid numbers
    if (numbers.some(isNaN)) {
      setError("Please enter valid numbers.");
      return;
    }

    // Check for negative numbers
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      setError(`Negative numbers not allowed: ${negatives.join(", ")}`);
      return;
    }

    setError("");

    switch (operation) {
      case "add":
        const additionResult = numbers.reduce((sum, num) => sum + num, 0);
        setResults({ ...results, addition: additionResult });
        break;
      case "subtract":
        const subtractionResult = numbers.reduce((acc, num) => acc - num);
        setResults({ ...results, subtraction: subtractionResult });
        break;
      case "multiply":
        const multiplicationResult = numbers.reduce(
          (prod, num) => prod * num,
          1
        );
        setResults({ ...results, multiplication: multiplicationResult });
        break;
      default:
        break;
    }
  };

  const handleClearAll = () => {
    setInputValue("");
    setResults({ addition: 0, subtraction: 0, multiplication: 0 });
    setError("");
  };

  return (
    <div className="main-div" style={{ textAlign: "center", padding: "20px" }}>
      <h3>Calculator</h3>
      <div
        className="app"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <label htmlFor="input-numbers">Numbers:</label>
        <input
          id="input-numbers"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter numbers separated by commas or new lines"
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div style={{ display: "flex", gap: "5px" }}>
          <Button onClick={() => handleCalculation("add")}>Add</Button>
          <Button onClick={() => handleCalculation("subtract")}>
            Subtract
          </Button>
          <Button onClick={() => handleCalculation("multiply")}>
            Multiply
          </Button>
          <Button onClick={handleClearAll}>Clear All</Button>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Addition of numbers is: {results.addition}</h4>
        <h4>Subtraction of numbers is: {results.subtraction}</h4>
        <h4>Multiplication of numbers is: {results.multiplication}</h4>
      </div>
    </div>
  );
}
