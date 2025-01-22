import React from "react";
import { CardType } from "./types";

const Card = ({ card }) => {
  return (
    <div data-testid="card">
      <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
      <p className="text-gray-600">Âge : {card.age}</p>
      <p className="text-gray-600">Métier : {card.job}</p>
      <p className="text-gray-600">Lieu : {card.location}</p>
      <div className="mt-auto"></div>
    </div>
  );
};

Card.propTypes = {
  card: CardType.isRequired,
};

export default Card;
