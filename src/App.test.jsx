import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock(
  "./mockData.json",
  () => [
    { name: "John", age: 30, job: "dev", location: "Paris" },
    { name: "Jane", age: 25, job: "Designer", location: "London" },
    {
      name: "Alice",
      age: 28,
      job: "dev",
      location: "Berlin",
    },
  ],
  { virtual: true }
);

describe("<App/>", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render correctly", () => {
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    expect(screen.getByTestId("filter-dropdown")).toBeInTheDocument();
    expect(screen.getByTestId("card-list")).toBeInTheDocument();
  });
});
