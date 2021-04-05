import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const CardBody = (props: Props) => {
  const { children, className = "" } = props;
  return (
    <div
      className={`lg:p-4 flex-1 flex flex-col overflow-hidden overflow-y-auto ${className}`}
    >
      {children}
    </div>
  );
};
