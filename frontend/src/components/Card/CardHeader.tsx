import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const CardHeader = (props: Props) => {
  const { children } = props;
  return (
    <div className="z-30 flex items-center px-5 py-3 mb-4 text-white rounded-sm shadow-md lg:-mt-4 lg:mx-4 bg-brand">
      {children}
    </div>
  );
};
