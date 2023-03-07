import { ComponentProps, createContext, Dispatch, SetStateAction } from "react";
import classNames from "classnames";

import LeftArrowIcon from "/icons/left-arrow.svg";

interface SideMenuProps extends ComponentProps<"aside"> {
  collapsed?: boolean;
  onCollapsedChange?: Dispatch<SetStateAction<boolean>>;
}

export const SideMenuContext = createContext({
  collapsed: false,
});

const SideMenu: React.FC<SideMenuProps> = ({
  children,
  collapsed = false,
  onCollapsedChange = () => {},
}) => {
  return (
    <aside
      className={classNames(
        `
        sticky top-0
        flex flex-col justify-between  
        font-lato bg-dark-1 text-white-1 h-screen py-8 w-fit 
        overflow-y-auto overflow-x-hidden custom-scrollbar
        `
      )}
    >
      <button
        className={classNames(
          "absolute top-0 right-0 bg-green-1 rounded-full rounded-r-none px-2 py-1 z-10 transition-all"
        )}
        onClick={() => onCollapsedChange(!collapsed)}
      >
        <LeftArrowIcon
          className={classNames({ "rotate-180 transition-all": collapsed })}
        />
      </button>
      <SideMenuContext.Provider value={{ collapsed }}>
        {children}
      </SideMenuContext.Provider>
    </aside>
  );
};

SideMenu.displayName = "SideMenu";

export default SideMenu;
