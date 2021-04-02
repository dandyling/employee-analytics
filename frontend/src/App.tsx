import { faChartBar, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { RecoilRoot } from "recoil";
import { TabsCard } from "./components/Tabs/TabsCard";
import { EmployeeChart } from "./features/EmployeeChart";
import { EmployeeTable } from "./features/EmployeeTable";

function App() {
  return (
    <RecoilRoot>
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center w-full lg:container lg:pt-8">
          <main>
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
          </main>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
