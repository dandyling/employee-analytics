import React from "react";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/layout/Layout";
import { EmployeeSalaryData } from "./features/salaries/EmployeeSalaryData";

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
