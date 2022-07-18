import React from "react";
import AnalyzedStatusContainer from "../../../containers/AnalyzedStatusContainer";
import AnalyzedBPMContainer from "../../../containers/AnalyzedBPMContainer";
import AnalyzedSPO2Container from "../../../containers/AnalyzedSPO2Container";
import AnalyzedCoughRateContainer from "../../../containers/AnalyzedCoughRateContainer";
import AnalyzedHeartRateContainer from "../../../containers/AnalyzedHeartRateContainer";
import AnalyzedTempContainer from "../../../containers/AnalyzedTempContainer";

const chartContainers = {
  breathing: <AnalyzedBPMContainer />,
  oxygen: <AnalyzedSPO2Container />,
  cough: <AnalyzedCoughRateContainer />,
  heartrate: <AnalyzedHeartRateContainer />,
  temparature: <AnalyzedTempContainer />,
  final: <AnalyzedStatusContainer />,
};

export const Detail = ({ type }) => {
  let description = "";
  let chartHeader = "";

  switch (type) {
    case "breathing":
      description =
        "This sections shows you an analysis of your breathing pattern in BPM (Breathing Per Minute) within the specified date range.";
      chartHeader = "Breathing Rate Chart";
      break;
    case "temparature":
      description =
        "This sections shows you an analysis of your temparature pattens in Celcius within the specified date range.";
      chartHeader = "Temparature Rate Chart";

      break;
    case "heartrate":
      description =
        "This sections shows you an analysis of your heart rate in BPM (Beats Per Minute) pattern within the specified date range.";
      chartHeader = "Heart Rate Chart";

      break;
    case "cough":
      description =
        "This sections shows you an analysis of your cough rate in CPS (Cough Per Second) within the specified date range.";
      chartHeader = "Cough Rate Chart";

      break;
    case "oxygen":
      description =
        "This sections shows you an analysis of your blood oxygen saturation level in percentage within the specified date range.";
      chartHeader = "Blood Oxygen Level Rate Chart";

      break;
    case "final":
      description =
        "This section shows real-time analysis of your COVID-19 infection status, calculated from the aquired results of the parameter analysis.";
      chartHeader = "COVID-19 Status Chart";

    default:
      break;
  }

  return (
    <div className="text-gray-700 p-6 bg-white rounded-md flex-1 shadow-sm text-sm">
      <p className="text-xs">{description}</p>
      <h4 className="text-sm font-semibold border-b-4 border-b-green-50 my-4 pb-2">
        {chartHeader}
      </h4>
      {chartContainers[type]}
      {type !== "final" && (
        <div className="mt-8">
          <h4 className="text-sm font-semibold border-b-4 border-b-green-50 my-4 pb-2">
            Real-Time Analyzed Data
          </h4>
          <p className="text-xs">* Data is shown for the last 10 minutes</p>
          <table className="table-auto w-full text-left">
            <thead className="uppercase ">
              <tr className="border-b-2 border-b-green-50">
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">BPM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
              <tr className="border-b-2 border-green-50 odd:bg-white even:bg-green-50">
                <td className="py-3 px-6">2022-07-07 08:22</td>
                <td className="py-3 px-6">223</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
