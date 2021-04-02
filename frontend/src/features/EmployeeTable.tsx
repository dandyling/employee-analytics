import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { Table } from "../components/Table/Table";
import { aggregateState } from "../data/Employee";
import { DeltaChip } from "./DeltaChip";

interface EmployeeAverage {
  location: string;
  current: number;
  previous: number;
}

interface EmployeeRow {
  Location: ReactNode;
  Salary: ReactNode;
  Delta: ReactNode;
}

export const EmployeeTable = () => {
  const aggregates = useRecoilValue(aggregateState);
  const locationRows: EmployeeAverage[] = Object.keys(aggregates).map((l) => {
    const aggregate = aggregates[l];
    const currentAverage = aggregate.current / aggregate.count;
    const previousAverage = aggregate.previous / aggregate.count;
    return { location: l, current: currentAverage, previous: previousAverage };
  });

  const totalRow: EmployeeAverage = locationRows.reduce(
    (total, row) => {
      total.current += row.current;
      total.previous += row.previous;
      return total;
    },
    {
      location: "Total",
      current: 0,
      previous: 0,
    }
  );

  const allRows = [...locationRows, totalRow];

  const tableRows: EmployeeRow[] = allRows.map((r) => {
    return {
      Location: r.location,
      Salary: getSalaryStr(r.current),
      Delta: <DeltaChip previous={r.previous} current={r.current} />,
    };
  });

  return (
    <Table
      columns={["Location", "Salary", "Delta"]}
      rows={tableRows}
      variant="highlight-last"
    />
  );
};

const getSalaryStr = (salary: number) => {
  return `$${salary.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })}`;
};
