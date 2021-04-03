import React from "react";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/Layout/Layout";
import { EmployeeData } from "./features/EmployeeData";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <EmployeeData />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
