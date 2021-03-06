import React, { ReactNode, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { Table } from "../../components/table/Table";
import { LocationSalaries } from "../../data/salaries/SalaryData";
import { salariesFilteredState } from "../../data/salaries/SalariesState";
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

interface Props {
  className?: string;
}

export const SalaryTable = (props: Props) => {
  const { className = "" } = props;
  const salaries = useRecoilValue(salariesFilteredState);

  const rows = useMemo(() => getTableRows(salaries), [salaries]);

  return (
    <div className={`flex flex-col ${className}`}>
      <Filter />
      <Table
        columns={["Location", "Salary", "Delta"]}
        rows={rows}
        variant="highlight-last"
        className="flex-1 bg-gray-50"
      />
    </div>
  );
};

export const mapLocationRows = (salaries: LocationSalaries): LocationRow[] => {
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

export const calcTotalSalaries = (locations: LocationRow[]): LocationRow => {
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

export const getAllLocationRows = (salaries: LocationSalaries) => {
  const locationRows: LocationRow[] = mapLocationRows(salaries);
  const total: LocationRow = calcTotalSalaries(locationRows);
  const allRows = [...locationRows, total];
  return allRows;
};

export const mapTableRows = (rows: LocationRow[]) => {
  const tableRows = rows.map((r) => {
    const { location, current, previous } = r;
    return {
      Location: location,
      Salary: getSalaryStr(current),
      Delta: <DeltaChip previous={previous} current={current} />,
    };
  });
  return tableRows;
};

export const getTableRows = (salaries: LocationSalaries) => {
  const locationRows = getAllLocationRows(salaries);
  const rows: TableRow[] = mapTableRows(locationRows);
  return rows;
};

export const getSalaryStr = (salary: number) => {
  const prefix = salary >= 0 ? "$" : "-$";
  return `${prefix}${Math.abs(salary).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })}`;
};
