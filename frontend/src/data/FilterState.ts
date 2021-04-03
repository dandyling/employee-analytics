import { atom, selector } from "recoil";
import { salariesState } from "./SalariesState";

export const filterState = atom<Record<string, boolean>>({
    key: "filterState",
    default: {},
});

export const initialFilterState = selector({
    key: "initialFilterState",
    get: ({ get }) => {
        const salaries = get(salariesState);
        const initial = Object.keys(salaries).reduce(
            (all: Record<string, boolean>, l) => {
                all[l] = true;
                return all;
            },
            {}
        );
        return initial;
    },
});

