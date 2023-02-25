import { ComponentProps } from "react";

interface SideMenuGroupProps extends ComponentProps<"div"> {
  title: string;
}

const SideMenuGroup: React.FC<SideMenuGroupProps> = ({ children, title }) => {
  return (
    <div>
      <span className="block text-gray-1 my-2 select-none">{title}</span>
      <div className="grid grid-cols-[max-content_1fr_max-content] items-center justify-start gap-x-4">
        {children}
      </div>
    </div>
  );
};

SideMenuGroup.displayName = "SideMenuGroup";

export default SideMenuGroup;
