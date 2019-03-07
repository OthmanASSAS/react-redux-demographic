import React from "react";
import Flag from "./Flag";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";
window.Chart = require("chart.js");
ReactChartkick.addAdapter(Chart);

const xTitle = "Age";
const yTitle = "% Mortalité";

const mortalityListItem = () => {
  return (
    <tr>
      <td>
        <Flag country="Argentina" className="flag_medium" />
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
          data={[[12, 13], [22, 31], [11, 11], [34, 55], [44, 22]]}
        />
      </td>
    </tr>
  );
};

export default mortalityListItem;
