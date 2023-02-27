import { ComponentProps } from "react";
import { Tab } from "@headlessui/react";

interface TabGroupProps extends ComponentProps<typeof Tab.Group> {}

const TabGroup: React.FC<TabGroupProps> = ({ children, ...props }) => {
  return (
    <Tab.Group as="div" className="flex flex-col w-full h-full" {...props}>
      {children}
    </Tab.Group>
  );
};

TabGroup.displayName = "TabGroup";

export default TabGroup;
