"use client";

import type { ReactElement, ReactNode } from "react";
import { Children, cloneElement, createContext, useContext, useState } from "react";

import { classList } from "./utils/classList";

type TabsContextType = {
  activeTab: number;
  setActiveTab: (index: number) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("");
  }

  return context;
};

type TabsWrapperProps = {
  children: ReactNode;
  className?: string;
};

export const TabsWrapper = ({ children, className = "" }: TabsWrapperProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

type TabsProps = {
  children: ReactElement<HTMLDivElement>[];
  className?: string;
};

export const Tabs = ({ children, className = "" }: TabsProps) => {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <div className={className}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          key: index,
          onClick: () => setActiveTab(index),
          className: classList({
            [child.props.className]: true,
            active: index === activeTab,
          }),
        })
      )}
    </div>
  );
};

type TabsContentProps = {
  children: ReactNode;
  className?: string;
};

export const TabsContent = ({ children, className = "" }: TabsContentProps) => {
  const { activeTab } = useTabs();

  return (
    <div className={className}>
      {Children.map(children, (child, index) =>
        child && typeof child === "object" && "props" in child
          ? cloneElement(child as ReactElement<{ style?: React.CSSProperties }>, {
              key: index,
              style: { display: index === activeTab ? "block" : "none" },
            })
          : child
      )}
    </div>
  );
};
