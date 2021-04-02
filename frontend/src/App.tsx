import React from "react";
import { RecoilRoot } from "recoil";
import { EmployeeChart } from "./features/EmployeeChart";

function App() {
  return (
    <RecoilRoot>
      <div className="flex justify-center align-middle">
        <div className="container flex flex-col justify-center">
          <h1 className="mx-auto text-xl">Employee Data</h1>
          <main>
            <EmployeeChart />
          </main>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
