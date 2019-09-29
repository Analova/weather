import React from "react";
import _ from "lodash";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function avarage(data) {
  return _.round(_.sum(data) / data.length);
}

const Chart = props => {
  return (
    <div>
      <Sparklines svgWidth={120} svgHeigh={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {avarage(props.data)} {props.units}
      </div>
    </div>
  );
};

export default Chart;