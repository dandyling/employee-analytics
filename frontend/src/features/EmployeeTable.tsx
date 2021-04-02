import React from "react";
import { useRecoilValue } from "recoil";
import { Card } from "../components/Card/Card";
import { CardBody } from "../components/Card/CardBody";
import { CardHeader } from "../components/Card/CardHeader";
import { Table } from "../components/Table/Table";
import { aggregateState } from "../data/Employee";

interface EmployeeAverage {
  location: string;
  current: number;
  previous: number;
}

interface EmployeeRow {
  Location: string;
  Salary: string;
  Delta: string;
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
      Salary: `$${r.current.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      })}`,
      Delta: `${getDelta(r.previous, r.current).toFixed(0)}%`,
    };
  });

  return (
    <Card>
      <CardHeader>Employee Data</CardHeader>
      <CardBody>
        <Table
          columns={["Location", "Salary", "Delta"]}
          rows={tableRows}
          variant="highlight-last"
        />
      </CardBody>
    </Card>
  );
};

const getDelta = (current: number, previous: number) => {
  return ((current - previous) / previous) * 100;
};
