import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Card = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex-col w-full mb-8 text-sm text-black break-words bg-white border-none rounded lg:shadow lg:mt8">
      {children}
    </div>
  );
};
