import { ComponentProps, useContext } from "react";
import classNames from "classnames";

import { SideMenuContext } from "./SideMenu";

interface SideMenuGroupProps extends ComponentProps<"div"> {
  title: string;
}

const SideMenuGroup: React.FC<SideMenuGroupProps> = ({ children, title }) => {
  const { collapsed } = useContext(SideMenuContext);
  return (
    <div className={classNames("transition-all")}>
      <span
        className={classNames("block text-gray-1 my-2 select-none", {
          "text-[transparent] w-0": collapsed,
        })}
      >
        {title}
      </span>
      <div className="grid grid-cols-[max-content_1fr_max-content] items-center justify-start">
        {children}
      </div>
    </div>
  );
};

SideMenuGroup.displayName = "SideMenuGroup";

export default SideMenuGroup;
