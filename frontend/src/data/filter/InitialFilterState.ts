import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterState, initialFilterState } from "./FilterState";

export const useInitialFilterState = () => {
  const setFilter = useSetRecoilState(filterState);
  const initialFilter = useRecoilValue(initialFilterState);

  const initFilter = () => {
    setFilter(initialFilter);
  };

  useEffect(initFilter, [initialFilter, setFilter]);
};
