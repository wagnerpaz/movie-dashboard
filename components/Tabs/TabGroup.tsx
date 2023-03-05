import { ComponentProps } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

interface TabGroupProps extends ComponentProps<typeof Tab.Group> {}

const TabGroup: React.FC<TabGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Tab.Group
      as="div"
      className={classNames("flex flex-col w-full h-full", className)}
      {...props}
    >
      {children}
    </Tab.Group>
  );
};

TabGroup.displayName = "TabGroup";

export default TabGroup;
