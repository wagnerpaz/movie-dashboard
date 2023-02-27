import { ComponentProps } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

interface TabPanelsProps extends ComponentProps<typeof Tab.Panels> {}

const TabPanels: React.FC<TabPanelsProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Tab.Panels {...props} className={classNames("flex-1", className)}>
      {children}
    </Tab.Panels>
  );
};

TabPanels.displayName = "TabPanels";

export default TabPanels;
