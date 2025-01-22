import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("<Card/>", () => {
  const mockCard = {
    name: "John Doe",
    age: 22,
    job: "Fullstack Dev",
    location: "Paris",
  };

  it("should render correctly", () => {
    render(<Card card={mockCard} />);

    const cardElement = screen.getByTestId("card");

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText(/Âge : 22/i)).toBeInTheDocument();
    expect(screen.getByText(/Métier : Fullstack Dev/i)).toBeInTheDocument();
    expect(screen.getByText(/Lieu : Paris/i)).toBeInTheDocument();
  });
});
