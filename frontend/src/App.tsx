import React from "react";
import { RecoilRoot } from "recoil";
import { Layout } from "./common/layout/Layout";
import { EmployeeSalaryData } from "./features/EmployeeSalaryData";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <EmployeeSalaryData />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
