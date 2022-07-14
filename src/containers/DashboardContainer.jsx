import React, { useState } from "react";
import { Card } from "../components/atoms";
import { Detail } from "../components/molecules/Detail";

const cards = [
  "final",
  "breathing",
  "temparature",
  "heartrate",
  "cough",
  "oxygen",
];

const DashboardContainer = () => {
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  const handleCardClick = (type) => {
    setSelectedCard(type);
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3">
        {cards.map((type) => (
          <Card
            type={type}
            measure={51}
            active={type === selectedCard}
            onClickCard={handleCardClick}
          />
        ))}
      </div>
      <Detail type={selectedCard} />
    </div>
  );
};

export default DashboardContainer;
