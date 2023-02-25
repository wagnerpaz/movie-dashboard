import { ComponentProps, ReactNode, useContext } from "react";
import classNames from "classnames";

import { SideMenuContext } from "./SideMenu";

interface SideMenuItemProps extends ComponentProps<"a"> {
  icon?: ReactNode;
  selected?: boolean;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  children,
  icon,
  selected = false,
}) => {
  const { collapsed } = useContext(SideMenuContext);

  return (
    <nav className="group contents cursor-pointer select-none hover:text-green-1">
      {icon}
      <a
        className={classNames(
          "py-4 pl-4 mr-6",
          "group-hover:translate-x-2 transition-all whitespace-nowrap",
          { "scale-x-0 w-0 mr-0 pl-0 pr-3": collapsed }
        )}
      >
        {children}
      </a>
      <div className="w-1 bg-[transparent] group-hover:bg-green-1 h-full rounded-full" />
    </nav>
  );
};

SideMenuItem.displayName = "SideMenuItem";

export default SideMenuItem;
