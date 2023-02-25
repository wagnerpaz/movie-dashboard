import { ComponentProps, ReactNode } from "react";

interface SideMenuItemProps extends ComponentProps<"a"> {
  icon?: ReactNode;
  selected?: boolean;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  children,
  icon,
  selected = false,
}) => {
  return (
    <nav className="group contents cursor-pointer select-none ">
      <div className="group-hover:text-green-1">{icon}</div>
      <a className="py-4 group-hover:text-green-1 mr-6 group-hover:translate-x-2 transition-all">
        {children}
      </a>
      <div className="w-1 bg-[transparent] group-hover:bg-green-1 h-full rounded-full" />
    </nav>
  );
};

SideMenuItem.displayName = "SideMenuItem";

export default SideMenuItem;
