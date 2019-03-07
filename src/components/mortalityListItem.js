import React from "react";
import Flag from "./Flag";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";
window.Chart = require("chart.js");



const xTitle = "Age";
const yTitle = "% Mortalité";
const mortalityListItem = ({ mortality }) => {
  const formatedDataMale = formatMortalityData(mortality.male);
  const formatedDataFemale = formatMortalityData(mortality.female);
  console.log({ formatedDataMale });
  console.log({ formatedDataFemale });
  return (
    <tr>
      <td>
        <Flag country={mortality.country} className="flag_medium" />
      </td>
      <td className="col-md-6">
        <ColumnChart
          xTitle={xTitle}
          yTitle={yTitle}
          data={[[12, 13], [22, 31], [11, 11], [34, 55], [44, 22]]}
        />
      </td>
      <td className="col-md-6">
        <ColumnChart
          xTitle={xTitle}
          yTitle={yTitle}
          data={[[12, 13], [22, 31], [11, 11], [34, 55], [44, 22]]} max={30}
        />
      </td>
    </tr>
  );
};

const formatMortalityData = mortality => {
  const filteredData = mortality.filter(data => data.age <= 101);
  const array = filteredData.map(data => {
    return [Number((data.age).toFixed(0)), Number((data.mortality_percent).toFixed(0))];
  });
  return array;
};

export default mortalityListItem;
