import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Calculator App", () => {
  test("initial values are set to 0", () => {
    render(<App />);
    expect(screen.getByText(/Addition of numbers is: 0/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Subtraction of numbers is: 0/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Multiplication of numbers is: 0/i)
    ).toBeInTheDocument();
  });

  test("addition functionality works correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Numbers:/i), {
      target: { value: "1,5" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText(/Addition of numbers is: 6/i)).toBeInTheDocument();
  });

  test("subtraction functionality works correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Numbers:/i), {
      target: { value: "5,3" },
    });
    fireEvent.click(screen.getByText("Subtract"));
    expect(
      screen.getByText(/Subtraction of numbers is: 2/i)
    ).toBeInTheDocument();
  });

  test("multiplication functionality works correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Numbers:/i), {
      target: { value: "5,3" },
    });
    fireEvent.click(screen.getByText("Multiply"));
    expect(
      screen.getByText(/Multiplication of numbers is: 15/i)
    ).toBeInTheDocument();
  });

  test("clear all functionality works correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Numbers:/i), {
      target: { value: "5,3" },
    });
    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("Clear All"));

    expect(screen.getByLabelText(/Numbers:/i).value).toBe("");
    expect(screen.getByText(/Addition of numbers is: 0/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Subtraction of numbers is: 0/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Multiplication of numbers is: 0/i)
    ).toBeInTheDocument();
  });

  test("handles invalid input correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Numbers:/i), {
      target: { value: "1,abc" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(
      screen.getByText(/Please enter valid numbers./i)
    ).toBeInTheDocument();
  });

  test("handles negative input correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Numbers:/i), {
      target: { value: "1,-2" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(
      screen.getByText(/Negative numbers not allowed: -2/i)
    ).toBeInTheDocument();
  });

  test("handles multiple negative numbers correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Numbers:/i), {
      target: { value: "-1,-2,-3" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(
      screen.getByText(/Negative numbers not allowed: -1, -2, -3/i)
    ).toBeInTheDocument();
  });
});
