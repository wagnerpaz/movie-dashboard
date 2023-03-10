import { ComponentProps, ReactNode, useContext } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

interface TabListProps extends ComponentProps<typeof Tab.List> {}

const TabList: React.FC<TabListProps> = ({ children, className, ...props }) => {
  return (
    <Tab.List
      as="div"
      className={classNames(
        "flex flex-row gap-12 font-lato text-2xl",
        className
      )}
      {...props}
    >
      {children}
    </Tab.List>
  );
};

TabList.displayName = "TabList";

export default TabList;
