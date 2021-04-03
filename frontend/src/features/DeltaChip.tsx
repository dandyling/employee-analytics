import React from "react";
import { Badge, ColorType } from "../components/badge/Badge";

interface Props {
  previous: number;
  current: number;
}

export const DeltaChip = (props: Props) => {
  const { previous, current } = props;

  const difference = Math.round(getDelta(previous, current));
  const variant = getDeltaVariant(difference);

  return (
    <div className="flex items-center justify-center w-full">
      <Badge variant={variant}>{`${difference}%`}</Badge>
    </div>
  );
};

const getDelta = (current: number, previous: number) => {
  return ((current - previous) / previous) * 100;
};

const getDeltaVariant = (delta: number): ColorType => {
  if (delta > 0) {
    return "success";
  } else if (delta < 0) {
    return "warning";
  } else {
    return "normal";
  }
};
