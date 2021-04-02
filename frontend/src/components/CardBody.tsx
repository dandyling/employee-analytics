import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const CardBody = (props: Props) => {
  const { children } = props;
  return <div className="p-4">{children}</div>;
};
