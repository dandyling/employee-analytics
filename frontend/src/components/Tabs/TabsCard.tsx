import React, { ReactNode, useState } from "react";
import { Card } from "../card/Card";
import { CardBody } from "../card/CardBody";
import { CardHeader } from "../card/CardHeader";
import { TabBar, TabHeader } from "./TabBar";

export interface Tab extends TabHeader {
  tabContent: ReactNode;
}

interface TabsCardProps {
  title?: string;
  tabs: Tab[];
  className?: string;
}

export const TabsCard = (props: TabsCardProps) => {
  const { title, tabs, className = "" } = props;
  const [index, setIndex] = useState(0);
  const { tabContent } = tabs[index];

  const handleChange = (i: number) => {
    setIndex(i);
  };

  return (
    <Card className={className}>
      <CardHeader>
        {title && <h3 className="mr-4">{title}</h3>}
        <TabBar tabs={tabs} selected={index} onChange={handleChange} />
      </CardHeader>
      <CardBody>{tabContent}</CardBody>
    </Card>
  );
};
