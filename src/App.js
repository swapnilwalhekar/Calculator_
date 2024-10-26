import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const [addition, setAddition] = useState(0);
  const [substraction, setSubstraction] = useState(0);
  const [multiplication, setMultiplication] = useState(0);

  const handleAddition = (value1, value2) => {
    let result = Number(value1) + Number(value2);

    setAddition(result);
  };

  const handleSubstraction = (value1, value2) => {
    let result = Number(value1) - Number(value2);

    setSubstraction(result);
  };

  const handleMultiplication = (value1, value2) => {
    let result = Number(value1) * Number(value2);

    setMultiplication(result);
  };

  const handleClearAll = () => {
    setFirstValue(0);
    setSecondValue(0);
    setAddition(0);
    setSubstraction(0);
    setMultiplication(0);
  };

  return (
    <>
      <h3>Calculator</h3>
      <div className="app">
        <label htmlFor="first-value">Number 1 :</label>
        <input
          id="first-value"
          type="text"
          value={firstValue}
          onChange={(e) => setFirstValue(e.target.value)}
        />

        <label htmlFor="second-value">Number 2 :</label>
        <input
          id="second-value"
          type="text"
          value={secondValue}
          onChange={(e) => setSecondValue(e.target.value)}
        />

        <Button onClick={() => handleAddition(firstValue, secondValue)}>
          Add
        </Button>
        <Button onClick={() => handleSubstraction(firstValue, secondValue)}>
          Substract
        </Button>
        <Button onClick={() => handleMultiplication(firstValue, secondValue)}>
          Multiply
        </Button>
        <Button onClick={handleClearAll}>Clear All</Button>
      </div>

      <h4>Addition of numbers is : {addition}</h4>
      <h4>Substraction of numbers is : {substraction}</h4>
      <h4>Multiplication of numbers is : {multiplication}</h4>
    </>
  );
}
