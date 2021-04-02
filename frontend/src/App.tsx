import React from "react";
import { RecoilRoot } from "recoil";
import { EmployeeTable } from "./features/EmployeeTable";

function App() {
  return (
    <RecoilRoot>
      <div className="flex justify-center align-middle">
        <div className="container flex flex-col justify-center pt-8">
          <main>
            <EmployeeTable />
          </main>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
