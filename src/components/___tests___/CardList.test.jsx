import React from "react";
import { render, screen } from "@testing-library/react";
import CardList from "../CardList";

describe("<CardList/>", () => {
  const mockCards = [
    {
      name: "John",
      age: 30,
      job: "Engineer",
      location: "Paris",
    },
    {
      name: "Jane",
      age: 25,
      job: "Designer",
      location: "London",
    },
  ];

  it("should render correctly in case of empty list", () => {
    render(<CardList cards={[]} />);

    const emptyState = screen.getByTestId("empty-card-list");
    expect(emptyState).toBeInTheDocument();

    expect(screen.getByText("No results found!")).toBeInTheDocument();

    const emptyImage = screen.getByAltText("No results found");
    expect(emptyImage).toBeInTheDocument();
  });

  it("should render correctly in case of non empty list", () => {
    render(<CardList cards={mockCards} />);

    const cardsList = screen.getByTestId("card-list");
    expect(cardsList).toBeInTheDocument();

    const cardItems = screen.getAllByTestId("card");
    expect(cardItems.length).toBe(mockCards.length);
  });

  it("should render cards with animation delays based on index", () => {
    render(<CardList cards={mockCards} />);

    const cardItems = screen.getAllByTestId("card-li-element");
    cardItems.forEach((card, index) => {
      expect(card).toHaveStyle(`animation-delay: ${index * 0.1}s`);
    });
  });
});
