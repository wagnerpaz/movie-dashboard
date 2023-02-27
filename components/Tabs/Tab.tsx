import { ComponentProps, Fragment, ReactNode } from "react";
import { Tab as HeadlessTab } from "@headlessui/react";
import classNames from "classnames";

interface TabProps extends ComponentProps<typeof HeadlessTab> {}

const Tab: React.FC<TabProps> = ({ children }) => {
  return (
    <HeadlessTab as={Fragment}>
      {({ selected }) => (
        <nav
          className={classNames(
            "flex flex-col items-center cursor-pointer outline-none",
            {
              "text-white-1": !selected,
              "text-green-1 font-bold": selected,
            }
          )}
        >
          <span className="block flex-1">{children as ReactNode}</span>
          <div
            className={classNames(
              "h-[5px] rounded-full mt-2 w-[calc(100%+20px)]",
              {
                transparent: !selected,
                "bg-green-1": selected,
              }
            )}
          />
        </nav>
      )}
    </HeadlessTab>
  );
};

Tab.displayName = "Tab";

export default Tab;
