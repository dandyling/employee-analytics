import React, { ReactNode, useState } from "react";
import { Card } from "../Card/Card";
import { CardBody } from "../Card/CardBody";
import { CardHeader } from "../Card/CardHeader";
import { TabBar, TabHeader } from "./TabBar";

export interface Tab extends TabHeader {
  tabContent: ReactNode;
}
interface TabsCardProps {
  title?: string;
  tabs: Tab[];
}

export const TabsCard = (props: TabsCardProps) => {
  const { title, tabs } = props;
  const [index, setIndex] = useState(0);
  const { tabContent } = tabs[index];

  const handleChange = (i: number) => {
    setIndex(i);
  };

  return (
    <Card>
      <CardHeader>
        {title && <div className="mr-4">{title}</div>}
        <TabBar tabs={tabs} selected={index} onChange={handleChange} />
      </CardHeader>
      <CardBody>{tabContent}</CardBody>
    </Card>
  );
};
