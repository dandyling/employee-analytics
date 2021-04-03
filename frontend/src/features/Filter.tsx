import React from "react";
import { useRecoilState } from "recoil";
import { Checkbox } from "../components/checkbox/Checkbox";
import { filterState } from "../data/filter/FilterState";

export const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const handleChange = (e: any, location: string) => {
    const newFilter = { ...filter };
    newFilter[location] = Boolean(e.currentTarget.checked);
    setFilter(newFilter);
  };

  return (
    <div className="flex flex-wrap mx-4">
      {Object.keys(filter).map((location) => {
        return (
          <label className="flex items-center mb-4 mr-8" key={location}>
            <Checkbox
              checked={filter[location]}
              onChange={(e) => handleChange(e, location)}
            />
            {location}
          </label>
        );
      })}
    </div>
  );
};
