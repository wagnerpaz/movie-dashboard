import { ComponentProps, useContext } from "react";
import classNames from "classnames";

import { SideMenuContext } from "./SideMenu";

interface SideMenuItemProps extends ComponentProps<"a"> {
  icon?: React.ComponentClass<any>;
  selected?: boolean;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  children,
  icon: Icon,
  selected = false,
}) => {
  const { collapsed } = useContext(SideMenuContext);

  return (
    <nav className="group contents cursor-pointer select-none hover:text-green-1">
      {Icon && <Icon />}
      <a
        className={classNames(
          "py-4 group-hover:translate-x-2 transition-all whitespace-nowrap",
          { "pl-4 mr-6": !collapsed },
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
