import { ComponentProps, ReactNode, useContext } from "react";
import { Tab } from "@headlessui/react";

interface TabListProps extends ComponentProps<typeof Tab.List> {}

const TabList: React.FC<TabListProps> = ({ children, ...props }) => {
  return (
    <Tab.List
      as="div"
      className="flex flex-row gap-12 font-lato text-2xl"
      {...props}
    >
      {children}
    </Tab.List>
  );
};

TabList.displayName = "TabList";

export default TabList;
