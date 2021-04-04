import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Card = (props: Props) => {
  const { children, className = "" } = props;
  return (
    <div
      className={`flex flex-col w-full mb-8 text-sm text-black break-words bg-white border-none rounded lg:shadow lg:mt8 ${className}`}
    >
      {children}
    </div>
  );
};
