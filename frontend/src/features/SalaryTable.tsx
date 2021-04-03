import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { Table } from "../components/Table/Table";
import { LocationSalaries } from "../data/Employee";
import { salariesFilteredState } from "../data/SalariesState";
import { DeltaChip } from "./DeltaChip";
import { Filter } from "./Filter";

interface LocationRow {
  location: string;
  current: number;
  previous: number;
}

interface TableRow {
  Location: ReactNode;
  Salary: ReactNode;
  Delta: ReactNode;
}

export const SalaryTable = () => {
  const salaries = useRecoilValue(salariesFilteredState);

  const getLocationRows = () => {
    const locationRows: LocationRow[] = mapLocationRows(salaries);
    const total: LocationRow = calcTotalSalaries(locationRows);
    const allRows = [...locationRows, total];
    return allRows;
  };

  const rows = getLocationRows();
  const tableRows: TableRow[] = rows.map((r) => {
    const { location, current, previous } = r;
    return {
      Location: location,
      Salary: getSalaryStr(current),
      Delta: <DeltaChip previous={previous} current={current} />,
    };
  });

  return (
    <div className="flex-col">
      <Filter />
      <Table
        columns={["Location", "Salary", "Delta"]}
        rows={tableRows}
        variant="highlight-last"
      />
    </div>
  );
};

const mapLocationRows = (salaries: LocationSalaries): LocationRow[] => {
  const locations = Object.keys(salaries).map((l) => {
    const aggregate = salaries[l];
    const currentAverage = aggregate.current / aggregate.count;
    const previousAverage = aggregate.previous / aggregate.count;
    const location: LocationRow = {
      location: l,
      current: currentAverage,
      previous: previousAverage,
    };
    return location;
  });
  return locations;
};

const calcTotalSalaries = (locations: LocationRow[]): LocationRow => {
  const total = locations.reduce(
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
  return total;
};

const getSalaryStr = (salary: number) => {
  return `$${salary.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })}`;
};
