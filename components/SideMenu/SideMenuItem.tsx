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
    <nav
      className={classNames(
        "group contents cursor-pointer select-none",
        { "text-white-1 bg-green-1": selected },
        { "hover:text-green-1": !selected }
      )}
    >
      <div
        className={classNames(
          "bg-[inherit] h-full flex items-center pl-5 pr-4"
        )}
      >
        {Icon && <Icon />}
      </div>
      <a className={classNames("py-2 whitespace-nowrap bg-[inherit] w-full")}>
        <span
          className={classNames(
            "block group-hover:translate-x-2 w-full mr-6 transition-all origin-left",
            { "scale-x-0": collapsed }
          )}
        >
          {children}
        </span>
      </a>
      <div
        className={classNames(
          "w-1 bg-[transparent] group-hover:bg-green-1 h-full rounded-full",
          { "bg-green-1 rounded-none": selected }
        )}
      />
    </nav>
  );
};

SideMenuItem.displayName = "SideMenuItem";

export default SideMenuItem;
