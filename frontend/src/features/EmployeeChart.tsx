import React, { useMemo } from "react";
import ChartistGraph from "react-chartist";
import { useRecoilValue } from "recoil";
import { locationSalariesFilteredState } from "../data/Employee";
import { Filter } from "./Filter";

const delays2 = 80;
const durations2 = 500;
const chartHeight = 400;

export const EmployeeChart = () => {
  const aggregates = useRecoilValue(locationSalariesFilteredState);
  const previousData = useMemo(
    () => Object.values(aggregates).map((v) => v.previous / v.count),
    [aggregates]
  );

  const currentData = useMemo(
    () => Object.values(aggregates).map((v) => v.current / v.count),
    [aggregates]
  );

  const employeeChart = {
    data: {
      labels: Object.keys(aggregates),
      series: [previousData, currentData],
    },
    options: {
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 10000,
      chartPadding: {
        right: 5,
      },
      height: chartHeight,
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value: any) {
              return value[0];
            },
          },
        },
      ],
    ],
    animation: {
      draw: function (data: any) {
        if (data.type === "bar") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: "ease",
            },
          });
        }
      },
    },
  };

  return (
    <div className="flex-col">
      <Filter />
      <div className="px-5 py-4 shadow-md lg:rounded-md bg-brand">
        <ChartistGraph
          data={employeeChart.data}
          type="Bar"
          options={employeeChart.options}
          responsiveOptions={employeeChart.responsiveOptions}
          listener={employeeChart.animation}
        />
      </div>
    </div>
  );
};
