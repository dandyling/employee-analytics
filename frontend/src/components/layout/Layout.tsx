import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-center">
      <main className="flex-col justify-center w-full h-screen lg:container lg:pt-8 lg:pb-4">
        {children}
      </main>
    </div>
  );
};
