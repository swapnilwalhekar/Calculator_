import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Calculator App", () => {
  test("initial values are set to 0", () => {
    render(<App />);
    expect(screen.getByText(/Addition of numbers is : 0/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Substraction of numbers is : 0/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Multiplication of numbers is : 0/i)
    ).toBeInTheDocument();
  });

  test("addition functionality works correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Number 1/i), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText(/Number 2/i), {
      target: { value: "3" },
    });

    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText(/Addition of numbers is : 8/i)).toBeInTheDocument();
  });

  test("substraction functionality works correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Number 1/i), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText(/Number 2/i), {
      target: { value: "3" },
    });

    fireEvent.click(screen.getByText("Substract"));
    expect(
      screen.getByText(/Substraction of numbers is : 2/i)
    ).toBeInTheDocument();
  });

  test("multiplication functionality works correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Number 1/i), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText(/Number 2/i), {
      target: { value: "3" },
    });

    fireEvent.click(screen.getByText("Multiply"));
    expect(
      screen.getByText(/Multiplication of numbers is : 15/i)
    ).toBeInTheDocument();
  });

  test("clear all functionality works correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Number 1/i), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText(/Number 2/i), {
      target: { value: "3" },
    });

    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("Clear All"));

    expect(screen.getByLabelText(/Number 1/i).value).toBe("0");
    expect(screen.getByLabelText(/Number 2/i).value).toBe("0");
    expect(screen.getByText(/Addition of numbers is : 0/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Substraction of numbers is : 0/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Multiplication of numbers is : 0/i)
    ).toBeInTheDocument();
  });
});
