import React from "react";
import { RecoilRoot } from "recoil";
import { EmployeeData } from "./features/EmployeeData";

function App() {
  return (
    <RecoilRoot>
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center w-full lg:container lg:pt-8">
          <main>
            <EmployeeData />
          </main>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
