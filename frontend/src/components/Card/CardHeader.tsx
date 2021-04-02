import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const CardHeader = (props: Props) => {
  const { children } = props;
  return (
    <div className="z-30 flex items-center px-5 py-3 m-4 -mt-5 text-white rounded-sm shadow-md bg-brand">
      {children}
    </div>
  );
};
