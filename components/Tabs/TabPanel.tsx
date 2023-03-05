import { ComponentType } from "react";
import { Tab } from "@headlessui/react";

type ExtractProps<T> = T extends ComponentType<infer P> ? P : T;

const TabPanel: React.FC<ExtractProps<typeof Tab.Panel>> = ({ children }) => {
  return <Tab.Panel className="w-full h-full">{children}</Tab.Panel>;
};

TabPanel.displayName = "TabPanel";

export default TabPanel;
