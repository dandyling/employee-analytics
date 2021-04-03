import { faChartBar, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { TabsCard } from "../components/Tabs/TabsCard";
import { useInitialFilterState } from "../data/InitialFilterState";
import { SalaryChart } from "./SalaryChart";
import { SalaryTable } from "./SalaryTable";

export const EmployeeSalaryData = () => {
  useInitialFilterState();

  return (
    <TabsCard
      title="Employee Data"
      tabs={[
        {
          tabName: "Chart",
          tabIcon: faChartBar,
          tabContent: <SalaryChart />,
        },
        {
          tabName: "Data",
          tabIcon: faUser,
          tabContent: <SalaryTable />,
        },
      ]}
    />
  );
};
