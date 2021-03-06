import React from "react";
import { useApp } from "../../../context/AppContext";

const Card = ({ type, active, onClickCard }) => {
  const { analyzedAll } = useApp();

  let title = "";
  let unit = "";
  let icon = "";
  let bgColor = "bg-white";
  let titleBorderColor = "border-b-green-50";
  let measure = 0;

  switch (type) {
    case "breathing":
      title = "Breathing Pattern";
      unit = "BPM";
      icon = "bg-breathing";
      measure = analyzedAll.avgBpm;
      break;
    case "temparature":
      title = "Temparature";
      unit = "°C";
      icon = "bg-temparature";
      measure = analyzedAll.avgTemperature;

      break;
    case "heartrate":
      title = "Heart Rate";
      unit = "BPM";
      icon = "bg-heartrate";
      measure = analyzedAll.avgHeartRate;

      break;
    case "cough":
      title = "Cough";
      unit = "CPS";
      icon = "bg-cough";
      measure = analyzedAll.avgCoughRate;

      break;
    case "oxygen":
      title = "Oxygen Saturation";
      unit = "%";
      icon = "bg-oxygen";
      measure = analyzedAll.avgSpo2;
      break;
    case "final":
      title = "COVID-19 Status";
      unit = "%";
      icon = "bg-final";
      measure = analyzedAll.avgCovidStatusProbability * 100;

    default:
      break;
  }

  if (type === "final" && Number(measure) > 80) {
    bgColor = "bg-red-50";
    titleBorderColor = "border-b-red-100";
  }

  if (type === "final" && Number(measure) <= 80) {
    bgColor = "bg-green-50";
    titleBorderColor = "border-b-green-100";
  }

  return (
    <button
      onClick={() => onClickCard(type)}
      className={`${
        active && "ring-2 ring-light-green"
      } cursor-pointer w-64 h-24 rounded-md shadow-sm p-2 
    flex gap-4 ${bgColor} ${icon}
    bg-[right_8px_top_8px] bg-[length:50px_50px]
    bg-no-repeat`}
    >
      <div className="flex flex-col justify-between items-start">
        <div
          className={`mb-2 border-b-4 ${titleBorderColor} font-medium 
          text-md text-dark-green`}
        >
          {title}
        </div>
        <div className="text-gray-500 text-lg font-bold">
          <span className="text-xl">{measure}</span> {unit}
        </div>
      </div>
    </button>
  );
};

export default Card;
