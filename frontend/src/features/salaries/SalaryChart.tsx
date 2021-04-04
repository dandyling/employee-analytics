import React, { useMemo } from "react";
import ChartistGraph from "react-chartist";
import { useRecoilValue } from "recoil";
import { salariesFilteredState } from "../../data/salaries/SalariesState";
import { Filter } from "./Filter";

interface Props {
  className?: string;
}

export const SalaryChart = (props: Props) => {
  const { className = "" } = props;
  const aggregates = useRecoilValue(salariesFilteredState);
  const previousData = useMemo(
    () => Object.values(aggregates).map((v) => v.previous / v.count),
    [aggregates]
  );

  const currentData = useMemo(
    () => Object.values(aggregates).map((v) => v.current / v.count),
    [aggregates]
  );

  const data = {
    labels: Object.keys(aggregates),
    series: [previousData, currentData],
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <Filter />
      <div className="flex flex-col flex-1 px-5 py-4 shadow-md lg:rounded-md bg-brand ct-chart">
        <ChartistGraph
          data={data}
          type="Bar"
          options={config.options}
          responsiveOptions={config.responsiveOptions}
          listener={config.animations}
        />
      </div>
    </div>
  );
};

const config = {
  options: {
    axisX: {
      showGrid: false,
    },
    low: 0,
    high: 10000,
    chartPadding: {
      right: 5,
    },
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
  animations: {
    draw: function (data: any) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * 80,
            dur: 500,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    },
  },
};
