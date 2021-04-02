import { faChartBar, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TabsCard } from "../components/Tabs/TabsCard";
import { filterState, initialFilterState } from "../data/Employee";
import { EmployeeChart } from "./EmployeeChart";
import { EmployeeTable } from "./EmployeeTable";

export const EmployeeData = () => {
  const setFilter = useSetRecoilState(filterState);
  const initialFilter = useRecoilValue(initialFilterState);

  const initFilter = () => {
    setFilter(initialFilter);
  };

  useEffect(initFilter, [initialFilter, setFilter]);

  return (
    <div>
      <TabsCard
        title="Employee Data"
        tabs={[
          {
            tabName: "Chart",
            tabIcon: faChartBar,
            tabContent: <EmployeeChart />,
          },
          {
            tabName: "Data",
            tabIcon: faUser,
            tabContent: <EmployeeTable />,
          },
        ]}
      />
    </div>
  );
};
