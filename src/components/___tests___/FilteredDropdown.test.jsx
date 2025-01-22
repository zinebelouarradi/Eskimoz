import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterDropdown from "../FilterDropdown";

describe("<FilterDropdown/>", () => {
  const mockOptions = ["job1", "job2", "job3"];
  const onChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    render(
      <FilterDropdown
        options={mockOptions}
        selectedValue=""
        onChange={onChange}
      />
    );

    expect(screen.getByTestId("filter-dropdown")).toBeInTheDocument();
  });

  it("should display selected value", () => {
    render(
      <FilterDropdown
        options={mockOptions}
        selectedValue="job2"
        onChange={onChange}
      />
    );

    const button = screen.getByRole("button", { name: /job2/i });
    expect(button).toBeInTheDocument();
  });

  it("should toggle dropdown when the button is clicked", () => {
    render(
      <FilterDropdown
        options={mockOptions}
        selectedValue="job2"
        onChange={onChange}
      />
    );

    const button = screen.getByRole("button", { name: /job2/i });

    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByRole("list")).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("should call onChange when an option is selected", () => {
    render(
      <FilterDropdown
        options={mockOptions}
        selectedValue="job1"
        onChange={onChange}
      />
    );

    fireEvent.click(screen.getByTestId("filter-button"));
    fireEvent.click(screen.getByTestId("option-1"));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("job2");
  });

  it("should close dropdown when clicking outside", () => {
    render(
      <FilterDropdown
        options={mockOptions}
        selectedValue=""
        onChange={onChange}
      />
    );

    fireEvent.click(screen.getByTestId("filter-button"));
    expect(screen.getByRole("list")).toBeInTheDocument();

    fireEvent.blur(screen.getByTestId("filter-dropdown"));
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("should highlight the selected option", () => {
    render(
      <FilterDropdown
        options={mockOptions}
        selectedValue="job2"
        onChange={onChange}
      />
    );

    fireEvent.click(screen.getByTestId("filter-button"));
    expect(screen.getByTestId("option-1")).toHaveClass("bg-gray-200");
  });
});
