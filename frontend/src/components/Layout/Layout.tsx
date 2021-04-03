import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col justify-center w-full lg:container lg:pt-8">
        {children}
      </main>
    </div>
  );
};
