import React from "react";
import { Badge, ColorType } from "../../components/badge/Badge";

interface Props {
  previous: number;
  current: number;
}

export const DeltaChip = (props: Props) => {
  const { previous, current } = props;

  const delta = getDelta(previous, current);
  if (!delta) {
    return null;
  }

  const difference = Math.round(delta);
  const variant = getDeltaVariant(difference);

  return (
    <div className="flex items-center justify-center w-full">
      <Badge variant={variant}>{`${difference}%`}</Badge>
    </div>
  );
};

export const getDelta = (previous: number, current: number) => {
  if (previous === 0) {
    return null;
  }
  return ((current - previous) / previous) * 100;
};

export const getDeltaVariant = (delta: number): ColorType => {
  if (delta > 0) {
    return "success";
  } else if (delta < 0) {
    return "warning";
  } else {
    return "normal";
  }
};
