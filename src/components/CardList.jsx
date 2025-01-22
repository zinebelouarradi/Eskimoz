import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { CardType } from "../utils/types";
import noResults from "../assets/noResulsFound.png";

const CardList = ({ cards }) => {
  if (cards.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center text-gray-500 h-[100vh]"
        data-testid="empty-card-list"
      >
        <img
          className="w-full max-w-xs sm:max-w-md md:max-w-lg"
          src={noResults}
          alt="No results found"
        />
        <p className="text-lg">No results found!</p>
      </div>
    );
  }

  return (
    <ul
      className="flex flex-wrap justify-center gap-8 p-2"
      data-testid="card-list"
    >
      {cards.map((card, index) => (
        <li
          key={`${index}${card.name}`}
          className={`sm:w-1/2 md:w-1/3 lg:w-1/4 opacity-0 animate-card bg-[#e9d8a6] border p-4 rounded shadow-sm  w-full h-full`}
          style={{ animationDelay: `${index * 0.1}s` }}
          data-testid="card-li-element"
        >
          <Card card={card} />
        </li>
      ))}
    </ul>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
};

export default CardList;
