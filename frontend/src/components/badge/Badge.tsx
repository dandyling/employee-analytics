import { ReactNode } from "react";

export type ColorType = "warning" | "success" | "normal";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: ColorType;
}

export const Badge = (props: Props) => {
  const { children, className = "", variant = "warning" } = props;

  const color = getVariantColor(variant);

  return (
    <div className={`p-1 rounded-full w-28 ${className} ${color}`}>
      {children}
    </div>
  );
};

export const getVariantColor = (variant: ColorType) => {
  switch (variant) {
    case "success":
      return "bg-success";
    case "warning":
      return "bg-warning";
    case "normal":
    default:
      return "bg-normal";
  }
};
