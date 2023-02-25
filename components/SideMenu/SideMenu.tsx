import { ComponentProps, createContext } from "react";

import LeftArrowIcon from "/icons/left-arrow.svg";

interface SideMenuProps extends ComponentProps<"aside"> {
  collapsed?: boolean;
}

const SideMenuContext = createContext({ collapsed: false });

const SideMenu: React.FC<SideMenuProps> = ({ children, collapsed = false }) => {
  return (
    <aside
      className={`
        relative
        flex flex-col justify-between  
        font-lato bg-dark-1 text-white-1 h-screen p-8 pr-0 w-fit 
        overflow-y-auto overflow-x-visible custom-scrollbar
        `}
    >
      <button className="absolute left-[85%] right-0 top-0 bg-green-1 rounded-full rounded-r-none px-2 py-1 z-10 hover:left-1/2 transition-all">
        <LeftArrowIcon />
      </button>
      <SideMenuContext.Provider value={{ collapsed }}>
        {children}
      </SideMenuContext.Provider>
    </aside>
  );
};

SideMenu.displayName = "SideMenu";

export default SideMenu;
