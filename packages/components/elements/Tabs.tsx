"use client";

import type { FC, HTMLAttributes, ReactElement, ReactNode } from "react";
import { Children, cloneElement, createContext, useContext, useMemo, useState } from "react";

import { classList } from "./utils/classList";

type TabsContextType = {
  activeTab: number;
  setActiveTab: (index: number) => void;
};

const TabsContext = createContext<TabsContextType>({
  activeTab: 0,
  setActiveTab: () => null,
});

type TabsWrapperProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const TabsWrapper = ({ children, ...props }: TabsWrapperProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const indexContext = useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab, setActiveTab]
  );

  return (
    <TabsContext.Provider value={indexContext}>
      <div {...props}>{children}</div>
    </TabsContext.Provider>
  );
};

type TabsProps = {
  children: ReactElement<HTMLDivElement>[];
} & HTMLAttributes<HTMLElement>;

export const Tabs: FC<TabsProps> = ({ children, ...props }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <div role="tablist" {...props}>
      {Children.map(children as ReactElement<HTMLElement>[], (child, index) =>
        cloneElement(child, {
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
            "Tabs-tab": true,
            "Tabs-tab--active": index === activeTab,
          }),
        } as never)
      )}
    </div>
  );
};

type TabsContentProps = {
  children: ReactElement<HTMLElement>[];
} & HTMLAttributes<HTMLElement>;

export const TabsContent: FC<TabsContentProps> = ({ children, ...props }) => {
  const { activeTab } = useContext(TabsContext);

  return (
    <div {...props}>
      {Children.map(children as ReactElement<HTMLElement>[], (child, index) =>
        cloneElement(child, {
          key: index,
          className: classList({
            [child.props.className]: true,
            "Tabs-content": true,
            "Tabs-content--active": index === activeTab,
          }),
        })
      )}
    </div>
  );
};
