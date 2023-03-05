import { ComponentProps, useContext } from "react";
import classNames from "classnames";

import { SideMenuContext } from "./SideMenu";

interface SideMenuGroupProps extends ComponentProps<"div"> {
  title: string;
}

const SideMenuGroup: React.FC<SideMenuGroupProps> = ({ children, title }) => {
  const { collapsed } = useContext(SideMenuContext);
  return (
    <div>
      <span
        className={classNames("ml-4 block my-2 select-none transition-all", {
          "text-gray-1": !collapsed,
          "text-[transparent] w-0 ml-0 text-clip": collapsed,
        })}
      >
        {title}
      </span>
      <div
        className={classNames(
          "grid items-center justify-start gap-y-4 transition-all",
          {
            "grid-cols-[max-content_1fr_max-content]": !collapsed,
            "grid-cols-[max-content_0_max-content]": collapsed,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

SideMenuGroup.displayName = "SideMenuGroup";

export default SideMenuGroup;
