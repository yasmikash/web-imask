import React, { useState } from "react";
import { Card, CardSkeleton } from "../components/atoms";
import { Detail } from "../components/molecules/Detail";
import { useApp } from "../context/AppContext";
import { REQUEST_STATUS } from "../utils/constants";

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
  const { requestStatus } = useApp();

  const handleCardClick = (type) => {
    setSelectedCard(type);
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3">
        {REQUEST_STATUS.IDLE === requestStatus.fecthAnalyzedAll ||
        REQUEST_STATUS.PENDING === requestStatus.fecthAnalyzedAll
          ? [...Array(6).keys()].map((key) => <CardSkeleton key={key} />)
          : cards.map((type) => (
              <Card
                type={type}
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
