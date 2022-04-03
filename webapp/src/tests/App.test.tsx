import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

import '@testing-library/jest-dom';

test("renders empty results", () => {
  render(<App />);
  const linkElement = screen.getByText(/No Results/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders number buttons", () => {
  render(<App />);
  for (let i = 1; i < 10; i++) {
    const linkElement = screen.getByText(new RegExp(`${i}`, "i"));
    expect(linkElement).toBeInTheDocument();
  }
});
