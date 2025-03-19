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
    <div role="tablist" className={className}>
      {Children.map(children, (child, index) =>
        cloneElement(
          child as ReactElement<{
            onClick?: () => void;
            className?: string;
            role?: string;
            id?: string;
            tabIndex?: number;
            "aria-selected"?: boolean;
            "aria-controls"?: string;
            onKeyDown?: (event: React.KeyboardEvent) => void;
          }>,
          {
            key: index,
            role: "tab",
            id: `tab-${index}`,
            "aria-selected": index === activeTab,
            "aria-controls": `panel-${index}`,
            tabIndex: index === activeTab ? 0 : -1,
            onClick: () => setActiveTab(index),
            onKeyDown: (event: React.KeyboardEvent) => {
              let newIndex = activeTab;

              if (event.key === "ArrowRight") {
                newIndex = (activeTab + 1) % children.length;
              } else if (event.key === "ArrowLeft") {
                newIndex = (activeTab - 1 + children.length) % children.length;
              }

              setActiveTab(newIndex);
            },
            className: classList({
              [child.props.className]: true,
              Active: index === activeTab,
            }),
          }
        )
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
