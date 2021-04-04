import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const CardBody = (props: Props) => {
  const { children, className } = props;
  return <div className={`lg:p-4 ${className}`}>{children}</div>;
};
